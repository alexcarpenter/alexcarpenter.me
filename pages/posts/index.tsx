import Link from 'next/link';
import { getAllMdx } from '@/lib/mdx';

export default function Posts({ posts }) {
  return (
    <div className="prose">
      <h1 className="font-bold text-2xl">Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={`/posts/${post.frontMatter.slug}`}>
              <a>{post.frontMatter.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const mdxFiles = getAllMdx();
  return {
    props: {
      posts: mdxFiles,
    },
  };
}
