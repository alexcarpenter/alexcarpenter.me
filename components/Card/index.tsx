// @ts-nocheck
import Image from "next/image";
function Card({ children, highlight = false }) {
  return (
    <div
      className={`relative flex flex-col flex-grow p-4 rounded-md bg-white border shadow-sm ${
        highlight ? "border-blue" : "border-gray-200"
      }`}
    >
      {children}
    </div>
  );
}

function Media({ color, ...props }) {
  return (
    <div
      className='-mt-4 -mx-4 mb-4 pt-4 pl-4 flex justify-end items-end rounded-md rounded-b-none bg-black'
      style={{ backgroundColor: color }}
    >
      <Image className='rounded-tl-md w-full' {...props} />
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
  if (!items.length) return null;

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

Card.Media = Media;
Card.Eyebrow = Eyebrow;
Card.Title = Title;
Card.Stat = Stat;
Card.Description = Description;
Card.Tags = Tags;

export default Card;
