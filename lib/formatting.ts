import { format, parseISO, compareDesc } from "date-fns";
import slug from "slugify";

export const parseDateToString = (date: string): string => {
  return format(parseISO(date), "MM/dd/yyyy");
};

export const parseDateTimeToString = (date: string): string => {
  return format(parseISO(date), "MM/dd/yyyy, h:mm a");
};

export const formatTags = (arr: string[]): string => {
  return new Intl.ListFormat("en", { type: "conjunction" }).format(arr);
};

export const formatCommaSeperatedList = (arr: string[]): string => {
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
