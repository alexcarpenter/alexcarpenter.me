import { GetStaticProps, NextPage } from "next";
import data from "@/data/posts.json";
import Intro from "@/components/Intro";

type PostsProps = {
  title: string;
  description: string;
};

const Post: NextPage<PostsProps> = ({ title, description }) => {
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

export default Post;
