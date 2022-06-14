export const Footer = () => {
  return (
    <footer className="mt-16">
      <h2 className="mb-8">
        Connect&nbsp;<span aria-hidden={true}>¬</span>
      </h2>

      <ul className="grid gap-8">
        <li>
          <article className="flex flex-col sm:flex-row sm:gap-4">
            <span className="w-28 flex-shrink-0">Email</span>
            <a href="mailto:im.alexcarpenter@gmail.com">
              im.alexcarpenter@gmail.com&nbsp;
              <span aria-hidden={true}>↗</span>
            </a>
          </article>
        </li>

        <li>
          <article className="flex flex-col sm:flex-row sm:gap-4">
            <span className="w-28 flex-shrink-0">Twitter</span>
            <a href="https://twitter.com/hybrid_alex">
              hybrid_alex&nbsp;
              <span aria-hidden={true}>↗</span>
            </a>
          </article>
        </li>

        <li>
          <article className="flex flex-col sm:flex-row sm:gap-4">
            <span className="w-28 flex-shrink-0">Github</span>
            <a href="https://github.com/alexcarpenter">
              alexcarpenter&nbsp;
              <span aria-hidden={true}>↗</span>
            </a>
          </article>
        </li>

        <li>
          <article className="flex flex-col sm:flex-row sm:gap-4">
            <span className="w-28 flex-shrink-0">LinkedIn</span>
            <a href="https://www.linkedin.com/in/imalexcarpenter/">
              alexcarpenter&nbsp;
              <span aria-hidden={true}>↗</span>
            </a>
          </article>
        </li>
      </ul>
    </footer>
  );
};
