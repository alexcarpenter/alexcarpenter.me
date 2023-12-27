import { Slot } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "@/app/utils";

const badgeVariants = tv({
  base: "rounded-sm bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800",
  variants: {
    text: {
      primary: "text-primary",
      secondary: "text-secondary",
    },
    border: {
      true: "border",
      false: "",
    },
  },
  defaultVariants: {
    text: "secondary",
    border: false,
  },
});

type BadgeVariants = VariantProps<typeof badgeVariants>;
type BadgeProps = BadgeVariants & {
  asChild?: boolean;
  children?: React.ReactNode;
};

export const Badge = ({ asChild, text, border, ...props }: BadgeProps) => {
  const Comp = asChild ? Slot : "span";
  return <Comp className={badgeVariants({ text, border })} {...props} />;
};
