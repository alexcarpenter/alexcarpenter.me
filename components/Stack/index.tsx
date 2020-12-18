function Stack({ children, grid = false }) {
  return (
    <div className={`grid gap-4 grid-cols-1${grid && " sm:grid-cols-2"}`}>
      {children}
    </div>
  );
}

function Item({ children, className = '' }) {
  return <div className={`flex flex-col flex-grow ${className}`}>{children}</div>;
}

Stack.Item = Item;

export default Stack;
