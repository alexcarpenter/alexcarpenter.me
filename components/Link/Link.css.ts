import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  textDecoration: "underline",
  ":focus": {
    outline: "transparent",
  },
  ":focus-visible": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineOffset: "2px",
    outlineColor: vars.color.outline,
  },
});

export const variants = styleVariants({
  highlight: [root, { textDecorationColor: vars.color.underline }],
  neutral: [root, { textDecorationColor: vars.color.underlineNeutral }],
});
