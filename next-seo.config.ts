import type { NextSeoProps } from "next-seo";

export default {
  titleTemplate: "%s | Alex Carpenter",
  title: "Alex Carpenter",
  description: "Design Engineer",
  openGraph: {
    locale: "en_US",
    type: "website",
    url: "https://alexcarpenter.me",
    site_name: "Alex Carpenter",
  },
  twitter: {
    handle: "@hybrid_alex",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.svg",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
} as NextSeoProps;
