import * as React from "react";
import * as R from "remeda";
import roasters from "./roasters.json";
import { Note } from "@/components/note";

const page = {
  slug: "/us-coffee-roasters",
  title: "US coffee roasters",
  description: "Crowd-sourced list of US coffee roasters",
};

export async function generateMetadata() {
  const { slug, title, description } = page;

  return {
    title: title,
    description: description,
    openGraph: {
      title,
      description,
      url: `https://alexcarpenter.me/${slug}`,
    },
    twitter: {
      title,
      description,
      card: "summary",
    },
  };
}

export default function Roasters() {
  const roastersByState = R.pipe(
    roasters,
    R.sortBy(({ state }) => state),
    R.groupBy(({ state }) => state)
  );
  return (
    <>
      <header className="mb-6 border-b-2 pb-2">
        <h1 className="font-semibold">{page.title}</h1>
        {page.description ? (
          <p className="text-secondary">{page.description}</p>
        ) : null}
      </header>

      <div className="prose">
        <dl className="mb-6">
          {Object.keys(roastersByState).map((state) => {
            const _roasters = roastersByState[state];
            return (
              <React.Fragment key={state}>
                <dt>{state}</dt>
                <dd>
                  <ul>
                    {_roasters.map(({ name, address, website }) => {
                      return (
                        <li key={website}>
                          <p>
                            <a
                              href={`https://${website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {name}
                            </a>
                          </p>
                          <p>
                            <small>{address}</small>
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </dd>
              </React.Fragment>
            );
          })}
        </dl>

        <Note label="Submit a roaster">
          This list is open source on{" "}
          <a
            href="https://github.com/alexcarpenter/alexcarpenter.me"
            target="_blank"
          >
            GitHub
          </a>
          . If you don&apos;t see a roaster you know of on the list, feel free
          to open a{" "}
          <a
            href="https://github.com/alexcarpenter/alexcarpenter.me/edit/main/app/us-coffee-roasters/roasters.json"
            rel="noopener noreferrer"
          >
            pull request
          </a>
          .
        </Note>
      </div>
    </>
  );
}
