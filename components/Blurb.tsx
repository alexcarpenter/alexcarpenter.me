import * as React from 'react';
import { formatDate } from '@/lib/utils';

interface BlurbProps {
  date: string;
  children: string | React.ReactNode;
}

export default function Blurb({ date, children }: BlurbProps) {
  return (
    <article className="relative bg-white dark:bg-gray-800 w-full p-4 rounded-md border borderColor">
      <span className="block w-4 h-4 bg-white dark:bg-gray-800 absolute top-0 left-4 rotate-45 -translate-y-1/2 border borderColor border-r-0 border-b-0" />
      <p className="prose">{children}</p>
      <p className="mt-4 text-sm textSecondary">
        &mdash; {formatDate(date, 'full')}
      </p>
    </article>
  );
}
