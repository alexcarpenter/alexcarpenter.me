import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  maxWidth: vars.contentWidth.prose,
  fontWeight: 575,
});

export const tracking = styleVariants({
  h1: {
    letterSpacing: "-0.02em",
  },
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {},
});
