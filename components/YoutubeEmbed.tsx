import { ReactYouTubeLite } from 'react-youtube-lite';

export default function YoutubeEmbed({ id }) {
  return (
    <div className="border borderColor">
      <ReactYouTubeLite url={`https://www.youtube.com/watch?v=${id}`} />
    </div>
  );
}
