import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  textDecoration: "underline",
  textDecorationColor: vars.color.underlineNeutral,
  textDecorationThickness: 1.5,
  textUnderlineOffset: 1.5,
  transition: "ease-in-out",
  transitionDuration: vars.transition.duration,
  transitionProperty: "text-decoration-color",
  ":hover": {
    textDecorationColor: "inherit",
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
