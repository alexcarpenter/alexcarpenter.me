import { style, styleVariants } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";

export const root = style({
  textDecoration: "underline",
  ":focus": {
    outline: "transparent",
  },
  ":focus-visible": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineOffset: "2px",
    outlineColor: themeVars.color.outline,
  },
});

export const variants = styleVariants({
  highlight: [root, { textDecorationColor: themeVars.color.underline }],
  neutral: [root, { textDecorationColor: themeVars.color.underlineNeutral }],
});
