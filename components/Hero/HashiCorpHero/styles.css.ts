import { style, keyframes } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const root = style({
  position: "relative",
  display: "grid",
  placeItems: "center",
  padding: 1,
  borderRadius: tokens.radius.lg,
  backgroundColor: themeVars.color.border,
  overflow: "hidden",
});

export const glow = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "grid",
  placeItems: "center",
  opacity: 0,
  transition: "opacity ease-in 0.5s",
  "::before": {
    content: "",
    position: "absolute",
    minHeight: "200vw",
    minWidth: "200vw",
    animationName: rotate,
    animationDuration: "5s",
    animationIterationCount: "infinite",
    backgroundImage:
      "conic-gradient(transparent 135deg, rgba(255, 255, 255, .25) 180deg, transparent 225deg)",
  },
  selectors: {
    [`${root}[data-state="loaded"] &`]: {
      opacity: 1,
    },
  },
});

export const inner = style({
  position: "relative",
  display: "grid",
  borderRadius: tokens.radius.lg,
  backgroundColor: themeVars.color.page,
  overflow: "hidden",
});
