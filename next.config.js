module.exports = {
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require('./scripts/sitemap');
      require('./scripts/rss');
    }

    return config;
  },
};
