import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const { title, description, thumbnail } = pageProps;
  const metaTitle = `${title ? `${title} - ` : ""}Alex Carpenter`;
  const metaDescription = description ? description : "Web Engineer";
  const metaImage = thumbnail ? thumbnail : "/og/default.png";
  return (
    <>
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
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <ThemeProvider
        disableTransitionOnChange
        defaultTheme="system"
        attribute="class"
      >
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
