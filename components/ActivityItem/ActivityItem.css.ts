import { style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";
import { focusVisible } from "styles/utils.css";

export const root = style({
  position: "relative",
});

export const anchor = style([
  focusVisible,
  {
    marginTop: vars.spacing.lg,
    display: "inline-flex",
  },
]);
