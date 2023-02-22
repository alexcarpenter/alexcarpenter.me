import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface YoutubeEmbedProps {
  id: string;
  title: string;
}

const YoutubeEmbed = ({ id, title }: YoutubeEmbedProps) => {
  return <LiteYouTubeEmbed id={id} title={title} />;
};

export { YoutubeEmbed };
