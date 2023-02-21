import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  position: "relative",
});

globalStyle(`${root} > * + *`, {
  marginTop: "1em",
});

globalStyle(`${root} a`, {
  textDecoration: "underline",
  textDecorationColor: vars.color.border,
  textDecorationThickness: 1.5,
  textUnderlineOffset: 1.5,
});

globalStyle(`${root} a:hover`, {
  textDecorationColor: "currentColor",
});

globalStyle(`${root} ul`, {
  paddingLeft: "1em",
});

globalStyle(`${root} ul li`, {
  listStyleType: "disc",
});

globalStyle(`${root} ul li li`, {
  listStyleType: "circle",
});

globalStyle(`${root} ul li + li`, {
  marginTop: vars.spacing.xxs,
});

globalStyle(`${root} ul ul`, {
  marginTop: vars.spacing.xxs,
});

globalStyle(`${root} blockquote`, {
  borderLeft: "4px solid",
  borderColor: vars.color.border,
  paddingLeft: vars.spacing.md,
});
