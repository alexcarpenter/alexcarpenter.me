export type CodeLanguage = "html" | "css" | "tsx";
export type LanguageMode = "auto" | CodeLanguage;

const languages: CodeLanguage[] = ["html", "css", "tsx"];

export function isCodeLanguage(value: string | null): value is CodeLanguage {
  return languages.includes(value as CodeLanguage);
}

export function isLanguageMode(value: string | null): value is LanguageMode {
  return value === "auto" || isCodeLanguage(value);
}

export function detectLanguage(code: string): CodeLanguage {
  const value = code.trim();

  if (!value) return "tsx";

  const cssSignals = [
    /(^|\n)\s*@(?:media|supports|keyframes|container|layer|font-face)\b/,
    /(^|\n)\s*:root\s*{/,
    /--[\w-]+\s*:/,
    /(?:^|[;{\n])\s*(?:color|display|position|margin|padding|font|background|border|grid|flex|width|height)\s*:/,
    /(^|\n)\s*[.#]?[\w-]+(?:\s*[>+~]\s*|[\w\s.#:[\]=",'-])*\s*{[\s\S]*}\s*$/,
  ];

  const tsxSignals = [
    /\bimport\s+.+\s+from\s+["']/,
    /\bexport\s+(?:default\s+)?(?:function|const|type|interface)\b/,
    /\b(?:const|let|function|type|interface)\s+[A-Za-z_$][\w$]*/,
    /<[A-Z][\w.]*\b[^>]*>/,
    /\{[\w.$()[\]?'"`:+\-/*\s]+\}/,
  ];

  const htmlSignals = [
    /^\s*<!doctype\s+html/i,
    /<html[\s>]/i,
    /<\/?(?:div|span|main|section|article|header|footer|nav|button|form|input|label|ul|li|p|a|img|svg)\b/i,
  ];

  const score = (signals: RegExp[]) =>
    signals.reduce((total, signal) => total + (signal.test(value) ? 1 : 0), 0);

  const css = score(cssSignals);
  const tsx = score(tsxSignals);
  const html = score(htmlSignals);

  if (css >= 2 && css >= tsx && css >= html) return "css";
  if (tsx >= 2 && tsx >= html) return "tsx";
  if (html > 0) return "html";
  if (css > 0) return "css";

  return "tsx";
}
