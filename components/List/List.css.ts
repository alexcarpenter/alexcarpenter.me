import { style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const list = style({
  position: "relative",
});

export const item = style({
  paddingTop: vars.spacing.lg,
  paddingBottom: vars.spacing.lg,
  borderTop: "1px solid",
  borderColor: vars.color.border,
});
