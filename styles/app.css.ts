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
  lineHeight: 1.3,
  WebkitTextSizeAdjust: "100%",
});

globalStyle("body", {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textRendering: "optimizeLegibility",
  fontFamily: tokens.font.sans,
  backgroundColor: themeVars.color.page,
  width: "100%",
  maxWidth: "100%",
  overflowX: "hidden",
});

globalStyle("body::before", {
  content: "",
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translate3d(calc(-50% - 150px), -50%, 0)",
  width: 600,
  height: 150,
  background: "linear-gradient(to right, #63d0ff, #844fba)",
  filter: "blur(80px)",
  opacity: 0.6,
  zIndex: 0,
});

globalStyle("body::after", {
  content: "",
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translate3d(calc(-50% + 150px), -50%, 0)",
  width: 600,
  height: 100,
  background: "linear-gradient(to right, #ffb2b8, #c74fb8)",
  filter: "blur(80px)",
  opacity: 0.3,
  zIndex: 0,
});

globalStyle(".container", {
  position: "relative",
  paddingInline: tokens.spacing.lg,
  paddingBlock: tokens.spacing.xxxxl,
});

globalStyle("ul:not([class])", {
  listStyleType: "disc",
  display: "grid",
  paddingInlineStart: tokens.spacing.md,
  gap: tokens.spacing.sm,
});

globalStyle("ul:not([class]) ul:not([class])", {
  marginTop: tokens.spacing.sm,
  listStyleType: "circle",
});
