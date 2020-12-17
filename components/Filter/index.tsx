import Link from "next/link";

export default function Filter({ pathname, tags, activeTag }) {
  return (
    <ul className='flex space-x-2 mb-8'>
      <li>
        <Link
          href={{
            pathname,
          }}
          scroll={false}
        >
          <a
            className={`${
              !activeTag ? "bg-gray-600 text-white" : "bg-gray-200"
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
              className={`${
                activeTag === tag.toLowerCase()
                  ? "bg-gray-600 text-white"
                  : "bg-gray-200"
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
