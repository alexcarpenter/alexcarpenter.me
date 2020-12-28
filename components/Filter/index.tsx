import Link from 'next/link';
import { useRouter } from 'next/router';

interface FilterProps {
  tags: string[];
}

export default function Filter({ tags }: FilterProps) {
  const router = useRouter();
  let pathname = router.pathname;
  let activeTag = router.query.tagged;
  return (
    <ul className="flex mb-8 space-x-2">
      <li>
        <Link
          href={{
            pathname,
          }}
          scroll={false}
        >
          <a
            data-cy="filter"
            className={`${
              !activeTag ? 'bg-gray-600 text-white' : 'bg-gray-200'
            } bg-gray-200 hover:bg-gray-600 hover:text-white py-1 px-2 text-sm rounded-lg transition-colors`}
          >
            All
          </a>
        </Link>
      </li>
      {tags.map((tag) => (
        <li key={tag}>
          <Link
            href={{
              pathname,
              query: { tagged: tag.toLowerCase() },
            }}
            scroll={false}
          >
            <a
              data-cy="filter"
              className={`${
                activeTag === tag.toLowerCase()
                  ? 'bg-gray-600 text-white'
                  : 'bg-gray-200'
              } bg-gray-200 hover:bg-gray-600 hover:text-white py-1 px-2 text-sm rounded-lg transition-colors`}
            >
              {tag}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
