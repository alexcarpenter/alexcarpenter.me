function Section({
  heading,
  children,
}: {
  heading?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      <style jsx>{`
        .section + .section {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
      {heading && <h2 className="text-xl mb-8">{heading}</h2>}
      {children}
    </section>
  );
}

export default Section;
