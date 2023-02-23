import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  position: "relative",
});

globalStyle(`${root} > * + *`, {
  marginTop: "1rem",
});

globalStyle(`${root} > * + h2, ${root} > * + h3`, {
  marginTop: "2rem",
});

globalStyle(`${root} a`, {
  textDecoration: "underline",
  textDecorationColor: vars.color.border,
  textDecorationThickness: 1.5,
  textUnderlineOffset: 1.5,
});

globalStyle(`${root} a:hover`, {
  textDecorationColor: "currentColor",
});

globalStyle(`${root} ul`, {
  paddingLeft: "1em",
});

globalStyle(`${root} ul li`, {
  listStyleType: "disc",
});

globalStyle(`${root} ul li li`, {
  listStyleType: "circle",
});

globalStyle(`${root} ul li + li`, {
  marginTop: vars.spacing.xxs,
});

globalStyle(`${root} ul ul`, {
  marginTop: vars.spacing.xxs,
});

globalStyle(`${root} blockquote`, {
  borderLeft: "4px solid",
  borderColor: vars.color.border,
  paddingLeft: vars.spacing.md,
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
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  backgroundColor: vars.color.surface,
  border: "1px solid",
  borderColor: vars.color.border,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  fontSize: vars.fontSize.sm,
});

globalStyle("pre[data-language]", {
  whiteSpace: "pre",
  backgroundColor: vars.color.surface,
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
  paddingTop: vars.spacing.md,
  paddingBottom: vars.spacing.md,
});

globalStyle("div[data-rehype-pretty-code-fragment] .syntax-line", {
  borderLeft: "4px solid",
  borderLeftColor: "transparent",
  paddingRight: vars.spacing.md,
  paddingLeft: vars.spacing.md,
});

/* Line highlighting */
// globalStyle("div[data-rehype-pretty-code-fragment] .syntax-line--highlighted", {
// backgroundColor: vars.color.codeHighlight,
// borderColor: vars.color.highlight,
// });

/* Numbered lines */
globalStyle("code[data-line-numbers]", {
  counterReset: "line",
});

globalStyle("code[data-line-numbers] .syntax-line::before", {
  counterIncrement: "line",
  content: "counter(line)",
  display: "inline-block",
  textAlign: "right",
  marginRight: vars.spacing.md,
  opacity: 0.5,
});
