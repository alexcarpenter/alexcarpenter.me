import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import { getMarkdownParser } from "@/lib/markdown.js";
const parser = getMarkdownParser();

export async function GET(context) {
  const entries = await getCollection("journal");
  return rss({
    title: "Journal - Alex Carpenter",
    description: "",
    site: context.site,
    items: entries
      .sort((a, b) => b.data.published - a.data.published)
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.published,
        link: `/journal/${post.id}/`,
        content:
          post.body &&
          sanitizeHtml(parser.render(post.body), {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
          }),
      })),
  });
}
