import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { vars } from "styles/vars.css";

export const root = style({
  position: "fixed",
  top: vars.spacing.sm,
  left: vars.spacing.sm,
  padding: vars.spacing.sm,
  transform: `translateY(${calc.subtract("-100%", vars.spacing.sm)})`,
  ":focus": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineOffset: "2px",
    outlineColor: vars.color.outline,
    transform: "none",
  },
});
