import "./globals.css";
import { Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import { cx } from "@/lib/classnames";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";
import { Providers } from "./providers";

const inter = localFont({
  src: "../public/fonts/inter-var-latin.woff2",
  display: "swap",
  variable: "--font-inter",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
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
          "mx-auto max-w-[112.5rem] bg-page px-4 py-16 font-sans antialiased",
          inter.variable,
          instrument.variable
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
