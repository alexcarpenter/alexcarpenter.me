export default function Badge({ children }) {
  return (
    <span className="inline-block text-sm py-0.5 px-2.5 rounded-full border bg-gray-800 border-white border-opacity-10">
      {children}
    </span>
  );
}
