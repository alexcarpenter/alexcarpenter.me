import type { Metadata } from "next/types";
import { parseDateTimeToString } from "@/lib/formatting";

export const metadata: Metadata = {
  title: "Colophon",
};

const inspiration = [
  "https://berkeleygraphics.com/",
  "https://chasem.co/",
  "https://frankchimero.com/",
  "https://hamishsmyth.com/",
  "https://hunterjennings.dev/",
  "https://joebell.co.uk/",
  "https://linusrogge.com/",
  "https://paco.me/",
  "https://rauno.me/",
  "https://sdrn.co/",
  "https://sj.land/",
];

export default function Posts() {
  const lastUpdated = parseDateTimeToString(new Date().toISOString());
  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <h1 className="font-variable-semibold text-3xl tracking-tight text-foreground">
            Colophon
          </h1>
          {/* <p className="mt-1 text-lg text-foreground-neutral">
            Perpetually work-in-progress
          </p> */}
          {/* <a
            href="https://github.com/alexcarpenter/alexcarpenter-next"
            className="mt-1 block w-max text-lg text-foreground-neutral"
          >
            View source on GitHub <span aria-hidden="true">↗</span>
          </a> */}
          <div className="mt-4 space-y-4">
            <p className="text-sm text-foreground-neutral">
              Last updated: <br />
              {lastUpdated}
            </p>
            <p className="text-sm text-foreground-neutral">
              View source: <br />
              <a
                href="https://github.com/alexcarpenter/alexcarpenter-next"
                className="transition-colors hover:text-foreground"
              >
                alexcarpenter/alexcarpenter-next{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </p>
          </div>
        </div>
      </header>

      <section className="mt-16">
        <header className="grid gap-16 md:grid-cols-4">
          <div className="md:col-span-2 md:col-start-2">
            <h2 className="font-variable-semibold text-lg">
              Tech stack <span aria-hidden="true">¬</span>
            </h2>
          </div>
        </header>

        <ul className="mt-8">
          <li className="grid gap-x-16 gap-y-2 border-t py-8 md:grid-cols-4">
            <div className="">
              <h2 className="font-variable-semibold">Next.js</h2>
            </div>

            <div className="col-span-2">
              <p>Framework... WIP</p>
            </div>

            <div>
              <a
                href="https://nextjs.org/"
                className="text-foreground-neutral transition-colors hover:text-foreground"
              >
                Vist <span aria-hidden="true">↗</span>
              </a>
            </div>
          </li>

          <li className="grid gap-x-16 gap-y-2 border-t py-8 md:grid-cols-4">
            <div className="">
              <h2 className="font-variable-semibold">Tailwind CSS</h2>
            </div>

            <div className="col-span-2">
              <p>Styling... WIP</p>
            </div>

            <div>
              <a
                href="https://tailwindcss.com/"
                className="text-foreground-neutral transition-colors hover:text-foreground"
              >
                Vist <span aria-hidden="true">↗</span>
              </a>
            </div>
          </li>

          <li className="grid gap-x-16 gap-y-2 border-t py-8 md:grid-cols-4">
            <div className="">
              <h2 className="font-variable-semibold">Framer Motion</h2>
            </div>

            <div className="col-span-2">
              <p>Animation... WIP</p>
            </div>

            <div>
              <a
                href="https://www.framer.com/motion/"
                className="text-foreground-neutral transition-colors hover:text-foreground"
              >
                Vist <span aria-hidden="true">↗</span>
              </a>
            </div>
          </li>

          <li className="grid gap-x-16 gap-y-2 border-t py-8 md:grid-cols-4">
            <div className="">
              <h2 className="font-variable-semibold">Contentlayer</h2>
            </div>

            <div className="col-span-2">
              <p>Data... WIP</p>
            </div>

            <div>
              <a
                href="https://www.contentlayer.dev/"
                className="text-foreground-neutral transition-colors hover:text-foreground"
              >
                Vist <span aria-hidden="true">↗</span>
              </a>
            </div>
          </li>
        </ul>
      </section>

      <section className="mt-16">
        <header className="grid gap-16 md:grid-cols-4">
          <div className="md:col-span-2 md:col-start-2">
            <h2 className="font-variable-semibold text-lg">
              Inspiration <span aria-hidden="true">¬</span>
            </h2>
          </div>
        </header>

        <div className="mt-8 grid gap-16 md:grid-cols-4">
          <div className="md:col-span-2 md:col-start-2">
            <ul className="space-y-1 sm:columns-2 sm:gap-16 sm:space-y-0">
              {inspiration.map((url) => {
                return (
                  <li key={url}>
                    <span className="text-foreground-neutral" role="none">
                      ⁕
                    </span>
                    &nbsp;
                    <a
                      href={url}
                      className="underline decoration-underline transition-colors hover:decoration-inherit"
                    >
                      {new URL(url).hostname}
                    </a>
                  </li>
                );
              })}
            </ul>
            {/* {inspiration.map((url, index) => {
              return (
                <Fragment key={url}>
                  <a
                    href={url}
                    className="underline decoration-underline hover:decoration-inherit"
                  >
                    {new URL(url).hostname}
                  </a>
                  {index !== inspiration.length - 1 ? (
                    <>
                      &nbsp;
                      <span className="text-foreground-neutral" role="none">
                        ⁕
                      </span>{" "}
                    </>
                  ) : null}
                </Fragment>
              );
            })} */}
          </div>
        </div>
      </section>
    </>
  );
}
