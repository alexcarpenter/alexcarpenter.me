import type { GetStaticProps, NextPage } from 'next';
import type { Video } from '@/data/videos';
import useSWR from 'swr';
import { fetcher } from '@/lib/utils';
import videos from '@/data/videos';
import Card from '@/components/Card';
import Entry from '@/components/Entry';
import Page from '@/components/Page';
import List from '@/components/List';
import Section from '@/components/Section';

interface VideoProps {
  videos: Array<Video>;
}

const Videos: NextPage<VideoProps> = ({ videos }) => {
  const { data } = useSWR('/api/youtube', fetcher);
  const subscriberCount = data?.subscriberCount;
  const viewCount = data?.viewCount;
  const orderedVideos = videos
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .reduce((sections, currentValue) => {
      const year = new Date(currentValue.date).getFullYear().toString();
      if (sections[year] != undefined) {
        sections[year].push(currentValue);
      } else {
        sections[year] = [currentValue];
      }

      return sections;
    }, {});
  return (
    <Page
      title="Videos"
      description="Short front-end development tutorials for developers of all skill levels."
    >
      <Section>
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
        <div className="mt-8 text-center">
          <a
            href="https://www.youtube.com/channel/UC2jJoQlzvLPvnYfowAEVaOg?sub_confirmation=1"
            className="inline-flex items-center gap-2 underline hover:no-underline"
          >
            Subscribe on YouTube
          </a>
        </div>
      </Section>
      {Object.keys(orderedVideos)
        .sort()
        .reverse()
        .map((year) => {
          return (
            <Section key={year} heading={year} headingGap="lg">
              <List>
                {orderedVideos[year].map((video, index) => {
                  const { date, title, description, id } = video;
                  return (
                    <List.Item key={index}>
                      <Entry
                        date={date}
                        title={title}
                        description={description}
                        link={`https://youtube.com/watch?v=${id}`}
                      />
                    </List.Item>
                  );
                })}
              </List>
            </Section>
          );
        })}
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      videos,
    },
  };
};

export default Videos;
