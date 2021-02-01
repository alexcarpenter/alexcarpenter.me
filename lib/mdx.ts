import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import MDXComponents from '@/components/MDXComponents';

const root = process.cwd();

export async function getContentByType(type) {
  const content = fs
    .readdirSync(path.join(root, 'content', type))
    .map((file) => {
      const source = fs.readFileSync(
        path.join(root, 'content', type, file),
        'utf8',
      );
      const { data } = matter(source);
      const slug = file.replace(/\.mdx$/, '');
      return {
        slug,
        type,
        title: data.title,
        publishedAt: data.publishedAt || new Date().toDateString(),
        description: data.description || null,
        tags: data.tags,
        featured: data.featured || null,
      };
    })
    // @ts-ignore
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return content;
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
      slug,
      ...data,
    },
  };
}
