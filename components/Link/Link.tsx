import type { LinkProps as NextLinkProps } from "next/link";
import { default as NextLink } from "next/link";
import { cn } from "lib/utils";
import * as styles from "./Link.css";

export type LinkProps = NextLinkProps & {
  children: React.ReactNode;
  variant?: "highlight" | "neutral";
};

export const Link = (props: LinkProps) => {
  const { href, children, variant = "neutral", ...rest } = props;
  return (
    <>
      <NextLink href={href}>
        <a {...rest} className={cn(styles.variants[variant])}>
          {children}
        </a>
      </NextLink>
    </>
  );
};
