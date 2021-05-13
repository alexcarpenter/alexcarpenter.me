export default function Details({
  summary,
  children,
}: {
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <details>
      <summary className="cursor-pointer leading-7 bg-gray-900 hover:bg-gray-800 py-2 px-4 rounded transition-colors">
        <span className="">{summary}</span>
      </summary>
      <div className="mt-4 prose">{children}</div>
    </details>
  );
}
