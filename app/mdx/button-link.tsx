import { cx, cva, type VariantProps } from "@/app/utils";

const buttonLink = cva(
  [
    "inline-flex",
    "items-center",
    "gap-1.5",
    "border",
    "border-black/10",
    "px-2",
    "py-1",
    "text-sm",
    "font-semibold",
    "uppercase",
    "text-white",
    "!no-underline",
  ],
  {
    variants: {
      variant: {
        primary: "bg-blue-700",
        secondary: "bg-green-700",
        highlight: "bg-highlight",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
type ButtonLinkVariantProps = VariantProps<typeof buttonLink>;
type ButtonLinkProps = ButtonLinkVariantProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

function ButtonLink(props: ButtonLinkProps) {
  const { variant, children, ...restProps } = props;
  return (
    <a
      {...restProps}
      className={cx(buttonLink({ variant }))}
      style={{
        boxShadow: "2px 2px #bbb",
      }}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 39.24 32.26"
        height=".65em"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="m29.1 18.43-6.19.44H0v-5.48h23.91l6.26.44L15.84 0h7.63l15.77 15.84v.58L23.47 32.26h-7.63Z" />
      </svg>
    </a>
  );
}

export { ButtonLink };
