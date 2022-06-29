import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  display: "inline-grid",
  borderRadius: tokens.radius.full,
  overflow: "hidden",
});

export const xl = style({
  width: tokens.sizing.xl,
  height: tokens.sizing.xl,
});

export const xxxl = style({
  width: tokens.sizing.xxxl,
  height: tokens.sizing.xxxl,
});
