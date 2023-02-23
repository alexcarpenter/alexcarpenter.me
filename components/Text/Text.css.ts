import { style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  maxWidth: vars.contentWidth.prose,
});

export const gradient = style({
  backgroundImage: `linear-gradient(to bottom right, ${vars.color.foreground}, ${vars.color.foregroundNeutral})`,
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
});
