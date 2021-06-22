export default function Badge({ children }) {
  return (
    <span className="inline-block text-sm py-0.5 px-2.5 rounded-full border bg-white bg-opacity-10 border-white border-opacity-10">
      {children}
    </span>
  );
}
