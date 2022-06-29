import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const root = style({});

export const internal = style({
  textDecoration: "underline",
  textDecorationColor: themeVars.color.foreground,
  ":hover": {
    textDecoration: "none",
  },
});

export const external = style({
  ":hover": {
    textDecoration: "underline",
    textDecorationColor: themeVars.color.foreground,
  },
});
