import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getAllMdx, getMdx, feedPath } from '@/lib/mdx';
import Page from '@/components/Page';
import { components } from '@/components/Mdx';
import { formatDate } from '@/lib/utils';

export default function FeedPage({ frontMatter, mdx }) {
  return (
    <Page title={`Posted: ${formatDate(frontMatter.date, 'full')}`} type="feed">
      <div className="prose">
        <MDXRemote {...mdx} components={components} />
      </div>
      <p className="mt-6 text-sm textSecondary">
        &mdash;{' '}
        <time dateTime={frontMatter.date}>
          {formatDate(frontMatter.date, 'full')}
        </time>{' '}
        <span role="separator" aria-orientation="vertical">
          &#183;
        </span>{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={`https://twitter.com/search?${new URLSearchParams({
            q: `https://alexcarpenter.me/feed/${frontMatter.slug}`,
          })}`}
          className="underline hover:no-underline"
        >
          Discuss on Twitter
        </a>
      </p>
    </Page>
  );
}

export async function getStaticPaths() {
  const mdxFiles = getAllMdx('feed');
  return {
    paths: mdxFiles.map((file) => ({
      params: { slug: file.frontMatter.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontMatter, content } = getMdx(
    feedPath,
    `${context.params.slug}.mdx`,
  );

  const mdxContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: frontMatter,
  });

  return {
    props: {
      frontMatter,
      mdx: mdxContent,
    },
  };
}
