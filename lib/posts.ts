import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostFrontMatter = {
  slug: string;
  date: string;
  title: string;
  description: string;
  link?: string;
  tags?: Array<string>;
};

const root = process.cwd();

export const getPost = (fileName: string) => {
  const fullPath = path.join(path.join(root, "content/posts"), fileName);
  const docSource = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(docSource);
  return {
    frontMatter: {
      ...data,
      slug: fileName.replace(".mdx", ""),
    } as PostFrontMatter,
    content,
  };
};

export const getAllPosts = () => {
  const posts = fs
    .readdirSync(path.join(root, "content/posts"))
    .map((fileName) => getPost(fileName)["frontMatter"]);
  return posts;
};
