import Link from "next/link";
import { allPages } from "contentlayer/generated";
import * as R from "remeda";
import { parseDateToString } from "@/app/utils";

export default function Home() {
  const [pinned, latest] = R.pipe(
    allPages,
    R.map(
      R.pick([
        "_id",
        "description",
        "pinned",
        "published",
        "slug",
        "title",
        "updated",
      ])
    ),
    R.sortBy([
      ({ updated, published }) =>
        updated ? new Date(updated) : new Date(published),
      "desc",
    ]),
    R.partition(({ pinned }) => pinned === true)
  );
  return (
    <>
      <h1 className="sr-only">Index</h1>
      {pinned.length > 0 ? (
        <section className="mt-6">
          <h2 className="mb-2 font-semibold">Pinned</h2>
          <ul className="-mb-2 divide-y divide-dashed border-t-2">
            {pinned.map((page) => {
              const date = page.updated || page.published;
              return (
                <li key={page._id} className="flex gap-6 py-2">
                  <time
                    className="flex-shrink-0 text-secondary"
                    dateTime={date}
                  >
                    {parseDateToString(date)}
                  </time>
                  <Link href={`/${page.slug}`} className="underline">
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      <section className="mt-6">
        <h2 className="mb-2 font-semibold">Latest</h2>
        <ul className="-mb-2 divide-y divide-dashed border-t-2">
          {latest.map((page) => {
            const date = page.updated || page.published;
            return (
              <li key={page._id} className="flex gap-6 py-2">
                <time className="flex-shrink-0 text-secondary" dateTime={date}>
                  {parseDateToString(date)}
                </time>
                <Link href={`/${page.slug}`} className="underline">
                  {page.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
