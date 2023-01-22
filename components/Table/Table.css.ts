import { style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  borderCollapse: "separate",
  borderSpacing: 0,
  width: "100%",
});

export const heading = style({
  padding: vars.spacing.sm,
  fontSize: vars.fontSize.sm,
  color: vars.color.foregroundNeutral,
  textTransform: "uppercase",
});

export const cell = style({
  padding: vars.spacing.sm,
  borderTop: "1px solid",
  borderColor: vars.color.border,
});
