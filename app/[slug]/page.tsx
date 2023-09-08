import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Mdx } from "@/components/mdx";
import { allPages } from "contentlayer/generated";
import { getBacklinksBySlug } from "@/app/utils";

const customPageSlugs = ["us-coffee-roasters"];

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(params: PageProps["params"]) {
  const page = allPages
    .filter((page) => !customPageSlugs.includes(page.slug))
    .find((page) => page.slug === params.slug);

  if (!page) {
    null;
  }

  const backlinks = getBacklinksBySlug(params.slug);

  return { ...page, backlinks };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPostFromParams(params);

  if (!page) {
    return {};
  }

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

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPages
    .filter((page) => !customPageSlugs.includes(page.slug))
    .map(({ slug }) => ({
      slug,
    }));
}

export default async function Page({ params }: PageProps) {
  const page = await getPostFromParams(params);

  if (!page.slug) {
    notFound();
  }

  return (
    <>
      <main id="main" className="flex flex-1 flex-col">
        <header className="mb-6 border-b-2 pb-2">
          <h1 className="font-semibold">{page.title}</h1>
          {page.description ? (
            <p className="text-secondary">{page.description}</p>
          ) : null}
        </header>

        <div className="prose">
          {page.body ? <Mdx code={page.body.code} /> : null}
        </div>
      </main>

      <footer className="relative mt-8 border-t-2 pt-3">
        <h2 className="font-semibold">Linked mentions</h2>
        {page.backlinks.length > 0 ? (
          <ul className="my-3 list-disc space-y-1 pl-6">
            {page.backlinks.map(({ title, slug }) => {
              return (
                <li key={slug}>
                  <Link className="underline" href={`/${slug}`}>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-secondary">No backlinks found</p>
        )}
      </footer>
    </>
  );
}
