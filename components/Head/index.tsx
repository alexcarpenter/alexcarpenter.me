import NextHead from 'next/head';

const defaultImage = 'og-image.png';

export default function Head({
  title = 'Alex Carpenter',
  description = 'User interface engineer currently interested in CSS architecture, React, TypeScript, design systems, and state machines.',
  image = defaultImage,
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <>
      <NextHead>
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* Title */}
        <title>{title}</title>
        <meta name="og:title" content={title} />

        {/* Description */}
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />

        {/* Image */}
        <meta
          name="twitter:image"
          content={`https://alexcarpenter.me/${image}`}
        />
        <meta name="og:image" content={`https://alexcarpenter.me/${image}`} />

        {/* General */}
        <meta
          name="twitter:card"
          content={image === defaultImage ? 'summary' : 'summary_large_image'}
        />
        <meta name="twitter:site" content="@hybrid_alex" />
        <meta name="apple-mobile-web-app-title" content="@" />
        <meta name="author" content="Alex Carpenter" />

        {/* URL */}
        <meta name="og:url" content="https://alexcarpenter.me" />

        {/* Favicons */}
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* RSS feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed for alexcarpenter.me"
          href="/feed.xml"
        />
      </NextHead>
    </>
  );
}
