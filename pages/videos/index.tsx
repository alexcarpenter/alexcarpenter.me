import { GetStaticProps, NextPage } from "next";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import data from "@/data/videos.json";
import Card from "@/components/Card";
import Intro from "@/components/Intro";
import Section from "@/components/Section";

type VideoProps = {
  title: string;
  description: string;
};

const Videos: NextPage<VideoProps> = ({ title, description }) => {
  const { data } = useSWR("/api/youtube", fetcher);
  const subscriberCount = data?.subscriberCount;
  const viewCount = data?.viewCount;

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
