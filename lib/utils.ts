import clsx from 'clsx';
import slugify from '@sindresorhus/slugify';
export { slugify, clsx as cx };

export const formatDate = (date, format = 'short') => {
  const formats = {
    short: {
      month: 'numeric',
      day: 'numeric',
    },
    long: {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    },
  };
  let options = formats[format];
  options.timeZone = 'UTC';
  return new Date(date).toLocaleDateString('en-us', options);
};

export const widont = (str) => {
  const REGEX = /\s((?=(([^\s<>]|<[^>]*>)+))\2)\s*$/;
  return str.replace(REGEX, '\u00A0$1');
};

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const textPrimary = clsx(['text-gray-800'], ['dark:text-white']);
export const textSecondary = clsx(['text-gray-600'], ['dark:text-gray-300']);
export const borderColor = clsx(['border-gray-200'], ['dark:border-gray-800']);
