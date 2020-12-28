// @ts-nocheck
const sortByDate = (arr) =>
  arr.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

export default sortByDate;
