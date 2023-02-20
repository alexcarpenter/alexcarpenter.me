import { style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const container = style({
  display: "grid",
  gridTemplateColumns: `repeat(4, 1fr)`,
  columnGap: vars.spacing.xxxl,
});
