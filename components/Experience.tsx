export default function Experience() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <article className="bg-white bg-opacity-10 p-4 rounded-md">
        <h3>NationBuilder</h3>
        <p className="mt-0.5 text-sm text-white text-opacity-75">
          UI Engineer
          <br />
          Nov 2018 - Present
        </p>
      </article>

      <article className="bg-white bg-opacity-10 p-4 rounded-md">
        <h3>Mighty in the Midwest</h3>
        <p className="mt-0.5 text-sm text-white text-opacity-75">
          Senior Developer
          <br />
          Oct 2015 - Nov 2018
        </p>
      </article>

      <article className="bg-white bg-opacity-10 p-4 rounded-md">
        <h3>Masuga Design</h3>
        <p className="mt-0.5 text-sm text-white text-opacity-75">
          Front-end Developer
          <br />
          Feb 2012 - Oct 2015
        </p>
      </article>

      <div className="flex items-center justify-center p-4">
        <p>
          <a
            href="https://www.linkedin.com/in/imalexcarpenter/"
            className="underline hover:no-underline focus:no-underline"
          >
            View LinkedIn
          </a>
          &nbsp;
          <span
            role="img"
            aria-hidden="true"
            className="text-white text-opacity-75 flex-shrink-0"
          >
            &#8594;
          </span>
        </p>
      </div>
    </div>
  );
}
