import { useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib/utils';

export default function ViewCounter({ slug }: { slug: string }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

    registerView();
  }, [slug]);

  return <span>{views ? views : '–'} views</span>;
}
