import "./globals.css";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import { cx } from "@/lib/classnames";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";
import { Providers } from "./providers";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "italic",
});

export const metadata = {
  title: {
    default: "Alex Carpenter",
    template: "%s // Alex Carpenter",
  },
  description: "Design Engineer",
  openGraph: {
    title: "Alex Carpenter",
    description: "Design Engineer",
    url: "https://alexcarpenter.me",
    siteName: "Alex Carpenter",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Alex Carpenter",
  },
  icons: {
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cx(
          "mx-auto max-w-[100rem] bg-page px-4 py-16 font-sans antialiased",
          instrumentSans.variable,
          instrumentSerif.variable
        )}
      >
        <Providers>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
