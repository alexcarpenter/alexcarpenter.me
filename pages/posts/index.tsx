import { allPosts, Post } from 'contentlayer/generated';

export async function getStaticProps() {
  return { props: { posts: allPosts } };
}

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <div>
      {posts.map((post, idx) => (
        <article key={idx}>
          {post.title} {post.date} {post.url}
        </article>
      ))}
    </div>
  );
}
