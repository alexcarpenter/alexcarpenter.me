import { themeVars } from "@/styles/theme.css";
import { tokens } from "@/styles/tokens.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle(".prose > * + *", {
  marginTop: tokens.spacing.lg,
});

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

globalStyle("pre[data-language]", {
  whiteSpace: "pre-wrap",
  backgroundColor: themeVars.color.code,
  borderRadius: tokens.radius.xs,
  paddingTop: tokens.spacing.lg,
  paddingBottom: tokens.spacing.lg,
});

globalStyle("div[data-rehype-pretty-code-fragment] code", {
  display: "grid",
});

globalStyle("div[data-rehype-pretty-code-fragment] pre", {
  overflowX: "auto",
  paddingRight: tokens.spacing.lg,
  paddingLeft: tokens.spacing.lg,
});
