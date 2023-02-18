import { globalStyle } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

globalStyle(".prose > * + *", {
  marginTop: vars.spacing.lg,
});

globalStyle(".prose > * + h2", {
  marginTop: vars.spacing.xl,
});

globalStyle(".prose strong", {
  fontWeight: 600,
});

globalStyle(".prose blockquote", {
  paddingLeft: vars.spacing.xl,
  borderLeft: "4px solid",
  borderColor: vars.color.border,
});

globalStyle(".prose hr", {
  marginTop: vars.spacing.xl,
  marginBottom: vars.spacing.xl,
  height: 1,
  backgroundColor: vars.color.border,
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
  fontFamily: vars.font.mono,
  fontSize: "0.9rem",
});

globalStyle("[data-rehype-pretty-code-title]", {
  padding: `${vars.spacing.md} ${vars.spacing.lg}`,
  backgroundColor: vars.color.surface,
  border: "1px solid",
  borderColor: vars.color.border,
  borderRadius: vars.radius.md,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  fontSize: vars.fontSize.sm,
});

globalStyle("pre[data-language]", {
  whiteSpace: "pre",
  backgroundColor: vars.color.surface,
  border: "1px solid",
  borderColor: vars.color.border,
  borderRadius: vars.radius.md,
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
  paddingTop: vars.spacing.lg,
  paddingBottom: vars.spacing.lg,
});

globalStyle("div[data-rehype-pretty-code-fragment] .syntax-line", {
  borderLeft: "4px solid",
  borderLeftColor: "transparent",
  paddingRight: vars.spacing.lg,
  paddingLeft: vars.spacing.lg,
});

/* Line highlighting */
globalStyle("div[data-rehype-pretty-code-fragment] .syntax-line--highlighted", {
  backgroundColor: vars.color.codeHighlight,
  borderColor: vars.color.highlight,
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
  marginRight: vars.spacing.lg,
  opacity: 0.5,
});
