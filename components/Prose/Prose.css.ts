import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle(".prose > * + *", {
  marginTop: tokens.spacing.lg,
});

globalStyle(".prose > * + h2", {
  marginTop: tokens.spacing.xl,
});

globalStyle(".prose strong", {
  fontWeight: 600,
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
  padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
  backgroundColor: themeVars.color.surface,
  border: "1px solid",
  borderColor: themeVars.color.border,
  borderRadius: tokens.radius.md,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  fontSize: tokens.fontSize.sm,
});

globalStyle("pre[data-language]", {
  whiteSpace: "pre",
  backgroundColor: themeVars.color.surface,
  border: "1px solid",
  borderColor: themeVars.color.border,
  borderRadius: tokens.radius.md,
});

globalStyle("[data-rehype-pretty-code-title] + pre[data-language]", {
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderTop: 0,
});

globalStyle("div[data-rehype-pretty-code-fragment] code", {
  display: "grid",
});

globalStyle("div[data-rehype-pretty-code-fragment] pre", {
  overflowX: "auto",
  paddingTop: tokens.spacing.lg,
  paddingBottom: tokens.spacing.lg,
});

globalStyle("div[data-rehype-pretty-code-fragment] .syntax-line", {
  borderLeft: "4px solid",
  borderLeftColor: "transparent",
  paddingRight: tokens.spacing.lg,
  paddingLeft: tokens.spacing.lg,
});

/* Line highlighting */
globalStyle("div[data-rehype-pretty-code-fragment] .syntax-line--highlighted", {
  backgroundColor: themeVars.color.codeHighlight,
  borderColor: themeVars.color.highlight,
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
  marginRight: tokens.spacing.lg,
  opacity: 0.5,
});
