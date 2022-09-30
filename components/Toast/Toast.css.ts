import { style, keyframes } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

const slideRight = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: "translateX(100%)" },
});

export const root = style({
  position: "relative",
  marginBlockEnd: tokens.spacing.md,
  marginInlineEnd: tokens.spacing.md,
  maxWidth: 350,
  width: 350,
  padding: tokens.spacing.md,
  backgroundColor: themeVars.color.page,
  border: `1px solid ${themeVars.color.border}`,
  borderRadius: tokens.radius.md,
  selectors: {
    '&[data-swipe="move"]': {
      transform: "translateX(var(--radix-toast-swipe-move-x))",
    },
    '&[data-swipe="cancel"]': {
      transform: "translateX(0)",
      transition: "transform 200ms ease-out",
    },
    '&[data-swipe="end"]': {
      animation: `${slideRight} 100ms ease-out`,
    },
  },
});

export const title = style({
  marginBlockEnd: tokens.spacing.sm,
  fontWeight: 550,
});

export const description = style({
  fontSize: tokens.fontSize.sm,
  color: themeVars.color.foregroundNeutral,
});

export const close = style({
  position: "absolute",
  top: tokens.spacing.sm,
  right: tokens.spacing.sm,
  width: tokens.spacing.xxl,
  height: tokens.spacing.xxl,
  display: "grid",
  placeItems: "center",
  borderRadius: tokens.radius.md,
  cursor: "pointer",
  transitionTimingFunction: "ease-in-out",
  transitionDuration: "200ms",
  transitionProperty: "background-color",
  ":focus": {
    outline: "transparent",
  },
  ":focus-visible": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineOffset: "2px",
    outlineColor: themeVars.color.outline,
  },
});

export const closeHighlight = style({
  position: "absolute",
  inset: 0,
  backgroundColor: themeVars.color.surfaceHover,
  borderRadius: tokens.radius.md,
  opacity: 0,
  transform: "scale(0)",
  transition: "all ease-in-out 200ms",
  selectors: {
    [`${close}:hover &`]: {
      opacity: 1,
      transform: "scale(1)",
    },
    [`${close}:focus-visible &`]: {
      opacity: 1,
      transform: "scale(1)",
    },
  },
});

export const closeIcon = style({
  position: "relative",
  zIndex: 1,
});
