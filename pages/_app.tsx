import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "@/components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alex Carpenter - UI Engineer</title>
        <meta property="og:title" content="Alex Carpenter - UI Engineer" />
        <meta name="description" content="UI Engineer from Grand Rapids, MI" />
        <meta
          name="og:description"
          content="UI Engineer from Grand Rapids, MI"
        />
        <meta httpEquiv="Content-Language" content="en" />
        <meta property="og:type" content="website" />
        <meta name="author" content="Alex Carpenter" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
