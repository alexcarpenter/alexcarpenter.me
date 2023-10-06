import { tv, type VariantProps } from "tailwind-variants";

const descriptionListVariants = tv(
  {
    base: "grid",
    variants: {
      titleWidth: {
        "max-content": "grid-cols-[max-content_1fr]",
        "1/2": "grid-cols-[50%_1fr]",
        "1/3": "grid-cols-[33.33%_1fr]",
        "1/4": "grid-cols-[25%_1fr]",
      },
    },
    defaultVariants: {
      titleWidth: "max-content",
    },
  },
  {
    responsiveVariants: ["sm", "md"],
  }
);
type DescriptionListVariants = VariantProps<typeof descriptionListVariants>;

function DescriptionList(
  props: { children: React.ReactNode } & DescriptionListVariants
) {
  return (
    <dl
      className={descriptionListVariants({
        titleWidth: props.titleWidth,
      })}
    >
      {props.children}
    </dl>
  );
}

export { DescriptionList };
