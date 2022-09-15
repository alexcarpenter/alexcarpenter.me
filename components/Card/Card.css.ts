import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: themeVars.color.surface,
  border: "1px solid",
  borderColor: themeVars.color.border,
  borderRadius: tokens.spacing.md,
  padding: tokens.spacing.md,
  height: "100%",
});
