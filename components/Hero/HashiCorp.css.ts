import { style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  position: "relative",
  display: "grid",
  placeItems: "center",
  padding: vars.spacing.xxxxl,
});

export const logo = style({
  position: "relative",
  display: "grid",
  placeItems: "center",
  borderRadius: vars.radius.lg,
  backgroundImage: `linear-gradient(to bottom right, ${vars.color.surface}, ${vars.color.page})`,
  width: 128,
  height: 128,
  "::before": {
    content: "",
    position: "absolute",
    inset: -1,
    borderRadius: "inherit",
    padding: 1,
    backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, .1), rgba(255, 255, 255, .75), rgba(255, 255, 255, .1))`,
    mask: "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
    maskComposite: "exclude",
    pointerEvents: "none",
  },
});

export const paths = style({
  position: "absolute",
  display: "grid",
  placeItems: "center",
  inset: 0,
  pointerEvents: "none",
});
