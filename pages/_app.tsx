import "the-new-css-reset";
import "styles/app.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import SEO from "next-seo.config";
import { CommandMenu } from "components/CommandMenu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      <DefaultSeo {...SEO} />
      <main>
        <Component {...pageProps} />
      </main>
      <CommandMenu />
    </ThemeProvider>
  );
}

export default MyApp;
