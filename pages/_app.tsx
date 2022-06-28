import "the-new-css-reset";
import "@/styles/app.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";
import { OverlayProvider } from "@react-aria/overlays";
import { ThemeProvider } from "next-themes";
import { CommandBar, CommandBarProvider } from "@/components/CommandBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/Toaster";

function MyApp({ Component, pageProps }: AppProps) {
  const { title, description } = pageProps?.post || pageProps || {};
  const metaTitle = title
    ? `${title} - Alex Carpenter`
    : "Alex Carpenter - UI Engineer";
  const metaDescription = description
    ? description
    : "UI Engineer from Grand Rapids, MI";

  return (
    <SSRProvider>
      <OverlayProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <CommandBarProvider>
            <Head>
              <title>{metaTitle}</title>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <meta property="og:title" content={metaTitle} />
              <meta name="description" content={metaDescription} />
              <meta name="og:description" content={metaDescription} />
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
            <Footer />
            <CommandBar />
            <Toaster />
          </CommandBarProvider>
        </ThemeProvider>
      </OverlayProvider>
    </SSRProvider>
  );
}

export default MyApp;
