import type { Metadata } from "next/types";
import { allPosts } from "@/.contentlayer/generated";
import { compareDesc, parseDateToString } from "@/lib/formatting";

export const metadata: Metadata = {
  title: "Posts",
  description: "Strong opinions, loosely held",
};

export default function Posts() {
  const sortedPosts = allPosts.sort(({ date: a }, { date: b }) =>
    compareDesc(new Date(a), new Date(b))
  );
  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <h1 className="font-variable-semibold text-3xl tracking-tight text-foreground">
            Posts
          </h1>
          <p className="mt-1 text-lg text-foreground-neutral">
            Strong opinions, loosely held
          </p>
        </div>
      </header>

      <section className="mt-16">
        <ul>
          {sortedPosts.map(({ _id, title, description, slug, date }) => {
            return (
              <li
                key={_id}
                className="grid gap-x-16 gap-y-2 border-t py-8 md:grid-cols-4"
              >
                <div>
                  <time
                    className="text-sm text-foreground-neutral"
                    dateTime={date}
                  >
                    {parseDateToString(date)}
                  </time>
                </div>
                <div className="md:col-span-2 md:col-start-2">
                  <h2 className="font-variable-semibold">
                    <a
                      href={`/posts/${slug}`}
                      className="underline decoration-underline transition-colors hover:decoration-inherit"
                    >
                      {title}
                    </a>
                  </h2>
                  {description ? (
                    <p className="mt-2 text-foreground-neutral">
                      {description}
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
