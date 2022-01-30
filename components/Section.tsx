type SectionProps = {
  heading?: string;
};

const Section: React.FC<SectionProps> = ({ heading, children }) => {
  return (
    <section className="section grid gap-12">
      {heading ? <h2 className="text-xl">{heading}</h2> : null}{' '}
      <div>{children}</div>
    </section>
  );
};

export default Section;
