import { style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  position: "relative",
  overflow: "hidden",
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
  padding: vars.spacing.md,
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
  ":focus-visible": {
    outline: "transparent",
  },
});

export const prev = style({
  left: 0,
  paddingLeft: vars.spacing.md,
});

export const next = style({
  right: 0,
  paddingRight: vars.spacing.md,
});

export const disc = style({
  width: vars.spacing.xl,
  height: vars.spacing.xl,
  background: vars.color.surface,
  display: "grid",
  placeItems: "center",
  borderRadius: vars.radii.full,
  selectors: {
    [`${button}:focus &`]: {
      outline: "transparent",
    },
    [`${button}:focus-visible &`]: {
      outlineWidth: "2px",
      outlineStyle: "solid",
      outlineOffset: "2px",
      outlineColor: vars.color.outline,
    },
  },
});

export const list = style({
  position: "absolute",
  bottom: vars.spacing.md,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: vars.spacing.sm,
});

export const dot = style({
  width: vars.spacing.xs,
  height: vars.spacing.xs,
  backgroundColor: vars.color.surface,
  borderRadius: vars.radii.full,
  pointerEvents: "auto",
});
