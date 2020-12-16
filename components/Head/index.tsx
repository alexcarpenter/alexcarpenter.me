import NextHead from "next/head";
import GoogleFonts from "next-google-fonts";

export default function Head({
  title = "Alex Carpenter",
  description = "Sample description",
}) {
  return (
    <>
      <GoogleFonts href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap' />
      <NextHead>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        {/* Title */}
        <title>{title}</title>
        <meta name='og:title' content={title} />

        {/* Description */}
        <meta name='description' content={description} />
        <meta name='og:description' content={description} />

        {/* Image */}
        <meta name="twitter:image" content="https://alexcarpenter.me/meta-logo.png" />
        <meta name="og:image" content="https://alexcarpenter.me/meta-logo.png" />

        {/* General */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hybrid_alex" />
        <meta name="apple-mobile-web-app-title" content="@" />
        <meta name="author" content="Alex Carpenter" />

        {/* URL */}
        <meta name="og:url" content="https://alexcarpenter.me" />

        {/* Favicons */}
        <link rel='shortcut icon' href='/favicon.ico' />
      </NextHead>
    </>
  );
}
