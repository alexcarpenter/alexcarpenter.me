import { style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  display: "flex",
  alignItems: "flex-start",
  gap: vars.spacing.sm,
  padding: vars.spacing.md,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.surface,
  color: vars.color.foregroundNeutral,
});

export const icon = style({
  display: "grid",
  marginTop: 3,
});

export const content = style({
  fontSize: vars.fontSize.sm,
});
