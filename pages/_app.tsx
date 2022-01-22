import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  );
}

export default MyApp;
