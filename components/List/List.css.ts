import { globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({});

export const item = style({});

globalStyle(`${root} li + li`, {
  borderTop: "1px solid",
  borderColor: themeVars.color.border,
  marginBlockStart: tokens.spacing.xl,
  paddingBlockStart: tokens.spacing.xl,
});
