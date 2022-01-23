import { GetStaticProps, NextPage } from "next";
import pageData from "@/data/posts.json";
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
      ...pageData,
    },
  };
};

export default Post;
