import { GetStaticProps, NextPage } from "next";
import data from "@/data/videos.json";
import Intro from "@/components/Intro";

type VideoProps = {
  title: string;
  description: string;
};

const Videos: NextPage<VideoProps> = ({ title, description }) => {
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

export default Videos;
