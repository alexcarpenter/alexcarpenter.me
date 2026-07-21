import { transformerRenderWhitespace } from "@shikijs/transformers";
import { createHighlighter, type Highlighter } from "shiki";
import type { CodeLanguage } from "./language";

export type LineStyle = "highlighted" | "add" | "remove";

let highlighterPromise: Promise<Highlighter> | undefined;

function getHighlighter() {
  highlighterPromise ??= createHighlighter({
    themes: ["github-light", "github-dark"],
    langs: ["html", "css", "tsx"],
  });

  return highlighterPromise;
}

export async function highlightCode(code: string, lang: CodeLanguage) {
  const highlighter = await getHighlighter();
  const { normalizedCode, lineClasses } = normalizeDiffLines(code || " ");

  return addLineClasses(
    highlighter
      .codeToHtml(normalizedCode, {
        lang,
        themes: {
          light: "github-light",
          dark: "github-dark",
        },
        transformers: [transformerRenderWhitespace()],
      })
      .replace('<pre class="shiki', `<pre class="astro-code shiki`)
      .replace("<pre ", `<pre data-language="${lang}" `),
    lineClasses,
  );
}

function normalizeDiffLines(code: string) {
  const lineClasses: Array<LineStyle | undefined> = [];
  const normalizedCode = code
    .split("\n")
    .map((line, index) => {
      const diffMatch = line.match(/^(\s*)([-+*])(?!\2)\s?(.*)$/);

      if (diffMatch) {
        lineClasses[index] = lineClassForMarker(diffMatch[2]);
        return `${diffMatch[1]}${diffMatch[3]}`;
      }

      return line;
    })
    .join("\n");

  return { normalizedCode, lineClasses };
}

function lineClassForMarker(marker: string): LineStyle {
  switch (marker) {
    case "+":
      return "add";
    case "-":
      return "remove";
    default:
      return "highlighted";
  }
}

function addLineClasses(
  html: string,
  lineClasses: Array<LineStyle | undefined>,
) {
  let lineIndex = 0;

  return html.replace(/<span class="line/g, (match) => {
    const lineClass = lineClasses[lineIndex++];
    return lineClass ? `<span class="line ${lineClass}` : match;
  });
}
