import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  return rss({
    title: "Posts // Alex Carpenter",
    description: "",
    site: context.site,
    items: posts.map((item) => {
      return {
        title: item.data.title,
        pubDate: item.data.published,
        description: item.data.description,
        link: `/posts/${item.id}`,
      };
    }),
  });
}
