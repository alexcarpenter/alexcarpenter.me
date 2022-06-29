import { tokens } from "@/styles/tokens.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  display: "inline-grid",
  borderRadius: tokens.radius.full,
  overflow: "hidden",
});

const sizes = {
  xl: tokens.sizing.xl,
  xxxl: tokens.sizing.xxxl,
} as const;

export const sizeVariants = styleVariants(sizes, (size) => [
  root,
  { width: size, height: size },
]);
