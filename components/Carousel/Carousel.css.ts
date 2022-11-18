import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  position: "relative",
  overflow: "hidden",
  borderRadius: tokens.radius.lg,
});

export const carousel = style({
  display: "flex",
});

export const item = style({
  display: "grid",
  minWidth: "100%",
});

export const pagination = style({
  position: "absolute",
  top: "50%",
  left: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: tokens.spacing.md,
  paddingRight: tokens.spacing.md,
});

export const button = style({
  display: "grid",
  placeItems: "center",
  width: tokens.spacing.xxxl,
  height: tokens.spacing.xxxl,
  borderRadius: tokens.radius.full,
  backgroundColor: themeVars.color.surface,
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

export const next = style({
  marginLeft: "auto",
});
