import { style, styleVariants } from "@vanilla-extract/css";
import { mapResponsiveValue, sprinkles } from "styles/sprinkles.css";
import { vars } from "styles/vars.css";

const columns = {
  "1/1": [1, 1],
  "1/2": [1, 2],
  "1/3": [1, 3],
  "1/4": [1, 4],
  "2/2": [2, 2],
  "2/3": [2, 3],
  "2/4": [2, 4],
  "3/3": [3, 3],
  "3/4": [3, 4],
  "4/4": [4, 4],
} as const;

// Container
export const container = style({
  display: "grid",
  gridTemplateColumns: `repeat(4, 1fr)`,
  columnGap: vars.spacing.xxl,
});

// Column
export const column = styleVariants(columns, ([start, end]) => {
  return {
    gridColumnStart: start,
    gridColumnEnd: end + 1,
  };
});
