import { globalStyle, globalFontFace } from "@vanilla-extract/css";
import { vars } from "./vars.css";

/**
 * Easing Linear Gradients
 * @see https://css-tricks.com/easing-linear-gradients/
 */
const scrim = (to: "top" | "bottom") => {
  return `linear-gradient(to ${to}, hsl(${vars.color.scrim}) 0%, hsla(${vars.color.scrim}, 0.738) 19%, hsla(${vars.color.scrim}, 0.541) 34%, hsla(${vars.color.scrim}, 0.382) 47%, hsla(${vars.color.scrim}, 0.278) 56.5%, hsla(${vars.color.scrim}, 0.194) 65%, hsla(${vars.color.scrim}, 0.126) 73%, hsla(${vars.color.scrim}, 0.075) 80.2%, hsla(${vars.color.scrim}, 0.042) 86.1%, hsla(${vars.color.scrim}, 0.021) 91%, hsla(${vars.color.scrim}, 0.008) 95.2%, hsla(${vars.color.scrim}, 0.002) 98.2%, hsla(${vars.color.scrim}, 0) 100%)`;
};

globalFontFace("Inter", {
  fontStyle: "normal",
  fontWeight: "100 900",
  fontDisplay: "optional",
  src: 'url(/fonts/inter-var-latin.woff2) format("woff2")',
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
});

globalFontFace("JetBrainsMono", {
  fontStyle: "normal",
  fontWeight: "400",
  fontDisplay: "optional",
  src: 'url(/fonts/JetBrainsMono-Variable.woff2) format("woff2")',
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
});

globalStyle("html", {
  lineHeight: 1.4,
  WebkitTextSizeAdjust: "100%",
});

globalStyle("body", {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textRendering: "optimizeLegibility",
  fontFamily: vars.font.sans,
  backgroundColor: vars.color.page,
  overflowX: "hidden",
});

globalStyle("body::before", {
  content: "",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: vars.spacing.xxxl,
  backgroundImage: scrim("bottom"),
  zIndex: 100,
  pointerEvents: "none",
});

globalStyle("body::after", {
  content: "",
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  height: vars.spacing.xxxl,
  backgroundImage: scrim("top"),
  zIndex: 100,
  pointerEvents: "none",
});

globalStyle(".container", {
  paddingInline: vars.spacing.lg,
  paddingBlock: vars.spacing.xxxl,
  maxInlineSize: "112.5rem",
  marginInline: "auto",
});

globalStyle("a:focus, button:focus", {
  outlineColor: "transparent",
});

globalStyle("a:focus-visible, button:focus-visible", {
  outlineWidth: "2px",
  outlineStyle: "solid",
  outlineOffset: "2px",
  outlineColor: vars.color.outline,
});

globalStyle("img", {
  height: "auto",
});
