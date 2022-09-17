import * as React from "react";
import "the-new-css-reset";
import "styles/app.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import SEO from "next-seo.config";
import { Banner } from "components/Banner";
import { CommandMenu } from "components/CommandMenu";

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
    defaultTheme: "system",
    disableTransitionOnChange: true,
  },
]);

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <Providers>
      <DefaultSeo {...SEO} />
      <div className="container">
        <Banner setOpen={setOpen} />
        <main>
          <Component {...pageProps} />
        </main>
        <CommandMenu open={open} setOpen={setOpen} />
      </div>
    </Providers>
  );
}

export default MyApp;
