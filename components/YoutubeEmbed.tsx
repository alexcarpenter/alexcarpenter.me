import * as React from 'react';
import { ReactYouTubeLite } from 'react-youtube-lite';

function YoutubeEmbed({ id }) {
  return (
    <div className="border borderColor">
      <ReactYouTubeLite url={`https://www.youtube.com/watch?v=${id}`} />
    </div>
  );
}

export default YoutubeEmbed;
