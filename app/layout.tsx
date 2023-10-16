import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { cx } from "@/app/utils";
import { Analytics } from "./analytics";
import { Providers } from "./providers";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alex Carpenter",
    template: "%s // Alex Carpenter",
  },
  description: "Web Engineer",
  openGraph: {
    title: "Alex Carpenter",
    description: "Web Engineer",
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
    description: "Web Engineer",
    card: "summary",
  },
  icons: {
    shortcut: "/favicon.svg",
  },
  verification: {
    other: {
      "ahrefs-site-verification":
        "23cb571e5b7e73cceaf780eef248f7f22c030dc0194ddc7b2acdb4e0c35e5e84",
      "google-site-verification": "nfhrXCwuzTQjasCO0xSgZ0BE92C7e45vkEgs1a6AtII",
    },
  },
  metadataBase: new URL("https://alexcarpenter.me"),
  alternates: {
    types: {
      "application/rss+xml": "https://alexcarpenter.me/atom",
    },
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
          "mx-auto flex min-h-[100svh] max-w-prose flex-col bg-page px-4 pb-16 pt-8 font-mono text-primary antialiased",
          jetbrainsMono.variable
        )}
      >
        <Providers>
          <header className="mb-6 flex flex-col">
            <div className="mb-4 ml-auto flex gap-1">
              <abbr
                title="Production"
                className="rounded-sm border border-transparent bg-highlight px-1.5 py-0.5 text-sm text-white no-underline"
              >
                PROD
              </abbr>
              <Link
                href="https://github.com/alexcarpenter/alexcarpenter.me"
                className="rounded-sm border bg-neutral-100 px-1.5 py-0.5 text-sm text-primary dark:bg-neutral-800"
              >
                v2.1.0
              </Link>
            </div>

            <p className="font-semibold text-primary">
              <Link href="/">Alex Carpenter</Link>&nbsp;&not;
            </p>
            <p className="text-secondary">
              Web Engineer at{" "}
              <a
                href="https://watershed.com"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watershed
              </a>
            </p>
          </header>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
