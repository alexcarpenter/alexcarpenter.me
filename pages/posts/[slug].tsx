import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getAllMdx, getMdx, contentPath } from '@/lib/mdx';
import Page from '@/components/Page';
import { components } from '@/components/Mdx';

export default function Post({ frontMatter, mdx }) {
  return (
    <Page title={frontMatter.title} description={frontMatter.description}>
      <article className="prose">
        <h1 className="font-bold text-2xl">{frontMatter.title}</h1>
        <p className="mt-1 text-gray-400">{frontMatter.publishedAt}</p>
        <MDXRemote {...mdx} components={components} />
      </article>
    </Page>
  );
}

export async function getStaticPaths() {
  const mdxFiles = getAllMdx();
  return {
    paths: mdxFiles.map((file) => ({
      params: { slug: file.frontMatter.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontMatter, content } = getMdx(
    contentPath,
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
