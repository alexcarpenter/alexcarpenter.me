import { style } from "@vanilla-extract/css";

export const root = style({
  display: "inline-grid",
});

export const placeholder = style({
  gridArea: "1/1",
  opacity: 0,
  pointerEvents: "none",
});

export const scrambled = style({
  gridArea: "1/1",
});
