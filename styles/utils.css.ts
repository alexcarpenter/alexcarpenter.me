import { style } from "@vanilla-extract/css";
import { vars } from "./vars.css";

export const focusVisible = style({
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
