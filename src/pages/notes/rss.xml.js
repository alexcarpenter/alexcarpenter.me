import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import { getMarkdownParser } from "@/lib/markdown.js";
const parser = getMarkdownParser();

export async function GET(context) {
  const notes = await getCollection("notes");
  return rss({
    title: "Notes - Alex Carpenter",
    description:
      "Notes on engineering, developer experience, design systems, and accessibility.",
    site: context.site,
    items: notes
      .sort((a, b) => b.data.published - a.data.published)
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.published,
        link: `/notes/${post.id}/`,
        content:
          post.body &&
          sanitizeHtml(parser.render(post.body), {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
          }),
      })),
  });
}
