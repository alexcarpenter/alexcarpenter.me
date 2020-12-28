// @ts-nocheck
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import sortByDate from '@/lib/sortByDate';

const getContent = (type = 'posts') => {
  const content = fs
    .readdirSync(`./content/${type}/`)
    .filter((file) => path.extname(file) === '.mdx')
    .map((file) => {
      const source = fs.readFileSync(`./content/${type}/${file}`, 'utf8');
      const { data, content } = matter(source);
      const slug = file.replace(/\.mdx$/, '');
      return { ...data, slug, type, content };
    });

  // const fixtures = content.map((x) => ({ ...x, content: null }));
  // fs.writeFileSync(
  //   path.resolve(process.cwd(), `cypress/fixtures/${type}.json`),
  //   JSON.stringify(fixtures),
  // );

  return sortByDate(content);
};

export default getContent;
