import clsx from 'clsx';
import slugify from '@sindresorhus/slugify';
export { slugify, clsx as cx };

// https://gist.github.com/JamieMason/0566f8412af9fe6a1d470aa1e089a752
export const groupBy = <T extends Record<string, any>, K extends keyof T>(
  array: T[],
  key: K | { (obj: T): string },
): Record<string, T[]> => {
  const keyFn = key instanceof Function ? key : (obj: T) => obj[key];
  return array.reduce((objectsByKeyValue, obj) => {
    const value = keyFn(obj);
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {} as Record<string, T[]>);
};

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

export const breakpoints = [null, 'sm', 'md', 'lg', 'xl', '2xl'];

export const mapResponsiveValues = (values, postfix) => {
  return values.map((value, index) => {
    if (!value) return;
    return index > 0
      ? `${breakpoints[index]}:${postfix}-${value}`
      : `${postfix}-${value}`;
  });
};
