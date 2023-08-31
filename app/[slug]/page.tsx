import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx";
import { allPages } from "contentlayer/generated";

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

  return page;
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

export default async function About({ params }: PageProps) {
  const page = await getPostFromParams(params);

  if (!page) {
    notFound();
  }

  return (
    <>
      <header className="mb-6 border-b-2 pb-2">
        <h1 className="font-semibold">{page.title}</h1>
        {page.description ? (
          <p className="text-secondary">{page.description}</p>
        ) : null}
      </header>

      <div className="prose">
        <Mdx code={page.body.code} />
      </div>
    </>
  );
}
