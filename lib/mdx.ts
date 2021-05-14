import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = process.cwd();
export const contentPath = path.join(root, 'posts');

export const getMdx = (directoryPath, fileName) => {
  const fullPath = path.join(directoryPath, fileName);
  const docSource = fs.readFileSync(fullPath, 'utf-8');

  const { data, content } = matter(docSource);

  return {
    frontMatter: {
      ...data,
      slug: fileName.replace('.mdx', ''),
    },
    content,
  };
};

export const getAllMdx = () => {
  const posts = fs
    .readdirSync(contentPath)
    .map((post) => getMdx(contentPath, post));
  return posts;
};
