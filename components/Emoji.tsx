export default function Emoji({ label, children }) {
  return (
    <span role="img" aria-label={label}>
      {children}
    </span>
  );
}
