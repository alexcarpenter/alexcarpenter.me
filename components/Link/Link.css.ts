import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  textDecoration: "underline",
  textDecorationColor: vars.color.underline,
  ":visited": {
    textDecorationColor: vars.color.underlineVisited,
  },
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
