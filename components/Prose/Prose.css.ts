import { themeVars } from "@/styles/theme.css";
import { tokens } from "@/styles/tokens.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle(".prose > * + *", {
  marginTop: tokens.sizing.lg,
});

/*
 * Code syntax
 */

globalStyle(
  'html.dark div[data-theme="light"], html.dark pre[data-theme="light"], html.dark code[data-theme="light"]',
  {
    display: "none",
  }
);

globalStyle(
  'html.light div[data-theme="dark"], html.light pre[data-theme="dark"], html.light code[data-theme="dark"]',
  {
    display: "none",
  }
);

globalStyle("code", {
  fontFamily: tokens.font.mono,
  fontSize: "0.9rem",
});

globalStyle("[data-rehype-pretty-code-title]", {
  padding: `${tokens.sizing.md} ${tokens.sizing.lg}`,
  backgroundColor: themeVars.color.surface,
  color: themeVars.color.foregroundHighlight,
  fontSize: "0.9rem",
});

globalStyle("pre[data-language]", {
  whiteSpace: "pre",
  backgroundColor: themeVars.color.code,
});

globalStyle("div[data-rehype-pretty-code-fragment] code", {
  display: "grid",
});

globalStyle("div[data-rehype-pretty-code-fragment] pre", {
  overflowX: "auto",
  paddingTop: tokens.sizing.lg,
  paddingBottom: tokens.sizing.lg,
});

globalStyle("div[data-rehype-pretty-code-fragment] .syntax-line", {
  borderLeft: "4px solid",
  borderLeftColor: "transparent",
  paddingRight: tokens.sizing.lg,
  paddingLeft: tokens.sizing.lg,
});

/* Line highlighting */
globalStyle("div[data-rehype-pretty-code-fragment] .syntax-line--highlighted", {
  backgroundColor: themeVars.color.codeHightlight,
  borderColor: themeVars.color.codeAccent,
});

/* Numbered lines */
globalStyle("code[data-line-numbers]", {
  counterReset: "line",
});

globalStyle("code[data-line-numbers] .syntax-line::before", {
  counterIncrement: "line",
  content: "counter(line)",
  display: "inline-block",
  textAlign: "right",
  marginRight: tokens.sizing.lg,
  opacity: 0.5,
});
