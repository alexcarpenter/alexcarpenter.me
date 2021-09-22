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
          @apply border-t pt-8 mt-8;
        }
      `}</style>
      {heading && <h2 className="text-xl mb-8">{heading}</h2>}
      {children}
    </section>
  );
}

export default Section;
