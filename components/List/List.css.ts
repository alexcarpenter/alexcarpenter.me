import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({});

export const item = style({});

globalStyle(`${root} > li + li`, {
  borderTop: `1px solid ${vars.color.border}`,
  marginBlockStart: vars.spacing.xxl,
  paddingBlockStart: vars.spacing.xxl,
});
