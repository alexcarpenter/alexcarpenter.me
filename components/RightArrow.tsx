export default function RightArrow({
  position,
}: {
  position: 'before' | 'after';
}) {
  const NBSP = '\u00a0';
  return (
    <>
      {position === 'after' && NBSP}
      <span
        role="img"
        aria-hidden="true"
        className="text-gray-300 flex-shrink-0"
      >
        &#8594;
      </span>
      {position === 'before' && NBSP}
    </>
  );
}
