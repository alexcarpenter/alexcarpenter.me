import { tv, type VariantProps } from "tailwind-variants";

const spacerVariants = tv(
  {
    base: "block",
    variants: {
      height: {
        px: "h-px",
        sm: "h-2",
        md: "h-4",
        lg: "h-6",
        xl: "h-8",
      },
    },
    defaultVariants: {
      height: "px",
    },
  },
  {
    responsiveVariants: ["sm", "md"],
  }
);

type SpacerVariants = VariantProps<typeof spacerVariants>;

export function Spacer(props: SpacerVariants) {
  const { height } = props;
  return <span className={spacerVariants({ height })} aria-hidden />;
}
