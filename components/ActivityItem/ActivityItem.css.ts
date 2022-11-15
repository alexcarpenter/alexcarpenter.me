import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  position: "relative",
});

export const content = style({
  marginBottom: tokens.spacing.md,
});

globalStyle(`${content} > * + *`, {
  marginTop: tokens.spacing.lg,
});
