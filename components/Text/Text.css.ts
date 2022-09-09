import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";

export const root = style({
  color: themeVars.color.foreground,
  maxWidth: "60ch",
});
