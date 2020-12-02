function Card({ children, highlight = false }) {
  return (
    <div className={`relative flex flex-col p-4 rounded-md bg-white border shadow-sm ${highlight ? 'border-blue' : 'border-gray-200'}`}>
      {children}
    </div>
  )
}

function Eyebrow({ children }) {
  return <h2 className="text-gray-600 uppercase tracking-wide">{children}</h2>
}

function Title({ children }) {
  return (
    <h2 className='text-xl font-bold'>
      {children}
    </h2>
  );
}

function Stat({ children }) {
  return <p className="text-4xl font-bold">{children}</p>
}

function Description({ children, italic = false }) {
  return <p className={`mt-2 text-gray-600${italic ? ' italic' : ''}`}>{children}</p>;
}

Card.Eyebrow = Eyebrow;
Card.Title = Title;
Card.Stat = Stat;
Card.Description = Description;

export default Card;
