// @ts-nocheck
const filterByTag = (arr, str) =>
  arr.filter((x) => {
    if (!str) {
      return x;
    } else {
      return x.tags.map((c) => c.toLowerCase()).includes(str);
    }
  });

export default filterByTag;
