function Card({ children }) {
  return <div className="bg-gray-900 p-4 rounded-md">{children}</div>;
}

function CardTitle({ children }) {
  return <h3 className="text-xl">{children}</h3>;
}

Card.Title = CardTitle;

export default Card;
