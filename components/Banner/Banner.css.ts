import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const banner = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: tokens.contentWidth.text,
  marginInline: "auto",
  marginBlockEnd: tokens.spacing.xxl,
  textAlign: "center",
  "@media": {
    "screen and (min-width: 768px)": {
      "::before": {
        content: "",
        width: tokens.spacing.xxxl,
      },
    },
  },
});

export const avatar = style({
  position: "relative",
  display: "inline-flex",
  borderRadius: tokens.radius.lg,
  overflow: "hidden",
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

export const logo = style({
  position: "absolute",
  inset: 0,
  display: "grid",
  placeItems: "center",
  backgroundColor: "rgba(0, 0, 0, .5)",
  opacity: 0,
  transitionTimingFunction: "ease-in-out",
  transitionDuration: "200ms",
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

export const toggle = style({
  position: "relative",
  width: tokens.spacing.xxxl,
  height: tokens.spacing.xxxl,
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

export const toggleHighlight = style({
  position: "absolute",
  inset: 0,
  backgroundColor: themeVars.color.surfaceHover,
  borderRadius: tokens.radius.md,
  zIndex: "-1",
  opacity: 0,
  transform: "scale(0)",
  transition: "all ease-in-out 200ms",
  selectors: {
    [`${toggle}:hover &`]: {
      opacity: 1,
      transform: "scale(1)",
    },
    [`${toggle}:focus-visible &`]: {
      opacity: 1,
      transform: "scale(1)",
    },
  },
});
