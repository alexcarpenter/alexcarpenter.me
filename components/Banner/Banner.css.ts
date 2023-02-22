import { style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const toggle = style({
  position: "relative",
  display: "grid",
  placeItems: "center",
  width: 48,
  height: 48,
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
