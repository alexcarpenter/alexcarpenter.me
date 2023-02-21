import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: vars.spacing.xxs,
  border: "1px solid",
  borderColor: vars.color.border,
  width: "max-content",
  paddingTop: vars.spacing.xxs,
  paddingBottom: vars.spacing.xxs,
  paddingLeft: vars.spacing.xxs,
  paddingRight: vars.spacing.xxs,
  borderRadius: vars.radii.full,
});

export const toggle = style({
  position: "relative",
  display: "grid",
  placeItems: "center",
  width: 32,
  height: 24,
  background: "transparent",
  borderRadius: 24,
});

export const toggleVariant = styleVariants({
  initial: [toggle, { color: vars.color.foregroundNeutral }],
  active: [toggle, { color: vars.color.foreground }],
});

export const shadow = style({
  position: "absolute",
  inset: 0,
  width: 32,
  height: 24,
  background: vars.color.borderFaint,
  borderRadius: 24,
  zIndex: -1,
});
