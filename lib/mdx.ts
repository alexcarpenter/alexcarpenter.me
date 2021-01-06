import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import MDXComponents from '@/components/MDXComponents';

const root = process.cwd();

export async function getContentByType(type) {
  return fs.readdirSync(path.join(root, 'content', type)).map((file) => {
    const source = fs.readFileSync(
      path.join(root, 'content', type, file),
      'utf8',
    );
    const { data } = matter(source);
    const slug = file.replace(/\.mdx$/, '');
    return {
      slug,
      type,
      ...data,
    };
  });
}

export async function getContentBySlug(slug: string, type?: string) {
  const source = type
    ? fs.readFileSync(path.join(root, 'content', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'content', `${slug}.mdx`), 'utf8');

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    source: mdxSource,
    frontMatter: {
      type: type || null,
      ...data,
    },
  };
}
