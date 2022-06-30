import { style } from "@vanilla-extract/css";
import { tokens } from "@/styles/tokens.css";

export const root = style({
  display: "grid",
  gap: tokens.sizing.xl,
});
