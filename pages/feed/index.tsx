import { GetStaticProps, NextPage } from "next";
import data from "@/data/feed.json";
import Intro from "@/components/Intro";

type FeedProps = {
  title: string;
  description: string;
};

const Feed: NextPage<FeedProps> = ({ title, description }) => {
  return (
    <>
      <Intro title={title} description={description} />
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

export default Feed;
