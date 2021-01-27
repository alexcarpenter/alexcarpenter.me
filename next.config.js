module.exports = {
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require('./scripts/generateSitemap');
      require('./scripts/generateRss');
      require('./scripts/generateSearchData');
    }

    return config;
  },
};
