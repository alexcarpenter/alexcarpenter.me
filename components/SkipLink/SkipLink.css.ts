import { style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  position: "fixed",
  top: vars.spacing.sm,
  left: vars.spacing.sm,
  fontSize: vars.fontSize.sm,
  paddingTop: vars.spacing.sm,
  paddingBottom: vars.spacing.sm,
  paddingRight: vars.spacing.md,
  paddingLeft: vars.spacing.md,
  transform: "translateY(-100%)",
  zIndex: 100,
  ":focus-visible": {
    transform: "none",
  },
});
