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
          {sortedBookmarks.map(({ _id, url, title, body, date, hostname }) => {
            return (
              <li
                key={_id}
                className="grid gap-x-16 gap-y-2 border-t py-8 md:grid-cols-4"
              >
                <div className="md:col-span-2 md:col-start-2">
                  <h2 className="font-variable-semibold">
                    <a
                      href={url}
                      className="underline decoration-underline transition-colors hover:decoration-inherit"
                    >
                      {title}
                    </a>{" "}
                    ↗
                  </h2>
                  <p className="mt-1 inline-flex items-center gap-1 text-sm text-foreground-neutral">
                    <RightHookArrowIcon />
                    {hostname}
                  </p>
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
