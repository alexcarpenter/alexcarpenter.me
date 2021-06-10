import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getAllMdx, getMdx, workPath } from '@/lib/mdx';
import Page from '@/components/Page';
import { components } from '@/components/Mdx';

export default function WorkEntry({ frontMatter, mdx }) {
  return (
    <Page {...frontMatter} as="article" type="work">
      <div className="prose">
        <MDXRemote {...mdx} components={components} />
      </div>
    </Page>
  );
}

export async function getStaticPaths() {
  const mdxFiles = getAllMdx('work');
  return {
    paths: mdxFiles.map((file) => ({
      params: { slug: file.frontMatter.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontMatter, content } = getMdx(
    workPath,
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
