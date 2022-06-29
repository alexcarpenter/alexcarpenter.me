import { recipe } from "@vanilla-extract/recipes";
import { tokens } from "@/styles/tokens.css";

export const root = recipe({
  base: {
    display: "block",
  },
  variants: {
    axis: {
      x: {
        width: 1,
      },
      y: {
        height: 1,
      },
    },
    size: {
      xs: {
        height: tokens.spacing.xs,
      },
      sm: {
        height: tokens.spacing.sm,
      },
      md: {
        height: tokens.spacing.md,
      },
      lg: {
        height: tokens.spacing.lg,
      },
      xl: {
        height: tokens.spacing.xl,
      },
      xxl: {
        height: tokens.spacing.xxl,
      },
      xxxl: {
        height: tokens.spacing.xxxl,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        axis: "y",
        size: "xs",
      },
      style: {
        height: tokens.spacing.xs,
      },
    },
    {
      variants: {
        axis: "y",
        size: "sm",
      },
      style: {
        height: tokens.spacing.sm,
      },
    },
    {
      variants: {
        axis: "y",
        size: "md",
      },
      style: {
        height: tokens.spacing.md,
      },
    },
    {
      variants: {
        axis: "y",
        size: "lg",
      },
      style: {
        height: tokens.spacing.lg,
      },
    },
    {
      variants: {
        axis: "y",
        size: "xl",
      },
      style: {
        height: tokens.spacing.xl,
      },
    },
    {
      variants: {
        axis: "y",
        size: "xxl",
      },
      style: {
        height: tokens.spacing.xxl,
      },
    },
    {
      variants: {
        axis: "y",
        size: "xxxl",
      },
      style: {
        height: tokens.spacing.xxxl,
      },
    },
    {
      variants: {
        axis: "x",
        size: "xs",
      },
      style: {
        width: tokens.spacing.xs,
      },
    },
    {
      variants: {
        axis: "x",
        size: "sm",
      },
      style: {
        width: tokens.spacing.sm,
      },
    },
    {
      variants: {
        axis: "x",
        size: "md",
      },
      style: {
        width: tokens.spacing.md,
      },
    },
    {
      variants: {
        axis: "x",
        size: "lg",
      },
      style: {
        width: tokens.spacing.lg,
      },
    },
    {
      variants: {
        axis: "x",
        size: "xl",
      },
      style: {
        width: tokens.spacing.xl,
      },
    },
    {
      variants: {
        axis: "x",
        size: "xxl",
      },
      style: {
        width: tokens.spacing.xxl,
      },
    },
    {
      variants: {
        axis: "x",
        size: "xxxl",
      },
      style: {
        width: tokens.spacing.xxxl,
      },
    },
  ],
});
