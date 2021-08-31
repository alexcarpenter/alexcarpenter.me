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
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }
      `}</style>
      {heading && <h2 className="text-xl mb-8">{heading}</h2>}
      {children}
    </section>
  );
}

export default Section;
