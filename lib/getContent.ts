// @ts-nocheck
import matter from "gray-matter";
import fs from "fs";
import path from "path";

const getContent = (type = "posts") => {
  const content = fs
    .readdirSync(`./content/${type}/`)
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => {
      const source = fs.readFileSync(`./content/${type}/${file}`, "utf8");
      const { data, content } = matter(source);
      const slug = file.replace(/\.mdx$/, "");
      return { ...data, slug, content };
    })
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return content;
};

export default getContent;
