import { format, parseISO, compareDesc } from "date-fns";
import slug from "slugify";

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

export { compareDesc };
