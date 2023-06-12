import { allPosts, allPages } from "@/.contentlayer/generated";

export default async function sitemap() {
  const pages = allPages.map((page) => ({
    url: `https://alexcarpenter.me/${page.slug}`,
    lastModified: page.updated,
  }));

  const posts = allPosts.map((post) => ({
    url: `https://alexcarpenter.me/posts/${post.slug}`,
    lastModified: post.date,
  }));

  const routes = ["", "/posts", "/about", "/timeline", "/colophon"].map(
    (route) => ({
      url: `https://alexcarpenter.me${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return [...routes, ...pages, ...posts];
}
