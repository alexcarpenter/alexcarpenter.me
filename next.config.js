module.exports = {
  async redirects() {
    return [
      {
        source: '/posts/2020/10/border-hover',
        destination: '/posts/border-hover',
        permanent: true,
      },
    ];
  },
};
