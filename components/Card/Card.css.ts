import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  height: "100%",
  border: "1px solid",
  borderColor: themeVars.color.border,
  borderRadius: tokens.radius.md,
  backgroundColor: themeVars.color.surface,
  padding: tokens.spacing.md,
});
