import type { Metadata } from "next/types";
import type { Activity, Bookmark, Post } from "@/.contentlayer/generated";
import Link from "next/link";
import {
  compareDesc,
  parseDateTimeToString,
  parseDateToString,
} from "@/lib/formatting";
import {
  allActivities,
  allBookmarks,
  allPosts,
} from "@/.contentlayer/generated";
import { Mdx } from "@/app/mdx";

type EntryType = Activity | Bookmark | Post;

export const metadata: Metadata = {
  title: "Timeline",
  description: "Short form thoughts and updates",
};

export default function Timeline() {
  const allEntries = [...allActivities, ...allBookmarks, ...allPosts].sort(
    ({ date: a }, { date: b }) => compareDesc(new Date(a), new Date(b))
  );
  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <h1 className="font-variable-semibold text-3xl tracking-tight text-foreground">
            Timeline
          </h1>
          {/* <p className="mt-1 text-lg text-foreground-neutral">
            Short form thoughts and updates
          </p> */}
        </div>
      </header>

      <section className="mt-16">
        <ul>
          {allEntries.map((entry) => {
            return (
              <li
                key={entry._id}
                className="grid gap-x-16 gap-y-2 border-t py-8 md:grid-cols-4"
              >
                <div>
                  {RenderMeta(entry)}
                  <p className="flex items-center gap-1 text-sm text-foreground-neutral">
                    <RightHookArrowIcon /> {entry.type.toLowerCase()}
                  </p>
                </div>

                <div className="md:col-span-2 md:col-start-2">
                  {RenderContent(entry)}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

function RenderMeta(entry: EntryType) {
  switch (entry.type) {
    case "Activity": {
      return (
        <Link href={`/activity/${entry.slug}`}>
          <time
            className="text-sm text-foreground-neutral"
            dateTime={entry.date}
          >
            {parseDateTimeToString(entry.date)}
          </time>
        </Link>
      );
    }
    case "Bookmark":
    case "Post": {
      return (
        <p className="text-sm text-foreground-neutral">
          {parseDateToString(entry.date)}
        </p>
      );
    }
  }
}

function RenderContent(entry: EntryType) {
  switch (entry.type) {
    case "Activity": {
      return (
        <div className="prose">
          <Mdx code={entry.body.code} />
        </div>
      );
    }
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
          <p className="mt-1 inline-flex items-center gap-1 text-sm text-foreground-neutral">
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
    case "Post": {
      return (
        <>
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
        </>
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
