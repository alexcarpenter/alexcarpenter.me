import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  borderCollapse: "separate",
  borderSpacing: 0,
  width: "100%",
});

export const heading = style({
  padding: tokens.spacing.sm,
  fontSize: tokens.fontSize.sm,
  color: themeVars.color.foregroundNeutral,
  textTransform: "uppercase",
});

export const cell = style({
  padding: tokens.spacing.sm,
  borderTop: "1px solid",
  borderColor: themeVars.color.border,
});
