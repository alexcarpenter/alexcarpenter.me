import type { LinkProps } from "next/link";
import { default as NextLink } from "next/link";
import clsx from "clsx";
import * as styles from "./Link.css";

export const Link = (props: LinkProps & { children: React.ReactNode }) => {
  const { href, children, ...rest } = props;
  const isInternalLink =
    href &&
    (href.toString().startsWith("/") || href.toString().startsWith("#"));
  return (
    <NextLink href={href}>
      <a
        {...rest}
        className={clsx(
          styles.root,
          isInternalLink ? styles.internal : styles.external
        )}
      >
        {children}
        {isInternalLink ? null : (
          <>
            &nbsp;
            <span aria-hidden={true}>↗</span>
          </>
        )}
      </a>
    </NextLink>
  );
};
