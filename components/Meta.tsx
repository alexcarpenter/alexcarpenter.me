function Meta({ children }) {
  return (
    <dl className="meta -mt-4 md:gap-x-8 md:gap-y-4">
      <style jsx>{`
        @media (min-width: 768px) {
          .meta {
            display: grid;
            grid-template-columns: auto 1fr;
          }
        }
      `}</style>
      {children}
    </dl>
  );
}

function Title({ children }) {
  return <dt className="text-gray-300 mt-4 md:mt-0">{children}</dt>;
}

function Description({ children }) {
  return <dd className="mt-2 md:mt-0">{children}</dd>;
}

Meta.Title = Title;
Meta.Description = Description;
export default Meta;
