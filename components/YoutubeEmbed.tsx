import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from 'react';

import styles from './youtube.module.css';

const qs = (params: Record<string, string>) => {
  return Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
    )
    .join('&');
};

// https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
type ResolutionType = 'maxresdefault' | 'sddefault' | 'hqdefault';

interface IYouTubeEmbedProps {
  id: string;
  adLinksPreconnect?: boolean;
  defaultPlay?: boolean; // set defaultPlay as `true` will directly show youtube iframe
  isPlaylist?: boolean;
  noCookie?: boolean;
  mute?: boolean;
  params?: Record<string, string>;
  isMobile?: boolean;
  mobileResolution?: ResolutionType;
  desktopResolution?: ResolutionType;
  lazyImage?: boolean;
  iframeTitle?: string;
  imageAltText?: string;
}

const YoutubeEmbed = ({
  id,
  params = {},
  defaultPlay = false,
  adLinksPreconnect = true,
  isPlaylist = false,
  noCookie = true,
  mute = true,
  isMobile = false,
  mobileResolution = 'hqdefault',
  desktopResolution = 'maxresdefault',
  lazyImage = false,
  iframeTitle = 'YouTube video.',
  imageAltText = "YouTube's thumbnail image for the video.",
}: IYouTubeEmbedProps): React.ReactElement => {
  const muteParam = mute || defaultPlay ? '1' : '0'; // Default play must be mute
  const queryString = useMemo(
    () => qs({ autoplay: '1', mute: muteParam, ...params }),
    [],
  );
  const defaultPosterUrl = isMobile
    ? `https://i.ytimg.com/vi_webp/${id}/${mobileResolution}.webp`
    : `https://i.ytimg.com/vi_webp/${id}/${desktopResolution}.webp`;
  const fallbackPosterUrl = isMobile
    ? `https://i.ytimg.com/vi/${id}/${mobileResolution}.jpg`
    : `https://i.ytimg.com/vi/${id}/${desktopResolution}.jpg`;
  const ytUrl = noCookie
    ? 'https://www.youtube-nocookie.com'
    : 'https://www.youtube.com';
  const iframeSrc = isPlaylist
    ? `${ytUrl}/embed/videoseries?list=${id}`
    : `${ytUrl}/embed/${id}?${queryString}`; // * Lo, the youtube placeholder image!  (aka the thumbnail, poster image, etc)

  const [isPreconnected, setIsPreconnected] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(defaultPlay);
  const [posterUrl, setPosterUrl] = useState(defaultPosterUrl);
  const isWebpSupported = useRef(true);

  const warmConnections = useCallback(() => {
    if (isPreconnected) return;
    setIsPreconnected(true);
  }, []);

  const loadIframeFunc = useCallback(() => {
    if (iframeLoaded) return;
    setIframeLoaded(true);
  }, []);

  // fallback to hqdefault resolution if maxresdefault is not supported.
  useEffect(() => {
    if (
      (isMobile && mobileResolution === 'hqdefault') ||
      (!isMobile &&
        desktopResolution === 'hqdefault' &&
        !isWebpSupported.current)
    )
      return;

    // If the image ever loaded one time (in this case is preload link), this part will use cache data, won't cause a new network request.
    const img = new Image();
    img.onload = function () {
      if (img.width === 120 || img.width === 0) {
        if (!isWebpSupported.current)
          setPosterUrl(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
        else setPosterUrl(`https://i.ytimg.com/vi_webp/${id}/hqdefault`);
      }
    };
    img.onerror = function () {
      isWebpSupported.current = false;
      setPosterUrl(fallbackPosterUrl);
    };
    img.src = posterUrl;
  }, [id, posterUrl]);

  return (
    <>
      {/* Link is "body-ok" element. Reference: https://html.spec.whatwg.org/multipage/links.html#body-ok */}
      <link rel="preload" href={posterUrl} as="image" />
      {isPreconnected && (
        <>
          {/* The iframe document and most of its subresources come right off youtube.com */}
          <link rel="preconnect" href={ytUrl} />
          {/* The botguard script is fetched off from google.com */}
          <link rel="preconnect" href="https://www.google.com" />
        </>
      )}
      {isPreconnected && adLinksPreconnect && (
        <>
          {/* Not certain if these ad related domains are in the critical path. Could verify with domain-specific throttling. */}
          <link rel="preconnect" href="https://static.doubleclick.net" />
          <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        </>
      )}
      <button
        onClick={loadIframeFunc}
        onPointerOver={warmConnections}
        className={`${styles['yt-lite']} ${
          iframeLoaded && styles['lyt-activated']
        }`}
        data-testid="lite-yt-embed"
      >
        <img
          src={posterUrl}
          className={`${styles['yt-lite-thumbnail']}`}
          loading={lazyImage ? 'lazy' : undefined}
          alt={imageAltText}
        />
        <div className={`${styles['lty-playbtn']}`}></div>
        {iframeLoaded && (
          <iframe
            width="560"
            height="315"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={iframeTitle}
            src={iframeSrc}
          ></iframe>
        )}
      </button>
    </>
  );
};

export default YoutubeEmbed;
