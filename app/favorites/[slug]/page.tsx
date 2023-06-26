import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "@/app/mdx";
import { parseDateToString } from "@/lib/formatting";
import { allFavorites } from "@/.contentlayer/generated";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(params: PageProps["params"]) {
  const page = allFavorites.find((page) => page.slug === params.slug);

  if (!page) {
    null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPostFromParams(params);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allFavorites.map(({ slug }) => ({
    slug,
  }));
}

export default async function About({ params }: PageProps) {
  const page = await getPostFromParams(params);

  if (!page) {
    notFound();
  }

  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <h1 className="font-variable-semibold text-3xl tracking-tight text-foreground">
            {page.title}
          </h1>
          {page.description ? (
            <p className="mt-1 text-lg text-foreground-neutral">
              {page.description}
            </p>
          ) : null}
        </div>
      </header>

      <section className="mt-8 border-t pt-8">
        <div className="grid gap-8 md:grid-cols-4 md:gap-16">
          {page.updated ? (
            <div>
              <p className="text-foreground-neutral">
                Last updated{" "}
                <a
                  href={`https://github.com/alexcarpenter/alexcarpenter-next/commits/main/content/favorites/${page.slug}.mdx`}
                >
                  <time dateTime={page.updated}>
                    {parseDateToString(page.updated)}
                  </time>
                </a>
              </p>
            </div>
          ) : null}
          <div className="md:col-span-3 md:col-start-2 lg:col-span-2 lg:col-start-2">
            <div className="prose">
              <Mdx code={page.body.code} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
