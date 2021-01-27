import { matchSorter } from 'match-sorter';
import data from '@/data/search.json';

export default async (req, res) => {
  const query = req.query.q;
  const results = query
    ? matchSorter(data, query, { keys: ['title', 'tags', 'type'] })
    : data;

  return res.status(200).json({
    ...results,
  });
};
