import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  display: "grid",
  gridTemplateColumns: "8rem 1fr",
  columnGap: tokens.spacing.xl,
});

export const meta = style({
  gridColumnStart: 1,
  gridRowStart: 1,
});

export const content = style({
  gridColumnStart: 2,
  gridRowStart: 1,
});
