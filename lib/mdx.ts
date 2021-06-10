import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = process.cwd();

export const postsPath = path.join(root, 'content/posts');
export const workPath = path.join(root, 'content/work');

const content = {
  posts: postsPath,
  work: workPath,
};

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

export const getAllMdx = (type: keyof typeof content) => {
  const items = fs
    .readdirSync(content[type])
    .map((item) => getMdx(content[type], item));
  return items;
};
