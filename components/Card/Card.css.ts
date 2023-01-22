import { style } from "@vanilla-extract/css";
import { vars } from "styles/vars.css";

export const root = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  backgroundImage: `linear-gradient(to bottom right, ${vars.color.surface}, ${vars.color.page})`,
  border: "1px solid",
  borderColor: vars.color.borderFaint,
  borderRadius: vars.spacing.md,
  padding: vars.spacing.md,
  height: "100%",
  "::before": {
    content: "",
    position: "absolute",
    inset: -1,
    borderRadius: "inherit",
    padding: 1,
    backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, .1), ${vars.color.borderFaint}, rgba(255, 255, 255, .1))`,
    mask: "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
    maskComposite: "exclude",
    pointerEvents: "none",
  },
});
