import type { Metadata } from "next/types";
import { parseDateTimeToString, compareDesc } from "@/lib/formatting";
import { allActivities } from "@/.contentlayer/generated";
import { Mdx } from "@/app/mdx";

export const metadata: Metadata = {
  title: "Activity",
  description: "Short form thoughts and updates",
};

export default function Activity() {
  const sortedActivities = allActivities.sort(({ date: a }, { date: b }) =>
    compareDesc(new Date(a), new Date(b))
  );
  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <h1 className="font-variable-semibold text-3xl tracking-tight text-foreground">
            Activity
          </h1>
          <p className="mt-1 text-lg text-foreground-neutral">
            Short form thoughts and updates
          </p>
        </div>
      </header>

      <section className="mt-16">
        <ul>
          {sortedActivities.map(({ _id, date, body }) => {
            return (
              <li
                key={_id}
                className="grid gap-x-16 gap-y-2 border-t py-8 md:grid-cols-4"
              >
                <div className="md:col-span-2 md:col-start-2">
                  <div className="prose">
                    <Mdx code={body.code} />
                  </div>
                </div>

                <div className="md:col-start-1 md:row-start-1">
                  <time
                    className="text-sm text-foreground-neutral"
                    dateTime={date}
                  >
                    {parseDateTimeToString(date)}
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
