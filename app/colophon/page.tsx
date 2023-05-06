import type { Metadata } from "next/types";
import { Fragment } from "react";

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
  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <h1 className="font-variable-semibold text-3xl tracking-tight text-foreground">
            Colophon
          </h1>
          <a
            href="https://github.com/alexcarpenter/alexcarpenter-next-tailwind"
            className="mt-1 block w-max text-lg text-foreground-neutral"
          >
            View source on GitHub <span aria-hidden="true">↗</span>
          </a>
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
              <a href="https://nextjs.org/" className="text-foreground-neutral">
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
                className="text-foreground-neutral"
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
                className="text-foreground-neutral"
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
                className="text-foreground-neutral"
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
            {inspiration.map((url, index) => {
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
            })}
          </div>
        </div>
      </section>
    </>
  );
}
