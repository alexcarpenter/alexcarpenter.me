import * as React from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib/utils';

interface ViewCounterProps {
  slug: string;
}

export default function ViewCounter({ slug }: ViewCounterProps) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  React.useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

    registerView();
  }, [slug]);

  return <span>{views ? views : '–'} views</span>;
}
