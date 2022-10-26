import type { LinkProps as NextLinkProps } from "next/link";
import { default as NextLink } from "next/link";
import clsx from "clsx";
import * as styles from "./Link.css";

export type LinkProps = NextLinkProps & {
  children: React.ReactNode;
  underline?: boolean;
};

export const Link = (props: LinkProps) => {
  const { href, children, underline, ...rest } = props;
  const isInternalLink =
    href &&
    (href.toString().startsWith("/") || href.toString().startsWith("#"));
  return (
    <>
      <NextLink
        {...rest}
        href={href}
        className={clsx(styles.root, underline && styles.underline)}
      >
        {children}
      </NextLink>
      {isInternalLink ? null : (
        <>
          &nbsp;
          <span aria-hidden={true}>↗</span>
        </>
      )}
    </>
  );
};
