import { style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  position: "relative",
  overflow: "hidden",
  borderRadius: vars.radius.lg,
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
  width: vars.spacing.xxxl,
  height: vars.spacing.xxxl,
  background: vars.color.surface,
  display: "grid",
  placeItems: "center",
  borderRadius: vars.radius.full,
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
  width: vars.spacing.sm,
  height: vars.spacing.sm,
  backgroundColor: vars.color.surface,
  borderRadius: vars.radius.full,
  pointerEvents: "auto",
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
