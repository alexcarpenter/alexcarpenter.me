import { globalStyle, globalFontFace } from "@vanilla-extract/css";
import { tokens } from "./tokens.css";
import { themeVars } from "./theme.css";

globalFontFace("Inter", {
  fontStyle: "normal",
  fontWeight: "100 900",
  fontDisplay: "optional",
  src: 'url(/fonts/inter-var-latin.woff2) format("woff2")',
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
});

globalStyle("html", {
  fontSize: "0.875rem",
  lineHeight: 1.5,
});

globalStyle("body", {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textRendering: "optimizeLegibility",
  fontFamily: tokens.font.sans,
  backgroundColor: themeVars.color.page,
  color: themeVars.color.foreground,
});

globalStyle("body, #__next, .container", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

globalStyle(".container", {
  paddingTop: tokens.spacing.xxxl,
  paddingRight: tokens.spacing.lg,
  paddingBottom: tokens.spacing.xxxl,
  paddingLeft: tokens.spacing.lg,
  width: "100%",
  maxWidth: tokens.maxWidth.md,
  marginRight: "auto",
  marginLeft: "auto",
});

globalStyle("a, button", {
  color: themeVars.color.foregroundHighlight,
  cursor: "pointer",
});

globalStyle("button:focus-visible", {
  outlineWidth: "2px",
  outlineStyle: "solid",
  outlineOffset: "2px",
  outlineColor: themeVars.color.outline,
});

globalStyle("a:focus-visible", {
  outlineWidth: "2px",
  outlineStyle: "solid",
  outlineOffset: "2px",
  outlineColor: themeVars.color.outline,
});
