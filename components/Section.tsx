function Section({ children }) {
  return (
    <section className="section">
      <style jsx>{`
        .section + .section {
          @apply mt-8;
        }
      `}</style>
      {children}
    </section>
  );
}

function SectionHeading({ children }) {
  return <h2 className="text-xl">{children}</h2>;
}

Section.Heading = SectionHeading;

export default Section;
