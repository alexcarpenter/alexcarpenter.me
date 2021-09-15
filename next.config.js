const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = withVanillaExtract(nextConfig);
