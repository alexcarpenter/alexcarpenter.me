import * as React from 'react';
import Badge from '@/components/Badge';

interface TagsProps {
  items: Array<string>;
}

export default function Tags({ items }: TagsProps) {
  const [showMore, setShowMore] = React.useState(false);

  const Component = ({ children }) => (
    <ul className="flex flex-wrap mt-4 gap-2" aria-label="Tags">
      {children}
    </ul>
  );

  if (items.length > 3 && !showMore) {
    return (
      <Component>
        {items.slice(0, 2).map((tag) => (
          <li key={tag}>
            <Badge key={tag} href={`/tagged/${tag}`}>{`#${tag}`}</Badge>
          </li>
        ))}
        <li>
          <button className="text-sm" onClick={() => setShowMore(true)}>
            more...
          </button>
        </li>
      </Component>
    );
  }

  return (
    <Component>
      {items.map((tag) => (
        <li key={tag}>
          <Badge key={tag} href={`/tagged/${tag}`}>{`#${tag}`}</Badge>
        </li>
      ))}
    </Component>
  );
}
