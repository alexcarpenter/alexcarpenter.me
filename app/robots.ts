export default function robots() {
  return {
    rules: [
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        disallow: "/",
      },
      {
        userAgent: "Google-Extended",
        disallow: "/",
      },
    ],
    sitemap: "https://alexcarpenter.me/sitemap.xml",
    host: "https://alexcarpenter.me",
  };
}
