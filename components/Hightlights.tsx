type HighlightsProps = {
  items: Array<string>;
};

const Highlights = ({ items }: HighlightsProps) => {
  return (
    <ul className="space-y-2 !list-none !pl-0">
      {items.map((item, index) => {
        return (
          <li key={index}>
            <mark>{item}</mark>
          </li>
        );
      })}
    </ul>
  );
};

export default Highlights;
