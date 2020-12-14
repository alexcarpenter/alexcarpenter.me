function Grid({ children }) {
  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2'>{children}</div>
  );
}

function Item({ children }) {
  return <div>{children}</div>;
}

Grid.Item = Item;

export default Grid;
