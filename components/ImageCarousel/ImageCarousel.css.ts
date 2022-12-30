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
  position: "relative",
  display: "grid",
  minWidth: "100%",
});

export const pagination = style({
  position: "absolute",
  inset: 0,
  display: "flex",
  justifyContent: "space-between",
  padding: tokens.spacing.md,
  pointerEvents: "none",
});

export const button = style({
  display: "grid",
  placeItems: "center",
  width: tokens.spacing.xxxl,
  height: tokens.spacing.xxxl,
  borderRadius: tokens.radius.full,
  backgroundColor: themeVars.color.surface,
  flexShrink: 0,
  pointerEvents: "auto",
  alignSelf: "center",
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

export const list = style({
  position: "absolute",
  bottom: tokens.spacing.md,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: tokens.spacing.sm,
});

export const dot = style({
  width: tokens.spacing.sm,
  height: tokens.spacing.sm,
  backgroundColor: themeVars.color.surface,
  borderRadius: tokens.radius.full,
  pointerEvents: "auto",
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
