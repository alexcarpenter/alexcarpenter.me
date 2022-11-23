import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  position: "relative",
});

export const content = style({
  marginBottom: tokens.spacing.md,
});

globalStyle(`${content} > * + *`, {
  marginTop: tokens.spacing.lg,
});

export const anchor = style({
  ":hover": {
    textDecoration: "underline",
    textDecorationColor: "currentcolor",
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
