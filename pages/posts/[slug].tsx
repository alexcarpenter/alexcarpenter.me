import { NextPage } from 'next/types';
import { allPosts, Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { format, parseISO } from 'date-fns';

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.url);
  return {
    paths,
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
  return {
    props: {
      post: allPosts.find((post) => post._raw.flattenedPath === params.slug),
    },
  };
}

const Post: NextPage<{ post: Post }> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <article className="mt-12">
      <h2>{post.title}</h2>
      <time dateTime={post.date}>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="mt-8 prose">
        <MDXContent components={{}} />
      </div>
    </article>
  );
};

export default Post;
