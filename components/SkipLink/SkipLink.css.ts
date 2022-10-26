import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  position: "fixed",
  top: tokens.spacing.sm,
  left: tokens.spacing.sm,
  padding: tokens.spacing.sm,
  transform: `translateY(${calc.subtract("-100%", tokens.spacing.sm)})`,
  ":focus": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineOffset: "2px",
    outlineColor: themeVars.color.outline,
    transform: "none",
  },
});
