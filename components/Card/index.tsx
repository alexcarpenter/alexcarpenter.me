import Image, { ImageProps } from 'next/image';
function Card({
  children,
  highlight = false,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col flex-grow p-4 rounded-md bg-white border shadow-sm overflow-hidden ${
        highlight ? 'border-blue' : 'border-gray-200'
      }`}
    >
      {children}
    </div>
  );
}

const Media = ({
  color,
  ...props
}: {
  color: string;
} & ImageProps) => {
  return (
    <div
      className="flex items-end justify-end pt-4 pl-4 mb-4 -mx-4 -mt-4 bg-black rounded-md rounded-b-none"
      style={{ backgroundColor: color }}
    >
      <Image className="w-full rounded-tl-md" {...props} />
    </div>
  );
};

function Eyebrow({
  as: Component = 'h2',
  children,
}: {
  as?: any;
  children: React.ReactNode;
}) {
  return (
    <Component className="mb-1 text-sm tracking-wider text-gray-600 uppercase">
      {children}
    </Component>
  );
}

function Title({ children }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}

function Stat({ children }) {
  return <p className="text-4xl font-bold">{children}</p>;
}

function Description({ children }: { children: React.ReactNode }) {
  return <p className={`mt-2 text-gray-600`}>{children}</p>;
}

function Tags({ items }: { items: string[] }) {
  if (!items.length) return;

  return (
    <div className="pt-2 mt-auto font-mono text-sm text-gray-600">
      {items.map((i) => `#${i}`).join(', ')}
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
