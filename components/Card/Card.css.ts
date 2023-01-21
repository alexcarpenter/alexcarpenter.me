import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  backgroundImage: `linear-gradient(to bottom right, ${themeVars.color.surface}, ${themeVars.color.surfaceFaint})`,
  border: "1px solid",
  borderColor: themeVars.color.borderFaint,
  borderRadius: tokens.spacing.md,
  padding: tokens.spacing.md,
  height: "100%",
  "::before": {
    content: "",
    position: "absolute",
    inset: -1,
    borderRadius: "inherit",
    padding: 1,
    backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, .1), ${themeVars.color.borderFaint}, rgba(255, 255, 255, .1))`,
    mask: "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
    maskComposite: "exclude",
  },
});
