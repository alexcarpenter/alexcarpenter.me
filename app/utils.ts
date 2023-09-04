import { format, parseISO } from "date-fns";
import slug from "slugify";
export { cx, cva, type VariantProps } from "class-variance-authority";
export { onlyText } from "react-children-utilities";
import { allDocuments, type DocumentTypes } from "contentlayer/generated";

export const parseDateToString = (date: string): string => {
  return format(parseISO(date), "yyyy-MM-dd");
};

export const formatTags = (arr: string[]): string => {
  return new Intl.ListFormat("en", { type: "conjunction" }).format(arr);
};

export const slugify = (
  string: string,
  options?: {
    replacement?: string;
    remove?: RegExp;
    lower?: boolean;
    strict?: boolean;
    locale?: string;
    trim?: boolean;
  }
): string => slug(string, { lower: true, ...options });

export const getBacklinksBySlug = (slug: string) => {
  const backlinks = allDocuments.filter((doc) => {
    return doc.body.raw.includes(`(/${slug})`);
  }) as DocumentTypes[];

  return backlinks.map(({ title, slug }) => ({
    title,
    slug,
  }));
};
