import * as React from 'react';
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
    full: {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
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

export const isInternalUrl = (url) =>
  url.startsWith('/') || url.startsWith('#');

export const isElement = (element) => {
  return React.isValidElement(element);
};

export const isDOMTypeElement = (element) => {
  return isElement(element) && typeof element.type === 'string';
};
