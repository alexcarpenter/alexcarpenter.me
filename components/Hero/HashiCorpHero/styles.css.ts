import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  position: "relative",
  height: 200,
  display: "grid",
  placeItems: "center",
  overflow: "hidden",
  borderRadius: tokens.radius.lg,
  border: `1px solid ${themeVars.color.border}`,
  backgroundColor: "hsl(0, 0%, 8.5%)",
  "@media": {
    "screen and (min-width: 576px)": {
      height: 300,
    },
  },
});

export const logo = style({
  position: "relative",
  gridArea: "1/1",
  width: 50,
  marginInline: tokens.spacing.xxxxl,
  "@media": {
    "screen and (min-width: 576px)": {
      justifySelf: "flex-start",
      width: 80,
    },
  },
});

export const pattern = style({
  gridArea: "1/1",
  overflow: "hidden",
});

export const patternSvg = style({
  position: "absolute",
  top: -125,
  right: -100,
  "@media": {
    "screen and (min-width: 576px)": {
      right: -75,
    },
    "screen and (min-width: 768px)": {
      right: 0,
    },
  },
});
