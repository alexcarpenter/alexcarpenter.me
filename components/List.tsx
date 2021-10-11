function List({ children }) {
  return (
    <ul className="list-none pl-0 -my-12 divide-y divide-white divide-opacity-[.15]">
      {children}
    </ul>
  );
}

function ListItem({ children }) {
  return <li className="py-12">{children}</li>;
}

List.Item = ListItem;

export default List;
