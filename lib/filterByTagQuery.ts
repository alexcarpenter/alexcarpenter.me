import { useRouter } from 'next/router';

const filterByTagQuery = (arr) => {
  const router = useRouter();
  const tag = router.query.tagged;
  return arr.filter((x) => {
    if (!tag) {
      return x;
    } else {
      return x.tags.map((c) => c.toLowerCase()).includes(tag);
    }
  });
};

export default filterByTagQuery;
