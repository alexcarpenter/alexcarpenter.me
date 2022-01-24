import clsx from "clsx";
import slugify from "@sindresorhus/slugify";
export { slugify, clsx as cx };

export const isInternalLink = (url: string) => {
  if (url.startsWith("/") || url.startsWith("#")) {
    return true;
  }
  return false;
};

export const groupByYear = <
  T extends {
    date: string;
  }
>(
  arr: Array<T>
) =>
  arr.reduce((acc, current) => {
    const year = new Date(current.date).getFullYear().toString();
    if (acc[year] != undefined) {
      acc[year].push(current);
    } else {
      acc[year] = [current];
    }

    return acc;
  }, {} as Record<string, Array<T>>);

export const getHostname = (url: string) => {
  let hostname;
  try {
    hostname = new URL(url).hostname;
  } catch (error) {
    throw new Error("Invalid url");
  }
  return hostname;
};

export const formatDate = (
  date: string,
  format: "short" | "long" | "full" = "short"
) => {
  const formats: { [key: string]: any } = {
    short: {
      month: "numeric",
      day: "numeric",
    },
    long: {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
    full: {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    },
  };
  let options = formats[format];
  options.timeZone = "UTC";
  return new Date(date).toLocaleDateString("en-us", options);
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
