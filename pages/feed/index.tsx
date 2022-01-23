import { GetStaticProps, NextPage } from "next";
import pageData from "@/data/feed.json";
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
      ...pageData,
    },
  };
};

export default Feed;
