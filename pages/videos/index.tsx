import { GetStaticProps, NextPage } from "next";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import data from "@/data/videos.json";
import Card from "@/components/Card";
import Intro from "@/components/Intro";
import Section from "@/components/Section";
import { getHostname } from "@/lib/getHostname";
import { cx } from "@/lib/utils";
import RightArrow from "@/components/RightArrow";
import { formatDate } from "@/lib/formatDate";

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
  videos: Array<Video>;
};

const Videos: NextPage<VideoProps> = ({ title, description, videos }) => {
  const { data } = useSWR("/api/youtube", fetcher);
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
    }, {} as Record<string, Array<Video>>);

  return (
    <>
      <Intro title={title} description={description} />

      <Section>
        <ul className="grid sm:grid-cols-2 gap-4 md:gap-8">
          <li className="flex flex-col">
            <Card eyebrow="Total subscribers">
              <p className="mt-2 text-4xl">
                {subscriberCount ? subscriberCount : "-"}
              </p>
            </Card>
          </li>
          <li className="flex flex-col">
            <Card eyebrow="Total views">
              <p className="mt-2 text-4xl">
                {viewCount
                  ? new Intl.NumberFormat("en", { notation: "compact" }).format(
                      viewCount
                    )
                  : "-"}
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

      {Object.entries(orderedVideos)
        .reverse()
        .map(([year, videos]) => {
          return (
            <Section heading={year}>
              <ul className="divide-y -my-8">
                {videos.map((video, index) => {
                  const link = `https://youtube.com/watch?v=${video.id}`;
                  return (
                    <li key={index} className="py-8">
                      <article className="flex flex-col sm:flex-row flex-wrap">
                        <div className="w-28 flex-shrink-0">
                          <time
                            className={cx(
                              "mb-2 inline-block",
                              "text-gray-600",
                              "dark:text-gray-300"
                            )}
                            dateTime="2021-12-31"
                          >
                            {formatDate(video.date)}
                          </time>
                        </div>
                        <div className="flex-1">
                          <h3>
                            <a
                              className="underline hover:no-underline"
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {video.title}
                            </a>
                            <RightArrow position="end" />
                          </h3>
                          <p
                            className={cx(
                              "text-sm",
                              "text-gray-600",
                              "dark:text-gray-300"
                            )}
                          >
                            {getHostname(link)}
                          </p>
                          <p
                            className={cx(
                              "mt-4",
                              "text-gray-600",
                              "dark:text-gray-300"
                            )}
                          >
                            {video.description}
                          </p>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </Section>
          );
        })}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ...data,
    },
  };
};

export default Videos;
