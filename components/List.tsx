function List({ children }) {
  return (
    <ul className="list-none pl-0 -my-8 divide-y divide-white divide-opacity-10">
      {children}
    </ul>
  );
}

function ListItem({ children }) {
  return <li className="py-8">{children}</li>;
}

List.Item = ListItem;

export default List;
