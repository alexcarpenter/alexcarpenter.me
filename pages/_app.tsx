import * as React from "react";
import { Analytics } from "@vercel/analytics/react";
import "the-new-css-reset";
import "styles/app.css";
import type { AppProps } from "next/app";
import { MotionConfig } from "framer-motion";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { ToastProvider } from "@radix-ui/react-toast";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import SEO from "next-seo.config";
import { Banner } from "components/Banner";
import { Gradient } from "components/Gradient";
import { CommandMenu } from "components/CommandMenu";
import { SkipLink } from "components/SkipLink";
import { Toaster } from "components/Toast/Toast";

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
  [ToastProvider],
  [TooltipProvider]
);

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Providers>
        <DefaultSeo {...SEO} />
        <SkipLink />
        <Gradient />
        <div className="container">
          <Banner setOpen={setOpen} />
          <main id="main">
            <Component {...pageProps} />
          </main>
          <CommandMenu open={open} setOpen={setOpen} />
          <Toaster />
        </div>
      </Providers>
      <Analytics />
    </>
  );
}

export default MyApp;
