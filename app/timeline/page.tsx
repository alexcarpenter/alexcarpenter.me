import type { Metadata } from "next/types";
import type { Bookmark, Note, Post } from "contentlayer/generated";
import Link from "next/link";
import {
  compareDesc,
  parseDateTimeToString,
  parseDateToString,
} from "@/lib/formatting";
import { allBookmarks, allNotes, allPosts } from "contentlayer/generated";
import { Mdx } from "@/app/mdx";

type EntryType = Bookmark | Note | Post;

const title = "Timeline";
const description = "Short form thoughts and updates";
const ogImage = `https://alexcarpenter.me/og?title=${title}&description=${description}`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `https://alexcarpenter.me/timeline`,
    images: [
      {
        url: ogImage,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function Timeline() {
  const allEntries = [...allBookmarks, ...allNotes, ...allPosts].sort(
    ({ date: a }, { date: b }) => compareDesc(new Date(a), new Date(b))
  );
  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <h1 className="font-variable-semibold text-3xl tracking-tight text-foreground">
            Timeline
          </h1>
          {/* <p className="mt-1 text-lg text-foreground-neutral"></p> */}
        </div>
      </header>

      <section className="mt-16">
        <ul>
          {allEntries.map((entry) => {
            return (
              <li
                key={entry._id}
                className="grid gap-x-16 gap-y-8 border-t py-8 md:grid-cols-4"
              >
                <div className="md:col-span-2">{renderContent(entry)}</div>

                <div className="md:col-start-1 md:row-start-1">
                  <p className="text-foreground-neutral">{renderMeta(entry)}</p>
                  <p className="flex items-center gap-1 text-foreground-neutral">
                    <RightHookArrowIcon /> {entry.type.toLowerCase()}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

function renderMeta(entry: EntryType) {
  switch (entry.type) {
    case "Bookmark":
    case "Post": {
      return parseDateToString(entry.date);
    }
    case "Note": {
      return (
        <Link
          href={`/notes/${entry.slug}`}
          className="transition-colors hover:text-foreground"
        >
          {parseDateTimeToString(entry.date)}
        </Link>
      );
    }
  }
}

function renderContent(entry: EntryType) {
  switch (entry.type) {
    case "Bookmark": {
      return (
        <>
          <h2 className="font-variable-semibold">
            <a
              href={entry.url}
              className="underline decoration-underline transition-colors hover:decoration-inherit"
            >
              {entry.title}
            </a>
            &nbsp;↗
          </h2>
          <p className="mt-1 inline-flex items-center gap-1 text-foreground-neutral">
            <RightHookArrowIcon />
            {entry.hostname}
          </p>
          {entry.body?.raw ? (
            <div className="prose mt-4">
              <Mdx code={entry.body.code} />
            </div>
          ) : null}
        </>
      );
    }
    case "Note": {
      return (
        <div className="prose">
          <Mdx code={entry.body.code} />
        </div>
      );
    }
    case "Post": {
      return (
        <div className="max-w-prose">
          <h2 className="font-variable-semibold">
            <a
              href={`/posts/${entry.slug}`}
              className="underline decoration-underline transition-colors hover:decoration-inherit"
            >
              {entry.title}
            </a>
          </h2>
          {entry.description ? (
            <p className="mt-2 text-foreground-neutral">{entry.description}</p>
          ) : null}
        </div>
      );
    }
    case "Quote": {
      return (
        <figure className="max-w-prose border-l-4 pl-4">
          <blockquote>
            <Mdx code={entry.body.code} />
          </blockquote>
          <figcaption className="mt-4 text-foreground-neutral">
            &mdash; {entry.cite}
          </figcaption>
        </figure>
      );
    }
  }
}

function RightHookArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width=".8em" viewBox="0 0 267 350">
      <path
        d="M932 -786H2525.7036L1892 -154L2044 0L2940 -896L2044 -1792L1892 -1640L2526 -1006H932C688 -1006 490 -1205 490 -1450C490 -1693 689 -1892 932 -1892H1034V-2112H932C567 -2112 270 -1815 270 -1450C270 -1084 567 -786 932 -786Z"
        transform="translate(-27 281.6) scale(0.1)"
        fill="currentColor"
      />
    </svg>
  );
}
