import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXFrontMatter } from 'types';

const root = process.cwd();

export const postsPath = path.join(root, 'content/posts');
export const feedPath = path.join(root, 'content/feed');

const content = {
  posts: postsPath,
  feed: feedPath,
};

export const getMdx = (directoryPath, fileName) => {
  const fullPath = path.join(directoryPath, fileName);
  const docSource = fs.readFileSync(fullPath, 'utf-8');

  const { data, content } = matter(docSource);

  return {
    frontMatter: {
      ...(data as MDXFrontMatter),
      slug: fileName.replace('.mdx', ''),
    },
    content,
  };
};

export const getAllMdx = (type: keyof typeof content) => {
  const items = fs
    .readdirSync(content[type])
    .map((item) => getMdx(content[type], item));
  return items;
};
