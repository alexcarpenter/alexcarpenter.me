import * as React from 'react';
import { ReactYouTubeLite } from 'react-youtube-lite';

function YoutubeEmbed({ id }) {
  return <ReactYouTubeLite url={`https://www.youtube.com/watch?v=${id}`} />;
}

export default YoutubeEmbed;
