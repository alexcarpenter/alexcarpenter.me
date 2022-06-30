import { tokens } from "@/styles/tokens.css";
import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: tokens.sizing.xxl,
});

export const lockup = style({
  display: "flex",
  alignItems: "center",
  gap: tokens.sizing.lg,
});

export const avatar = style({
  position: "relative",
  display: "grid",
  width: "4rem",
  height: "4rem",
  borderRadius: tokens.radius.full,
  overflow: "hidden",
});

export const logo = style({
  position: "absolute",
  inset: 0,
  display: "grid",
  placeItems: "center",
  backgroundColor: "rgba(0, 0, 0, .5)",
  opacity: 0,
  transition: tokens.transition.easing,
  transitionDuration: tokens.transition.duration,
  transitionProperty: "opacity",
  selectors: {
    [`${avatar}:hover &`]: {
      opacity: 1,
    },
    [`${avatar}:focus &`]: {
      opacity: 1,
    },
  },
});

export const heading = style({
  fontSize: "1.25rem",
  color: themeVars.color.foregroundHighlight,
});

export const toggle = style({
  display: "grid",
  placeItems: "center",
  width: "2rem",
  height: "2rem",
  backgroundColor: "transparent",
  cursor: "pointer",
  borderRadius: tokens.radius.sm,
  transition: tokens.transition.easing,
  transitionDuration: tokens.transition.duration,
  transitionProperty: "background-color",
  ":hover": {
    backgroundColor: themeVars.color.surfaceHover,
  },
  ":focus": {
    backgroundColor: themeVars.color.surfaceHover,
  },
});
