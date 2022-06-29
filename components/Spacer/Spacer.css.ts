import { tokens } from "@/styles/tokens.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const root = style({
  display: "block",
  height: 1,
  width: 1,
});

const sizes = {
  xs: tokens.sizing.xs,
  sm: tokens.sizing.sm,
  md: tokens.sizing.md,
  lg: tokens.sizing.lg,
  xl: tokens.sizing.xl,
  xxl: tokens.sizing.xxl,
  xxxl: tokens.sizing.xxxl,
} as const;

export const heightVariants = styleVariants(sizes, (size) => [
  root,
  { height: size, minHeight: size },
]);

export const widthVariants = styleVariants(sizes, (size) => [
  root,
  { width: size, minWidth: size },
]);
