import { red } from "@radix-ui/colors";
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
  position: "absolute",
  top: 0,
  height: "100%",
  display: "grid",
  placeItems: "center",
  flexShrink: 0,
  pointerEvents: "auto",
});

export const prev = style({
  left: 0,
  paddingLeft: tokens.spacing.md,
});

export const next = style({
  right: 0,
  paddingRight: tokens.spacing.md,
});

export const disc = style({
  width: tokens.spacing.xxxl,
  height: tokens.spacing.xxxl,
  background: themeVars.color.surface,
  display: "grid",
  placeItems: "center",
  borderRadius: tokens.radius.full,
  selectors: {
    [`${button}:focus &`]: {
      outline: "transparent",
    },
    [`${button}:focus-visible &`]: {
      outlineWidth: "2px",
      outlineStyle: "solid",
      outlineOffset: "2px",
      outlineColor: themeVars.color.outline,
    },
  },
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
