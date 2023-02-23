import * as React from "react";
import { Analytics } from "@vercel/analytics/react";
import "the-new-css-reset";
import "styles/app.css";
import type { AppProps } from "next/app";
import { MotionConfig } from "framer-motion";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import SEO from "next-seo.config";
import { TooltipProvider } from "components/primitives/Tooltip";
import { Banner } from "components/Banner";
import { ContentInfo } from "components/ContentInfo";

const composeProviders =
  (...providers: any[]) =>
  ({ children }: { children: React.ReactNode }) =>
    providers.reduceRight((acc, provider) => {
      const [Provider, props] = provider;
      return <Provider {...props}>{acc}</Provider>;
    }, children);

const Providers = composeProviders(
  [MotionConfig, { reducedMotion: "user" }],
  [
    ThemeProvider,
    {
      attribute: "class",
      defaultTheme: "system",
      disableTransitionOnChange: true,
    },
  ],
  [TooltipProvider]
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Providers>
        <DefaultSeo {...SEO} />
        <div className="container">
          <Banner />
          <main id="main">
            <Component {...pageProps} />
          </main>
          <ContentInfo />
        </div>
      </Providers>
      <Analytics />
    </>
  );
}

export default MyApp;
