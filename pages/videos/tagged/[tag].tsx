import type { GetStaticPaths, GetStaticProps } from 'next/types';
import { ParsedUrlQuery } from 'querystring';
import { groupByYear, slugify } from '@/lib/utils';
import pageData from '@/data/videos.json';
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
  videos: Array<Video>;
};

const VideosTagged = ({ tag, videos }: VideosTaggedProps) => {
  const groupedVideos = groupByYear<Video>(videos);
  return (
    <>
      <Intro title="Videos" description={`Tagged with "${tag}"`} />

      {Object.entries(groupedVideos)
        .reverse()
        .map(([year, videos]) => {
          return (
            <Section key={year} heading={year}>
              <EntryList>
                {videos.map((video, index) => {
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
  const { tag } = context.params as ContextProps;
  return {
    props: {
      title: `Videos tagged with "${tag}"`,
      tag,
      videos: pageData.videos.filter((video) => {
        return video.tags.includes(tag);
      }),
    },
  };
};

export default VideosTagged;
