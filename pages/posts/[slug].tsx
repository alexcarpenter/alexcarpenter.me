import { NextPage } from "next/types";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Components } from "@/components/MDXComponents";
import { Heading } from "@/components/Heading";
import { Prose } from "@/components/Prose";
import { Spacer } from "@/components/Spacer";

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = allPosts.find((post) => post.slug === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostPage: NextPage<{ post: Post }> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <>
      <article>
        <Heading>{post.title}</Heading>
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <Spacer size="xl" />
        <Prose>
          <MDXContent components={Components} />
        </Prose>
      </article>
    </>
  );
};

export default PostPage;
