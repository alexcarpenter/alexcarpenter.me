import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  position: "relative",
  display: "inline-flex",
  paddingTop: vars.spacing.xs,
  paddingRight: vars.spacing.sm,
  paddingBottom: vars.spacing.xs,
  paddingLeft: vars.spacing.sm,
  fontSize: vars.fontSize.sm,
  border: "1px solid",
  borderColor: vars.color.border,
  borderRadius: vars.radii.md,
});

globalStyle(`.dark ${root}`, {
  backgroundImage: `linear-gradient(to bottom right, ${vars.color.surface}, ${vars.color.page})`,
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
