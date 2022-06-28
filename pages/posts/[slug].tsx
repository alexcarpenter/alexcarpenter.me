import { NextPage } from "next/types";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Components } from "@/components/MDXComponents";

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
      <article className="mt-16">
        <h2>{post.title}</h2>
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <div className="mt-8 prose">
          <MDXContent components={Components} />
        </div>
      </article>
    </>
  );
};

export default PostPage;
