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
      {heading && (
        <LinkedHeading className="text-xl mb-6">{heading}</LinkedHeading>
      )}
      {children}
    </section>
  );
}

export default Section;
