import type { GetStaticPaths, GetStaticProps } from 'next/types';
import type { GroupByYear } from '@/lib/utils';
import { ParsedUrlQuery } from 'querystring';
import { groupByYear, slugify } from '@/lib/utils';
import Intro from '@/components/Intro';
import Section from '@/components/Section';
import EntryList from '@/components/EntryList';
import Entry from '@/components/Entry';

interface ContextProps extends ParsedUrlQuery {
  tag: string;
}

type Video = {
  title: string;
  description: string;
  date: string;
  id: string;
  tags: Array<string>;
};

type VideosTaggedProps = {
  tag: string;
  videos: GroupByYear<Video>;
};

const VideosTagged = ({ tag, videos }: VideosTaggedProps) => {
  return (
    <>
      <Intro title="Videos" description={`Tagged with "${tag}"`} />

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

export const getStaticPaths: GetStaticPaths = async () => {
  const pageData = await import('@/data/videos.json');
  return {
    paths: Array.from(
      new Set(pageData.videos.map((file) => file.tags).flat()),
    ).map((tag) => {
      return {
        params: {
          tag: slugify(tag),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pageData = await import('@/data/videos.json');
  const { tag } = context.params as ContextProps;
  const filteredVideos = pageData.videos.filter((video) => {
    return video.tags.includes(tag);
  });
  const groupedVideos = groupByYear<Video>(filteredVideos);
  return {
    props: {
      title: 'Videos',
      tag,
      videos: groupedVideos,
    },
  };
};

export default VideosTagged;
