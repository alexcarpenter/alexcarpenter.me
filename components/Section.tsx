import LinkedHeading from './LinkedHeading';

function Section({
  heading,
  children,
  id,
}: {
  heading?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section className="section" id={id}>
      <style jsx>{`
        .section + .section {
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 1px solid;
          border-color: rgba(228, 228, 231, var(--tw-border-opacity));
        }
        @media (prefers-color-scheme: dark) {
          .section + .section {
            border-color: rgba(39, 39, 42, var(--tw-border-opacity));
          }
        }
      `}</style>
      {heading && (
        <LinkedHeading className="text-xl mb-6">{heading}</LinkedHeading>
      )}
      {children}
    </section>
  );
}

export default Section;
