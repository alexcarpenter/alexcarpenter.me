import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { cx } from "@/app/utils";
import { Analytics } from "./analytics";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
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
          "mx-auto max-w-xl px-4 py-16 font-mono text-gray-900 antialiased",
          jetbrainsMono.variable
        )}
      >
        <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-semibold">
              <Link href="/">Alex Carpenter</Link>&nbsp;&not;
            </p>
            <p className="text-gray-500">
              Web engineer at{" "}
              <a href="https://watershed.com" className="underline">
                Watershed
              </a>
            </p>
          </div>

          <div>
            <p className="flex gap-3 text-gray-500">
              <a
                href="https://github.com/alexcarpenter"
                className="grid place-items-center"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://twitter.com/hybrid_alex"
                className="grid place-items-center"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/imalexcarpenter"
                className="grid place-items-center"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </p>
          </div>
        </header>
        <main id="main">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
