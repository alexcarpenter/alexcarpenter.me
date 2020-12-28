import { LiteYoutubeEmbed } from 'react-lite-yt-embed';

type ResolutionType = 'maxresdefault' | 'sddefault' | 'hqdefault';

interface LiteYouTubeEmbedProps {
  id: string;
  adLinksPreconnect?: boolean;
  defaultPlay?: boolean;
  isPlaylist?: boolean;
  noCookie?: boolean;
  mute?: boolean;
  params?: Record<string, string>;
  isMobile?: boolean;
  mobileResolution?: ResolutionType;
  desktopResolution?: ResolutionType;
  lazyImage?: boolean;
}

export default function YoutubeVideo(props: LiteYouTubeEmbedProps) {
  return <LiteYoutubeEmbed key={props.id} mute={false} {...props} />;
}
