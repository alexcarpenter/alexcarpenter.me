const { withContentlayer } = require("next-contentlayer");
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/posts/jon-gaffney-edc-winter-2021",
        destination:
          "https://gear.alexcarpenter.me/posts/jon-gaffney-edc-winter-2021",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(withVanillaExtract(nextConfig));
