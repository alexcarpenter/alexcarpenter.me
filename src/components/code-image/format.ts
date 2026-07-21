import prettier from "prettier/standalone";
import estree from "prettier/plugins/estree";
import html from "prettier/plugins/html";
import postcss from "prettier/plugins/postcss";
import typescript from "prettier/plugins/typescript";
import { detectLanguage, type CodeLanguage } from "./language";

export async function formatPastedCode(code: string, lang: CodeLanguage) {
  const normalized = normalizeIndentation(code);
  const diffLines = getDiffLines(normalized);
  const language = lang || detectLanguage(normalized);
  const codeToFormat = normalizeForPrettier(
    diffLines.length ? stripDiffMarkers(normalized) : normalized,
    language,
  );

  const parser = parserForLanguage(language);

  const formatted = (
    await prettier.format(codeToFormat, {
      parser: parser.name,
      plugins: parser.plugins,
      printWidth: 80,
      singleQuote: false,
    })
  ).trimEnd();

  return diffLines.length
    ? reapplyDiffMarkers(formatted, diffLines)
    : formatted;
}

function normalizeForPrettier(code: string, lang: CodeLanguage) {
  if (lang !== "tsx") return code;

  // People often paste JSX prop callbacks from prose/snippets as
  // `sx={{ t => ({ ... })}}`, which is not valid TSX. Normalize that common
  // shape before handing it to Prettier so Prettier can do the real formatting.
  return code
    .replace(/=\{\{\s*([A-Za-z_$][\w$]*)\s*=>/g, "={($1) =>")
    .replace(/\}\)\}\}(\s*\/?\s*>?)/g, "})}$1");
}

function parserForLanguage(lang: CodeLanguage) {
  switch (lang) {
    case "html":
      return { name: "html", plugins: [html] };
    case "css":
      return { name: "css", plugins: [postcss] };
    case "tsx":
      return { name: "typescript", plugins: [typescript, estree] };
  }
}

function normalizeIndentation(code: string) {
  const trimmed = code.replace(/^\n+|\n+$/g, "");
  const lines = trimmed.split("\n");
  const indents = lines
    .filter((line) => line.trim())
    .map((line) => line.match(/^\s*/)?.[0].length ?? 0);
  const minIndent = indents.length ? Math.min(...indents) : 0;

  return lines.map((line) => line.slice(minIndent)).join("\n");
}

function getDiffLines(code: string) {
  return code
    .split("\n")
    .map((line) => {
      const match = line.match(/^\s*([-+*])(?!\1)\s?(.*)$/);
      if (!match) return;

      return {
        type: match[1] as "+" | "-" | "*",
        content: normalizeLineForDiffMatch(match[2]),
      };
    })
    .filter((line): line is { type: "+" | "-" | "*"; content: string } =>
      Boolean(line),
    );
}

function stripDiffMarkers(code: string) {
  return code
    .split("\n")
    .map((line) => line.replace(/^(\s*)([-+*])(?!\2)\s?/, "$1"))
    .join("\n");
}

function reapplyDiffMarkers(
  code: string,
  diffLines: Array<{ type: "+" | "-" | "*"; content: string }>,
) {
  const remainingDiffLines = [...diffLines];

  return code
    .split("\n")
    .map((line) => {
      const matchIndex = remainingDiffLines.findIndex(
        (diffLine) => diffLine.content === normalizeLineForDiffMatch(line),
      );

      if (matchIndex === -1) return line;

      const [diffLine] = remainingDiffLines.splice(matchIndex, 1);
      return `${diffLine.type} ${line}`;
    })
    .join("\n");
}

function normalizeLineForDiffMatch(line: string) {
  return line.trim().replace(/[\s,;]+/g, "");
}
