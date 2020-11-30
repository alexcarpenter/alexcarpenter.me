function Header({ children }) {
  return (
    <header className='space-y-3'>
      {children}
    </header>
  );
}

function Title({ children }) {
  return (
    <h1 className='text-4xl font-bold'>
      {children}{" "}
      <span aria-hidden='true' className='text-gray-400'>
        ¬
      </span>
    </h1>
  );
}

function Description({ children }) {
  return <p className='text-2xl text-gray-600'>{children}</p>;
}

Header.Title = Title;
Header.Description = Description;

export default Header;
