import { globalStyle, globalFontFace } from "@vanilla-extract/css";
import { tokens } from "./tokens.css";
import { vars } from "./theme.css";

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
});

globalStyle("body", {
  fontFamily: tokens.font.sans,
  backgroundColor: vars.color.page,
  color: vars.color.foreground,
});

globalStyle("body, #__next, [data-overlay-container]", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});
