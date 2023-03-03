import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: vars.spacing.xxs,
  border: "1px solid",
  borderColor: vars.color.border,
  width: "max-content",
  height: "2.125rem",
  paddingLeft: vars.spacing.xxs,
  paddingRight: vars.spacing.xxs,
  borderRadius: vars.radii.full,
});

globalStyle(`.dark ${root}::before`, {
  content: "",
  position: "absolute",
  inset: -1,
  borderRadius: "inherit",
  padding: 1,
  backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, .2), ${vars.color.borderFaint}, rgba(255, 255, 255, .1))`,
  mask: "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
  maskComposite: "exclude",
  pointerEvents: "none",
});

export const toggle = style({
  position: "relative",
  display: "grid",
  placeItems: "center",
  width: "2rem",
  height: "1.5rem",
  background: "transparent",
  borderRadius: "1.5rem",
  transition: "0.2s",
  transitionProperty: "color",
  ":hover": {
    color: vars.color.foreground,
  },
});

export const toggleVariant = styleVariants({
  initial: [toggle, { color: vars.color.foregroundNeutral }],
  active: [toggle, { color: vars.color.foreground }],
});

export const shadow = style({
  position: "absolute",
  inset: 0,
  width: "2rem",
  height: "1.5rem",
  background: vars.color.borderFaint,
  borderRadius: "1.5rem",
  zIndex: -1,
});
