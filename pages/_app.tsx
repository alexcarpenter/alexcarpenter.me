import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { SSRProvider } from '@react-aria/ssr';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  const { title, description, thumbnail } = pageProps;
  const metaTitle = `${title ? `${title} - ` : ''}Alex Carpenter`;
  const metaDescription = description ? description : 'Web Engineer';
  const metaImage = thumbnail ? thumbnail : '/og/default.png';
  return (
    <>
      <SSRProvider>
        <Head>
          <title>{metaTitle}</title>
          <meta property="og:title" content={metaTitle} />
          <meta name="description" content={metaDescription} />
          <meta name="og:description" content={metaDescription} />
          <meta httpEquiv="Content-Language" content="en" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content={`https://alexcarpenter.me${metaImage}`}
          />
          <meta name="twitter:site" content="@hybrid_alex" />
          <meta name="twitter:creator" content="@hybrid_alex" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="author" content="Alex Carpenter" />
          <meta name="theme-color" content="#000000" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </Head>
        <ThemeProvider
          disableTransitionOnChange
          defaultTheme="system"
          attribute="class"
        >
          <a
            href="#main"
            className="fixed top-0 left-0 p-2 -translate-y-full focus:translate-y-0"
          >
            Skip to main content
          </a>
          <main id="main">
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </SSRProvider>
    </>
  );
}

export default MyApp;
