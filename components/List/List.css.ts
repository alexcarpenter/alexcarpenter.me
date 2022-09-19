import { globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({});

export const item = style({});

globalStyle(`${root} > li + li`, {
  borderTop: `1px solid ${themeVars.color.border}`,
  marginBlockStart: tokens.spacing.xxl,
  paddingBlockStart: tokens.spacing.xxl,
});
