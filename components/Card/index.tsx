function Card({ children, highlight = false }) {
  return (
    <div
      className={`relative flex flex-col p-4 rounded-md bg-white border shadow-sm ${
        highlight ? "border-blue" : "border-gray-200"
      }`}
    >
      {children}
    </div>
  );
}

function Eyebrow({ as: Component = "h2", children }) {
  return (
    <Component className='mb-1 text-gray-600 text-sm uppercase tracking-wider'>
      {children}
    </Component>
  );
}

function Title({ children, size = "xl" }) {
  return <h2 className={`text-${size} font-bold`}>{children}</h2>;
}

function Stat({ children }) {
  return <p className='text-4xl font-bold'>{children}</p>;
}

function Description({ children, italic = false }) {
  return (
    <p className={`mt-2 text-gray-600${italic ? " italic" : ""}`}>{children}</p>
  );
}

function Tags({ items }) {
  if (!items) return null;
  return (
    <div className='mt-auto pt-2'>
      {items
        .map((t) => (
          <span className='text-gray-600 text-sm font-mono'>#{t}</span>
        ))
        .reduce((prev, curr) => [prev, ", ", curr])}
    </div>
  );
}

Card.Eyebrow = Eyebrow;
Card.Title = Title;
Card.Stat = Stat;
Card.Description = Description;
Card.Tags = Tags;

export default Card;
