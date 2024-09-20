import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");

  return rss({
    title: "Feed // Alex Carpenter",
    description:
      "A collection of short notes, interesting links, and the occasional long form post. ",
    site: context.site,
    items: posts.map((item) => {
      return {
        title: item.data.title,
        pubDate: item.data.published,
        description: item.data.description,
        customData: item.data.customData,
        link: `/posts/${item.slug}/`,
      };
    }),
  });
}
