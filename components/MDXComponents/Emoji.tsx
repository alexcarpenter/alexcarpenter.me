export default function Emoji({ label, symbol }) {
  return (
    <span role="img" aria-label={label}>
      {symbol}
    </span>
  );
}
