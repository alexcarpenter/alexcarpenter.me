import { LiteYoutubeEmbed } from "react-lite-yt-embed";

export default function YoutubeVideo({ id }: { id: string }) {
  return <LiteYoutubeEmbed key={id} id={id} />;
}
