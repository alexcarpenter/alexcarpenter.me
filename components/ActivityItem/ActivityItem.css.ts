import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  position: "relative",
});

export const content = style({
  marginBottom: vars.spacing.md,
});

globalStyle(`${content} > * + *`, {
  marginTop: vars.spacing.lg,
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
    outlineColor: vars.color.outline,
  },
});
