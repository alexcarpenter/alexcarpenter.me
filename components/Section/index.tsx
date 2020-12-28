function Section({ children }) {
  return <section className="mt-8">{children}</section>;
}

function Title({ children }) {
  return (
    <div className="relative flex items-center mb-8 text-sm">
      <h2 className="font-bold tracking-wider uppercase">{children}</h2>
      <div className="flex-1 h-px ml-4 bg-gray-200"></div>
    </div>
  );
}

function Body({ children }) {
  return <div className="space-y-3">{children}</div>;
}

Section.Title = Title;
Section.Body = Body;

export default Section;
