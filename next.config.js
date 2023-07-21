const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/favorites',
        destination: '/posts/favorites',
        permanent: true,
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)
