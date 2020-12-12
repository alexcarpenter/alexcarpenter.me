export default async (_, res) => {
  const data = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC2jJoQlzvLPvnYfowAEVaOg&key=${process.env.YOUTUBE_API_KEY}`);
  const stats = await data.json();
  const { subscriberCount, viewCount, videoCount } = stats?.items[0].statistics;

  res.setHeader("Cache-Control", "public, s-maxage=1200, stale-while-revalidate=600");

  return res.status(200).json({
    subscriberCount,
    viewCount,
    videoCount,
  });
};
