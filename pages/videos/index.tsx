import { GetStaticProps, NextPage } from 'next';
import useSWR from 'swr';
import type { GroupByYear } from '@/lib/utils';
import { groupByYear, fetcher, slugify } from '@/lib/utils';
import Card from '@/components/Card';
import Entry from '@/components/Entry';
import EntryList from '@/components/EntryList';
import Intro from '@/components/Intro';
import Section from '@/components/Section';
import ExternalLink from '@/components/ExternalLink';

type Video = {
  title: string;
  description: string;
  date: string;
  id: string;
  tags: Array<string>;
};

type VideoProps = {
  title: string;
  description: string;
  videos: GroupByYear<Video>;
};

const Videos: NextPage<VideoProps> = ({ title, description, videos }) => {
  const { data } = useSWR('/api/youtube', fetcher);
  const subscriberCount = data?.subscriberCount;
  const viewCount = data?.viewCount;

  return (
    <>
      <Intro title={title} description={description} />

      <Section>
        <ul className="grid sm:grid-cols-2 gap-4">
          <li className="flex flex-col">
            <Card eyebrow="Total subscribers" variant="gray">
              <p className="mt-2 text-4xl">
                {subscriberCount ? subscriberCount : '-'}
              </p>
            </Card>
          </li>
          <li className="flex flex-col">
            <Card eyebrow="Total views" variant="gray">
              <p className="mt-2 text-4xl">
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
          <ExternalLink
            href="https://www.youtube.com/channel/UC2jJoQlzvLPvnYfowAEVaOg?sub_confirmation=1"
            hostname={false}
          >
            Subscribe on YouTube
          </ExternalLink>
        </div>
      </Section>

      {Object.entries(videos)
        .reverse()
        .map(([year, yearVideos]) => {
          return (
            <Section key={year} heading={year}>
              <EntryList>
                {yearVideos.map((video, index) => {
                  const link = `https://youtube.com/watch?v=${video.id}`;
                  return (
                    <Entry
                      key={index}
                      link={link}
                      date={video.date}
                      title={video.title}
                      description={video.description}
                      tags={video.tags.map((tag) => {
                        return {
                          path: `/videos/tagged/${slugify(tag)}`,
                          tag: tag,
                        };
                      })}
                    />
                  );
                })}
              </EntryList>
            </Section>
          );
        })}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await import('@/data/videos.json');
  const groupedVideos = groupByYear<Video>(pageData.videos);
  return {
    props: {
      ...pageData,
      videos: groupedVideos,
    },
  };
};

export default Videos;
