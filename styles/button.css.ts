import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "styles/vars.css";

export const buttonStyles = recipe({
  base: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: vars.spacing.xs,
    paddingTop: vars.spacing.xs,
    paddingRight: vars.spacing.md,
    paddingBottom: vars.spacing.xs,
    paddingLeft: vars.spacing.md,
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.semiBold,
    border: "1px solid",
    borderColor: "transparent",
    borderRadius: vars.radii.lg,
    cursor: "pointer",
  },
  variants: {
    type: {
      highContrast: {
        backgroundColor: vars.color.surfaceInverted,
        color: vars.color.foregroundInverted,
      },
      neutral: {
        backgroundColor: vars.color.surface,
        color: vars.color.foreground,
      },
      outlined: {
        borderColor: vars.color.border,
        backgroundImage: `linear-gradient(to bottom right, ${vars.color.surface}, ${vars.color.page})`,
        ":before": {
          content: "",
          position: "absolute",
          inset: -1,
          borderRadius: "inherit",
          padding: 1,
          backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, .2), ${vars.color.borderFaint}, rgba(255, 255, 255, .1))`,
          mask: "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
      },
      text: {
        backgroundColor: "transparent",
        color: vars.color.foregroundNeutral,
        padding: 0,
        ":hover": {
          color: vars.color.foreground,
        },
      },
    },
  },
  defaultVariants: {
    type: "filled",
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonStyles>;
