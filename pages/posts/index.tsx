import Link from 'next/link';
import { getAllMdx } from '@/lib/mdx';
import Page from '@/components/Page';

export default function Posts({ posts }) {
  return (
    <Page title="Posts" description="Sharing what i've learned">
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
    </Page>
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
