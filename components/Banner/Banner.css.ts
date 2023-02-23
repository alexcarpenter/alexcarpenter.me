import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const mobileColumn = style({
  display: "grid",
  placeItems: "flex-end",
  "@media": {
    "screen and (min-width: 768px)": {
      display: "none",
    },
  },
});

export const desktopColumn = style({
  "@media": {
    "screen and (max-width: 767px)": {
      display: "none",
    },
  },
});

export const toggle = style({
  position: "relative",
  display: "grid",
  placeItems: "center",
  justifySelf: "flex-end",
  width: 48,
  height: 48,
  borderRadius: vars.radii.full,
});

export const toggleHighlight = style({
  position: "absolute",
  inset: 0,
  backgroundColor: vars.color.surface,
  zIndex: -1,
  borderRadius: vars.radii.full,
  transform: "scale(0)",
  transition: "0.2s",
  transitionProperty: "transform",
  selectors: {
    [`${toggle}:hover &`]: {
      transform: "scale(1)",
    },
  },
});

/**
 * Mobile panel
 */

const fadeIn = keyframes({
  "0%": { opacity: "0" },
  "100%": { opacity: "1" },
});

const fadeOut = keyframes({
  "0%": { opacity: "1" },
  "100%": { opacity: "0" },
});

const slideIn = keyframes({
  "0%": {
    transform: "translateX(100%)",
  },
  "100%": {
    transform: "translateX(0%)",
  },
});

const slideOut = keyframes({
  "0%": {
    transform: "translateX(0%)",
  },
  "100%": {
    transform: "translateX(100%)",
  },
});

export const panelOverlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: vars.color.overlay,
  backdropFilter: "blur(8px)",
  selectors: {
    '&[data-state="open"]': {
      animationName: fadeIn,
      animationDuration: "175ms",
    },
    '&[data-state="closed"]': {
      animationName: fadeOut,
      animationDuration: "175ms",
    },
  },
});

export const panelContent = style({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: vars.spacing.xxxxl,
  backgroundColor: vars.color.surface,
  padding: vars.spacing.lg,
  selectors: {
    '&[data-state="open"]': {
      animationName: slideIn,
      animationDuration: "250ms",
    },
    '&[data-state="closed"]': {
      animationName: slideOut,
      animationDuration: "175ms",
    },
  },
});

export const panelClose = style({
  position: "absolute",
  top: vars.spacing.sm,
  right: vars.spacing.sm,
  display: "grid",
  placeItems: "center",
  justifySelf: "flex-end",
  width: 48,
  height: 48,
  borderRadius: vars.radii.full,
});
