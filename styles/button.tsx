import { cva, type VariantProps } from "@/lib/classnames";

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export const buttonVariants = cva(
  "inline-flex font-medium text-sm rounded-md text-[#171717]",
  {
    variants: {
      intent: {
        action: "bg-surface-action",
      },
      size: {
        small: "px-2.5 py-1.5",
        medium: "px-4 py-2.5",
      },
    },
    defaultVariants: {
      intent: "action",
      size: "medium",
    },
  }
);
