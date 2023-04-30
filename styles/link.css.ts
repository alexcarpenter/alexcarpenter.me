import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "styles/vars.css";

export const linkStyles = recipe({
  base: {
    position: "relative",
  },
  variants: {
    underlined: {
      true: {
        textDecoration: "underline",
        textDecorationColor: vars.color.underline,
        textDecorationThickness: "1.5",
        textUnderlineOffset: "1.5",
        ":hover": {
          textDecorationColor: "currentColor",
        },
      },
    },
  },
  defaultVariants: {
    underlined: true,
  },
});

export type LinkVariants = RecipeVariants<typeof linkStyles>;
