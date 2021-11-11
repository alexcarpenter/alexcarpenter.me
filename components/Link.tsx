import * as React from 'react';
import NextLink from 'next/link';
import { isInternalUrl } from '@/lib/utils';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function Link({ href, className, children }: LinkProps) {
  if (isInternalUrl(href)) {
    return (
      <NextLink href={href}>
        <a className={className}>{children}</a>
      </NextLink>
    );
  }
  return (
    <a
      className={className}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
