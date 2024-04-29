import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection("posts", ({ data }) => {
    return data.draft !== true;
  });
  return rss({
    title: "Posts // Alex Carpenter",
    description: "",
    site: context.site,
    trailingSlash: false,
    items: posts
      .sort((a, b) => {
        const aDate = a.data.updated || a.data.published;
        const bDate = b.data.updated || b.data.published;
        return Date.parse(bDate.toString()) - Date.parse(aDate.toString());
      })
      .map((post) => ({
        link: `/posts/${post.slug}`,
        pubDate: post.data.published,
        title: post.data.title,
        description: post.data.description,
        content: sanitizeHtml(parser.render(post.body), {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        }),
      })),
  });
}
