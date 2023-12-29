import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const pages = await getCollection("pages");
  return rss({
    title: "Alex Carpenter",
    description: "A humble Astronaut’s guide to the stars",
    site: context.site,
    items: pages.map((page) => ({
      title: page.data.title,
      pubDate: page.data.published,
      description: page.data.description,
      link: `/${page.slug}`,
      content: sanitizeHtml(parser.render(page.body)),
    })),
  });
}
