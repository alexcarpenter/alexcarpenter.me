import { cva, type VariantProps } from "@/lib/classnames";

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export const buttonVariants = cva(
  "inline-flex items-center gap-2 font-variable-semibold text-sm rounded-md",
  {
    variants: {
      intent: {
        action: "bg-surface-action text-foreground-action",
      },
      size: {
        small: "px-3 py-1.5",
        medium: "px-4 py-2.5",
      },
    },
    defaultVariants: {
      intent: "action",
      size: "medium",
    },
  }
);
