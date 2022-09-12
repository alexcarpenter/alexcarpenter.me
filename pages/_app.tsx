import * as React from "react";
import "the-new-css-reset";
import "styles/app.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import SEO from "next-seo.config";

const composeProviders =
  (...providers: any[]) =>
  ({ children }: { children: React.ReactNode }) =>
    providers.reduceRight((acc, provider) => {
      const [Provider, props] = provider;
      return <Provider {...props}>{acc}</Provider>;
    }, children);

const Providers = composeProviders([
  ThemeProvider,
  {
    attribute: "class",
    defaultTheme: "dark",
    disableTransitionOnChange: true,
  },
]);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <DefaultSeo {...SEO} />
      <main>
        <Component {...pageProps} />
      </main>
    </Providers>
  );
}

export default MyApp;
