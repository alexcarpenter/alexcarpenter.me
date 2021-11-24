export default function Highlights({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => {
        return (
          <li key={index}>
            <mark>{item}</mark>
          </li>
        );
      })}
    </ul>
  );
}
