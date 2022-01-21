import type { GetStaticProps, NextPage } from 'next';
import type { Screencast } from '@/data/screencasts';
import useSWR from 'swr';
import { fetcher } from '@/lib/utils';
import screencasts from '@/data/screencasts';
import Card from '@/components/Card';
import Page from '@/components/Page';

interface ScreencastsProps {
  screencasts: Array<Screencast>;
}

const Screencasts: NextPage<ScreencastsProps> = ({ screencasts }) => {
  const { data } = useSWR('/api/youtube', fetcher);
  const subscriberCount = data?.subscriberCount;
  const viewCount = data?.viewCount;
  return (
    <Page title="Screencasts" description="">
      <ul className="mt-8 grid sm:grid-cols-2 gap-4 md:gap-8">
        <li className="flex flex-col">
          <Card variant="gray">
            <Card.Eyebrow>Total subscribers</Card.Eyebrow>
            <p className="pt-2 mt-auto text-4xl">
              {subscriberCount ? subscriberCount : '-'}
            </p>
          </Card>
        </li>
        <li className="flex flex-col">
          <Card variant="gray">
            <Card.Eyebrow>Total views</Card.Eyebrow>
            <p className="pt-2 mt-auto text-4xl">
              {viewCount
                ? new Intl.NumberFormat('en', { notation: 'compact' }).format(
                    viewCount,
                  )
                : '-'}
            </p>
          </Card>
        </li>
      </ul>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      screencasts,
    },
  };
};

export default Screencasts;
