import * as React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  const [allRecs, showAllRecs] = React.useReducer(() => true, false);

  return (
    <>
      <section className="mt-16">
        <h2 className="mb-8">
          About&nbsp;<span>¬</span>
        </h2>

        <p>
          Hey, I&apos;m Alex. A detail oriented user interface engineer
          interested in CSS architecture, React, TypeScript, design systems, and
          state machines. Currently working at HashiCorp, helping build and
          maintain public-facing HashiCorp websites and web applications with
          Next.js.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="mb-8">
          Experience&nbsp;<span>¬</span>
        </h2>

        <ol className="grid gap-8">
          <li>
            <article className="flex gap-4">
              <span className="w-28 flex-shrink-0">2021 &mdash; Now</span>
              <div>
                <h3>
                  <a href="https://hashicorp.com">
                    Web Engineer at HashiCorp&nbsp;
                    <span>↗</span>
                  </a>
                </h3>
                <p>Remote</p>
              </div>
            </article>
          </li>

          <li>
            <article className="flex gap-4">
              <span className="w-28 flex-shrink-0">2018 &mdash; 2021</span>
              <div>
                <h3>
                  <a href="https://nationbuilder.com">
                    UI Engineer at NationBuilder&nbsp;
                    <span>↗</span>
                  </a>
                </h3>
                <p>Remote</p>
              </div>
            </article>
          </li>

          <li>
            <article className="flex gap-4">
              <span className="w-28 flex-shrink-0">2015 &mdash; 2018</span>
              <div>
                <h3>
                  <a href="https://mightyinthemidwest.com/">
                    Senior Developer at Mighty in the Midwest&nbsp;
                    <span>↗</span>
                  </a>
                </h3>
                <p>Grand Rapids, MI.</p>
              </div>
            </article>
          </li>

          <li>
            <article className="flex gap-4">
              <span className="w-28 flex-shrink-0">2012 &mdash; 2015</span>
              <div>
                <h3>
                  <a href="https://gomasuga.com">
                    Front-end Developer at Masuga Design&nbsp;
                    <span>↗</span>
                  </a>
                </h3>
                <p>Grand Rapids, MI.</p>
              </div>
            </article>
          </li>
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="mb-8">
          Interests&nbsp;<span>¬</span>
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            'Accessibility',
            'CSS',
            'Design Systems',
            'Essentialism',
            'Next.js',
            'Performance',
            'Pragmatism',
            'React',
            'TypeScript',
          ].map((interest, index) => {
            return <li key={index}>{interest}</li>;
          })}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="mb-8">
          Recommendations&nbsp;<span>¬</span>
        </h2>

        <ul className="grid gap-8">
          <li>
            <article className="flex gap-4">
              <span className="w-28 flex-shrink-0">
                <span className="inline-flex rounded-full overflow-hidden">
                  <Image
                    src="/img/jimmy-merritello.jpeg"
                    width={32}
                    height={32}
                    alt="Jimmy Merritello avatar"
                  />
                </span>
              </span>
              <div>
                <p>
                  Alex is an excellent teammate and an exceptionally talented
                  web developer. When he joined the team we gained an incredibly
                  strong collaborator. His thoughtful approach to both producing
                  work and actively reviewing code instantly improved the entire
                  teams workflow. It is clear that Alex is a life long learner
                  and therefore is always sure to bring a new, novel approach to
                  solve a problem.
                </p>
                <p className="mt-4 text-gray-800 dark:text-gray-200">
                  Jimmy Merritello, Web Engineer, HashiCorp
                </p>
              </div>
            </article>
          </li>

          <li>
            <article className="flex gap-4">
              <span className="w-28 flex-shrink-0">
                <span className="inline-flex rounded-full overflow-hidden">
                  <Image
                    src="/img/amy-stuart.jpeg"
                    width={32}
                    height={32}
                    alt="Amy Stuart avatar"
                  />
                </span>
              </span>
              <div>
                <p>
                  Alex and I worked together on the design team at
                  NationBuilder. Alex is a natural problem solver, and a
                  talented visual designer. That combination makes him an
                  excellent front-end engineer. We worked together on a new
                  feature with a complex UI and he was able to interpret the
                  designs with a care and detail that is rare, while also making
                  thoughtful UX suggestions. Not to mention Alex is just a great
                  person, easy to talk to and lovely to work with.
                </p>
                <p className="mt-4 text-gray-800 dark:text-gray-200">
                  Amy Stuart, Senior Designer, NationBuilder
                </p>
              </div>
            </article>
          </li>

          <li>
            <article className="flex gap-4">
              <span className="w-28 flex-shrink-0">
                <span className="inline-flex rounded-full overflow-hidden">
                  <Image
                    src="/img/andrew-possehl.jpeg"
                    width={32}
                    height={32}
                    alt="Andrew Posshel avatar"
                  />
                </span>
              </span>
              <div>
                <p>
                  I worked with Alex on a variety of different projects. He is
                  excellent at his craft and a pleasure to collaborate with. His
                  attention to detail always resulted in an extremely polished
                  final product.
                </p>
                <p className="mt-4 text-gray-800 dark:text-gray-200">
                  Andrew Possehl, Senior Designer, NationBuilder
                </p>
              </div>
            </article>
          </li>

          {allRecs ? (
            <>
              <li>
                <article className="flex gap-4">
                  <span className="w-28 flex-shrink-0">
                    <span className="inline-flex rounded-full overflow-hidden">
                      <Image
                        src="/img/kyle-luck.jpeg"
                        width={32}
                        height={32}
                        alt="Kyle Luck avatar"
                      />
                    </span>
                  </span>
                  <div>
                    <p>
                      Alex is incredibly skilled, efficient, and thorough in his
                      work. Perhaps more than any other co-worker I have had,
                      Alex possesses a deep and wide understanding of modern web
                      technologies, while his steady passion for producing
                      best-of-class work inspires his peers to write cleaner,
                      simpler, and more elegant code.
                    </p>
                    <p className="mt-4 text-gray-800 dark:text-gray-200">
                      Kyle Luck, Developer, Mighty
                    </p>
                  </div>
                </article>
              </li>

              <li>
                <article className="flex gap-4">
                  <span className="w-28 flex-shrink-0">
                    <span className="inline-flex rounded-full overflow-hidden">
                      <Image
                        src="/img/melissa-taylor.jpeg"
                        width={32}
                        height={32}
                        alt="Melissa Taylor avatar"
                      />
                    </span>
                  </span>
                  <div>
                    <p>
                      I would recommend Alex to any forward-thinking web team.
                      His passion for web standards along with his friendly
                      attitude made him an invaluable part of our development
                      team. I’m always especially impressed with his commitment
                      to continuous learning and I hope to have the chance to
                      work with him again!
                    </p>
                    <p className="mt-4 text-gray-800 dark:text-gray-200">
                      Melissa Taylor, Director of Client Services, Mighty
                    </p>
                  </div>
                </article>
              </li>

              <li>
                <article className="flex gap-4">
                  <span className="w-28 flex-shrink-0">
                    <span className="inline-flex rounded-full overflow-hidden">
                      <Image
                        src="/img/danielle-dunn.jpeg"
                        width={32}
                        height={32}
                        alt="Danielle Dunn avatar"
                      />
                    </span>
                  </span>
                  <div>
                    <p>
                      Alex is incredibly thorough and thoughtful with his work
                      and is always seeking out improving in his craft. He’s
                      conscious of meeting deadlines and communicates concerns
                      early so that project teams can be proactive in problem
                      solving.
                    </p>
                    <p className="mt-4 text-gray-800 dark:text-gray-200">
                      Danielle Dunn, Project Manager, Mighty
                    </p>
                  </div>
                </article>
              </li>

              <li>
                <article className="flex gap-4">
                  <span className="w-28 flex-shrink-0">
                    <span className="inline-flex rounded-full overflow-hidden">
                      <Image
                        src="/img/ben-kohl.jpeg"
                        width={32}
                        height={32}
                        alt="Benjamin Kohl avatar"
                      />
                    </span>
                  </span>
                  <div>
                    <p>
                      Alex is a true autodidact that is dedicated to keeping up
                      with the latest development tools, methods and trends.
                    </p>
                    <p className="mt-4 text-gray-800 dark:text-gray-200">
                      Benjamin Kohl, Back-end Developer, Masuga
                    </p>
                  </div>
                </article>
              </li>
            </>
          ) : null}
        </ul>

        {!allRecs ? (
          <div className="mt-8 flex gap-4">
            <span className="w-28 flex-shrink-0" />
            <button onClick={showAllRecs}>Show all</button>
          </div>
        ) : null}
      </section>

      <section className="mt-16">
        <h2 className="mb-8">
          Connect&nbsp;<span>¬</span>
        </h2>

        <ul className="grid gap-8">
          <li>
            <article className="flex gap-4">
              <span className="w-28 flex-shrink-0">Email</span>
              <a href="">
                im.alexcarpenter@gmail.com&nbsp;
                <span>↗</span>
              </a>
            </article>
          </li>

          <li>
            <article className="flex gap-4">
              <span className="w-28 flex-shrink-0">Twitter</span>
              <a href="">
                hybrid_alex&nbsp;
                <span>↗</span>
              </a>
            </article>
          </li>

          <li>
            <article className="flex gap-4">
              <span className="w-28 flex-shrink-0">Github</span>
              <a href="">
                alexcarpenter&nbsp;
                <span>↗</span>
              </a>
            </article>
          </li>

          <li>
            <article className="flex gap-4">
              <span className="w-28 flex-shrink-0">LinkedIn</span>
              <a href="">
                alexcarpenter&nbsp;
                <span>↗</span>
              </a>
            </article>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;
