import type { Metadata } from "next/types";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Husband, father, serial hobbyist",
};

const sidebar: [string, React.ReactNode][] = [
  ["Current location", "Grand Rapids, MI."],
  ["Hometown", "Lowell, MI."],
  ["Top bookmarks", "thestrategist.com, github.com, siteinspire.com"],
  ["Top apps", "Visual Studio Code, iTerm 2, iA Writer, Todoist"],
  ["Inspration", "berkleygraphics.com"],
];

const content: React.ReactNode = (
  <>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa quasi
      eum, sapiente rerum vel ducimus non, eligendi veritatis provident
      inventore quae aspernatur odit itaque placeat, at cupiditate impedit
      architecto!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa quasi
      eum, sapiente rerum vel ducimus non, eligendi veritatis provident
      inventore quae aspernatur odit itaque placeat, at cupiditate impedit
      architecto!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa quasi
      eum, sapiente rerum vel ducimus non, eligendi veritatis provident
      inventore quae aspernatur odit itaque placeat, at cupiditate impedit
      architecto!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa quasi
      eum, sapiente rerum vel ducimus non, eligendi veritatis provident
      inventore quae aspernatur odit itaque placeat, at cupiditate impedit
      architecto!
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
        <div className="grid gap-16 md:grid-cols-4">
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
