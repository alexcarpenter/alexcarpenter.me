"use client";
import type { Recommendation } from "@/.contentlayer/generated";
import { cx } from "@/lib/classnames";
import { useToggle } from "@/hooks/use-toggle";

export function Recommendations({
  recommendations,
}: {
  recommendations: Recommendation[];
}) {
  const [viewAll, toggleViewAll] = useToggle();
  const [groupOne, groupTwo] = partition(
    (r) => recommendations.indexOf(r) < 4,
    recommendations
  );
  return (
    <>
      <ul className="mt-8">
        {groupOne.map(({ _id, name, text, title, company }) => {
          return (
            <li
              key={_id}
              className="grid gap-x-16 gap-y-2 border-t py-8 md:grid-cols-4"
            >
              <div>
                <h3 className="font-variable-semibold">{name}</h3>
              </div>

              <div className="col-span-2">
                <p className="max-w-prose">“{text}”</p>
              </div>

              <div>
                <p className="text-sm text-foreground-neutral">{title}</p>
                <p className="text-sm text-foreground-neutral">{company}</p>
              </div>
            </li>
          );
        })}

        {groupTwo.map(({ _id, name, text, title, company }) => {
          return (
            <li
              key={_id}
              className={cx(
                "grid gap-x-16 gap-y-2 border-t py-8 md:grid-cols-4",
                !viewAll && "hidden"
              )}
              hidden={viewAll ? false : true}
            >
              <div>
                <h3 className="font-variable-semibold">{name}</h3>
              </div>

              <div className="col-span-2">
                <p className="max-w-prose">“{text}”</p>
              </div>

              <div>
                <p className="text-sm text-foreground-neutral">{title}</p>
                <p className="text-sm text-foreground-neutral">{company}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="grid gap-16 md:grid-cols-4">
        <div className="md:col-start-2">
          <button
            type="button"
            onClick={toggleViewAll}
            aria-expanded={viewAll ? "true" : "false"}
            aria-controls={groupTwo.map((r) => r._id).toString()}
          >
            View{" "}
            {viewAll ? "less" : `(${groupTwo.length}) more recommendations`}
          </button>
        </div>
      </div>
    </>
  );
}

function partition<T>(
  predicate: (val: T) => boolean,
  arr: Array<T>
): [Array<T>, Array<T>] {
  const partitioned: [Array<T>, Array<T>] = [[], []];
  arr.forEach((val: T) => {
    const partitionIndex: 0 | 1 = predicate(val) ? 0 : 1;
    partitioned[partitionIndex].push(val);
  });
  return partitioned;
}
