import { GetStaticProps, NextPage } from "next";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { slugify } from "@/lib/utils";
import { groupByYear } from "@/lib/groupByYear";
import pageData from "@/data/videos.json";
import Card from "@/components/Card";
import Entry from "@/components/Entry";
import EntryList from "@/components/EntryList";
import Intro from "@/components/Intro";
import Section from "@/components/Section";

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

  const groupedVides = groupByYear<Video>(videos);

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

      {Object.entries(groupedVides)
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ...pageData,
    },
  };
};

export default Videos;
