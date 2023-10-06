import { Slot, type SlotProps } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";

const columnVariants = tv(
  {
    base: "gap-x-8 [&>li]:break-inside-avoid-column",
    variants: {
      count: {
        one: "columns-1",
        two: "columns-2",
        three: "columns-3",
      },
    },
    defaultVariants: {
      count: "two",
    },
  },
  {
    responsiveVariants: ["sm", "md"],
  }
);

type ColumnVariants = VariantProps<typeof columnVariants>;

export function Columns(props: SlotProps & ColumnVariants) {
  const { count, ...restProps } = props;
  return <Slot className={columnVariants({ count: count })} {...restProps} />;
}
