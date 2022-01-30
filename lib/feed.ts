import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export type FeedFrontMatter = {
  date: string;
  slug: string;
};

const root = process.cwd();

export const serializeMdxContent = async (item: any) => {
  const { frontMatter, content } = item;
  const mdx = await serialize(content);
  return {
    frontMatter,
    mdx,
  };
};

export const getFeedItem = (fileName: string) => {
  const fullPath = path.join(path.join(root, 'content/feed'), fileName);
  const docSource = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(docSource);
  return {
    frontMatter: {
      ...data,
      slug: fileName.replace('.mdx', ''),
    } as FeedFrontMatter,
    content,
  };
};

export const getAllFeed = () => {
  const posts = fs
    .readdirSync(path.join(root, 'content/feed'))
    .map((fileName) => getFeedItem(fileName));
  return posts;
};
