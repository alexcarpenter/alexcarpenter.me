import { style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const underlined = style({
  textDecoration: "underline",
  textDecorationColor: vars.color.underline,
  textDecorationThickness: "1.5",
  textUnderlineOffset: "1.5",
  ":hover": {
    textDecorationColor: "currentColor",
  },
});
