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
          @apply border-t pt-12 mt-12;
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
