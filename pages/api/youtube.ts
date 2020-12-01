export default async (_, res) => {
  var key = process.env.YOUTUBE_API_KEY;
  const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC2jJoQlzvLPvnYfowAEVaOg&key=${key}`);
  const json = await response.json();
  const { subscriberCount, viewCount, videoCount } = json.items[0].statistics;

  return res.status(200).json({
    subscriberCount,
    viewCount,
    videoCount,
  });
};
