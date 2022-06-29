import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  columnGap: tokens.spacing.xl,
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: `${tokens.contentWidth.itemMeta} 1fr`,
    },
  },
});

export const meta = style({
  "@media": {
    "screen and (min-width: 768px)": {
      gridColumnStart: 1,
      gridRowStart: 1,
    },
  },
});

export const content = style({
  "@media": {
    "screen and (min-width: 768px)": {
      gridRowStart: 1,
      gridColumnStart: 2,
    },
  },
});
