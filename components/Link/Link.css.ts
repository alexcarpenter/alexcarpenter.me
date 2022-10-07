import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";

export const root = style({
  ":hover": {
    textDecoration: "underline",
  },
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

export const underline = style({
  textDecoration: "underline",
  ":hover": {
    textDecoration: "none",
  },
});
