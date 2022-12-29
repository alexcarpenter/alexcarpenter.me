import type { LinkProps as NextLinkProps } from "next/link";
import { default as NextLink } from "next/link";
import { cn } from "lib/utils";
import * as styles from "./Link.css";

export type LinkProps = NextLinkProps & {
  children: React.ReactNode;
  variant?: "highlight" | "neutral";
};

export const Link = (props: LinkProps) => {
  const { children, variant = "neutral", ...rest } = props;
  return (
    <>
      <NextLink className={cn(styles.variants[variant])} {...rest}>
        {children}
      </NextLink>
    </>
  );
};
