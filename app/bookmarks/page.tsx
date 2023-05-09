import type { Metadata } from "next/types";
import { parseDateToString, compareDesc } from "@/lib/formatting";
import { allBookmarks } from "@/.contentlayer/generated";
import { Mdx } from "../mdx";

export const metadata: Metadata = {
  title: "Bookmarks",
  description: "Saving for later",
};

export default function Bookmarks() {
  const sortedBookmarks = allBookmarks.sort(({ date: a }, { date: b }) =>
    compareDesc(new Date(a), new Date(b))
  );
  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <h1 className="font-variable-semibold text-3xl tracking-tight text-foreground">
            Bookmarks
          </h1>
          <p className="mt-1 text-lg text-foreground-neutral">
            Saving for later
          </p>
        </div>
      </header>

      <section className="mt-16">
        <ul>
          {sortedBookmarks.map(({ _id, url, title, body, date }) => {
            return (
              <li
                key={_id}
                className="grid gap-x-16 gap-y-2 border-t py-8 md:grid-cols-4"
              >
                <div className="md:col-span-2 md:col-start-2">
                  <p className="mb-1 text-sm text-foreground-neutral">
                    {new URL(url).hostname}
                  </p>
                  <h2 className="font-variable-semibold">
                    <a
                      href={url}
                      className="underline decoration-underline transition-colors hover:decoration-inherit"
                    >
                      {title}
                    </a>{" "}
                    ↗
                  </h2>
                  {body ? (
                    <div className="prose mt-4">
                      <Mdx code={body.code} />
                    </div>
                  ) : null}
                </div>

                <div className="md:col-start-1 md:row-start-1">
                  <time
                    className="text-sm text-foreground-neutral"
                    dateTime={date}
                  >
                    {parseDateToString(date)}
                  </time>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
