function Stack({ children, grid = false }) {
  return (
    <div className={`grid gap-4 grid-cols-1${grid && " sm:grid-cols-2"}`}>
      {children}
    </div>
  );
}

function Item({ children, offset = false }) {
  return <div className={`flex flex-col flex-grow${offset ? ' col-start-2' : ''}`}>{children}</div>;
}

Stack.Item = Item;

export default Stack;
