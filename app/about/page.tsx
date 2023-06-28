import type { Metadata } from "next/types";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Husband, father, serial hobbyist",
};

const sidebar: [string, React.ReactNode][] = [
  ["Current location", "Grand Rapids, MI."],
  ["Hometown", "Lowell, MI."],
  [
    "Top bookmarks",
    <>
      <a href="https://thestrategist.com">thestrategist.com</a>,{" "}
      <a href="https://github.com">github.com</a>,{" "}
      <a href="https://siteinspire.com">siteinspire.com</a>
    </>,
  ],
  ["Top apps", "Visual Studio Code, iTerm 2, iA Writer, Todoist"],
  [
    "Inspration",
    <>
      <a href="https://berkleygraphics.com">berkleygraphics.com</a>,{" "}
      <a href="https://www.instagram.com/whr/">whr.institute</a>
    </>,
  ],
];

const content: React.ReactNode = (
  <>
    <p className="text-lg">
      Hey there, my name is Alex Carpenter. I live in Grand Rapids, Michigan
      with my wife Stacey, my son Micah, and our mini dachshund Frankie.
    </p>
    <p>
      I grew up in a small farming town where my parents owned a feed mill in
      the middle of town. I spent most of my my childhood and early adult years
      working there. I think it was given that I would some day take over the
      family business; not something I was really interested in doing though.
    </p>
    <p>
      Unfortunately, fortunately? the business shut down due to the economy. I
      was forced to find what I actually wanted to do with my life.
    </p>
    <p>
      During that time I was making videos for local area businesses. I
      eventually needed a website for the work that I was producing. I got my
      feet wet tweaking tumblr themes.
    </p>
  </>
);

export default function Posts() {
  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <h1 className="font-variable-semibold text-3xl tracking-tight text-foreground">
            About
          </h1>
          <p className="mt-1 text-lg text-foreground-neutral">
            Husband, father, serial hobbyist
          </p>
        </div>
      </header>

      <section className="mt-8 border-t pt-8">
        <div className="grid gap-x-16 gap-y-8 md:grid-cols-4">
          <div className="md:col-span-2 md:col-start-2">
            <div className="float-right mb-8 ml-8 w-1/3">
              <Image
                className="rounded-md"
                src="/images/me-and-micah.jpeg"
                width={1200}
                height={1600}
                alt="Alex holding son Micah in his car seat while holding a coffee in hand"
              />
            </div>

            <div className="prose">{content}</div>
          </div>

          <aside className="md:col-start-1 md:row-start-1">
            <dl className="space-y-4">
              {sidebar.map(([title, description]) => {
                return (
                  <div key={title}>
                    <dt className="font-variable-semibold">{title}</dt>
                    <dd className="text-foreground-neutral">{description}</dd>
                  </div>
                );
              })}
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
