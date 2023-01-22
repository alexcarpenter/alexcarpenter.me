import { style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const viewport = style({
  position: "fixed",
  right: vars.spacing.md,
  bottom: vars.spacing.md,
  display: "grid",
});

export const root = style({
  position: "relative",
  marginBlockStart: vars.spacing.sm,
  maxWidth: 350,
  width: 350,
  padding: vars.spacing.md,
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
});

export const title = style({
  marginBlockEnd: vars.spacing.sm,
  fontWeight: 550,
});

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.foregroundNeutral,
});

export const close = style({
  position: "absolute",
  top: vars.spacing.sm,
  right: vars.spacing.sm,
  width: vars.spacing.xxl,
  height: vars.spacing.xxl,
  display: "grid",
  placeItems: "center",
  borderRadius: vars.radius.md,
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
    outlineColor: vars.color.outline,
  },
});

export const closeHighlight = style({
  position: "absolute",
  inset: 0,
  backgroundColor: vars.color.surfaceHover,
  borderRadius: vars.radius.md,
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
