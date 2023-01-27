import { style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  display: "grid",
});

export const rounded = style({
  borderRadius: vars.radius.lg,
  overflow: "hidden",
});

export const bordered = style({
  border: `1px solid ${vars.color.border}`,
});
