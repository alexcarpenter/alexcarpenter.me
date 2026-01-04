import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import { getMarkdownParser } from "@/lib/markdown.js";
import { stripDatePrefix } from "@/lib/utils";
const parser = getMarkdownParser();

export async function GET(context) {
  const entries = await getCollection("articles");
  return rss({
    title: "Articles - Alex Carpenter",
    description: "Articles about gear, tools, and everyday life. ",
    site: context.site,
    items: entries
      .sort((a, b) => b.data.published - a.data.published)
      .map((post) => {
        const slug = stripDatePrefix(post.id);
        return ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.published,
        link: `/articles/${slug}`,
        content:
          post.body &&
          sanitizeHtml(parser.render(post.body), {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
          }),
      })}),
  });
}
