export { clsx as cn } from "clsx";

/**
 * Returns a language-specific formatted string representing the elements of the list.
 *
 * @param {Array} arr The list to format
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
 *
 * @example
 *
 *     const tags = [one, two, three]
 *     formatTags(tags)
 *     // => one, two, and three
 */
export const formatTags = (arr: string[]): string =>
  new Intl.ListFormat("en", { type: "conjunction" }).format(arr);

/**
 * Returns a string with a language-sensitive representation of the date portion of the specified date in the user agent's timezone.
 *
 * @param {Date} date
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
 *
 * @example
 *
 *     formatDate('2022-10-31T00:00:00.000Z')
 *     // => 10/30/2022
 */
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

/**
 * Returns a string with a language-sensitive representation of the date portion of the specified date in the user agent's timezone.
 *
 * @param {Date} date
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
 *
 * @example
 *
 *     formatDate('22-11-14T23:32:00.000Z')
 *     // => 11/14/2022, 6:32 PM
 */
export const formatDateTime = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
  });
};

/**
 * Takes a predicate and a list of values and returns a a tuple (2-item array),
 *  with each item containing the subset of the list that matches the predicate
 *  and the complement of the predicate respectively
 *
 * @sig (T -> Boolean, T[]) -> [T[], T[]]
 *
 * @param {Function} predicate A predicate to determine which side the element belongs to.
 * @param {Array} arr The list to partition
 *
 * Inspired by the Ramda function of the same name
 * @see https://ramdajs.com/docs/#partition
 *
 * @example
 *
 *     const isNegative: (n: number) => boolean = n => n < 0
 *     const numbers = [1, 2, -4, -7, 4, 22]
 *     partition(isNegative, numbers)
 *     // => [ [-4, -7], [1, 2, 4, 22] ]
 */
export function partition<T>(
  predicate: (val: T) => boolean,
  arr: Array<T>
): [Array<T>, Array<T>] {
  const partitioned: [Array<T>, Array<T>] = [[], []];
  arr.forEach((val: T) => {
    const partitionIndex: 0 | 1 = predicate(val) ? 0 : 1;
    partitioned[partitionIndex].push(val);
  });
  return partitioned;
}
