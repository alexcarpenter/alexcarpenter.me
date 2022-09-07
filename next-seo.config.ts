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
} as NextSeoProps;
