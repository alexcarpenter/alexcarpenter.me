import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const banner = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: tokens.contentWidth.container,
  marginInline: "auto",
  marginBlockEnd: tokens.spacing.lg,
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
  width: tokens.spacing.xxxl,
  height: tokens.spacing.xxxl,
  display: "grid",
  placeItems: "center",
  borderRadius: tokens.radius.md,
  cursor: "pointer",
  transitionTimingFunction: "ease-in-out",
  transitionDuration: "200ms",
  transitionProperty: "background-color",
  ":hover": {
    backgroundColor: themeVars.color.surfaceHover,
  },
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
