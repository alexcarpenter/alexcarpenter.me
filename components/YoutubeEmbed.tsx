import { ReactYouTubeLite } from "react-youtube-lite";

type YoutubeEmbed = {
  id: string;
};

const YoutubeEmbed = ({ id }: YoutubeEmbed) => {
  return (
    <div className="border borderColor">
      <ReactYouTubeLite url={`https://www.youtube.com/watch?v=${id}`} />
    </div>
  );
};

export default YoutubeEmbed;
