import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";
import { tokens } from "@/styles/tokens.css";

export const root = style({
  color: themeVars.color.foregroundHighlight,
});
