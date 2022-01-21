import { cx } from '@/lib/utils';
function List({ children }) {
  return (
    <ul
      className={cx(
        'list-none pl-0 -my-12 divide-y',
        ['divide-gray-200'],
        ['dark:divide-gray-700'],
      )}
    >
      {children}
    </ul>
  );
}

function ListItem({ children }) {
  return <li className="py-12">{children}</li>;
}

List.Item = ListItem;

export default List;
