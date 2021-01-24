import * as React from 'react';
import Image from 'next/image';
import Card from '@/components/Card';
import Grid from '@/components/Grid';
import Section from '@/components/Section';

export default function Recommendations() {
  const [viewAll, setViewAll] = React.useState(false);

  return (
    <Section>
      <Section.Title>Recomendations</Section.Title>
      <Grid cols={1}>
        <Grid.Item>
          <Card>
            <Card.Description>
              “I worked with Alex on a variety of different projects. He is
              excellent at his craft and a pleasure to collaborate with. His
              attention to detail always resulted in an extremely polished final
              product.”
            </Card.Description>
            <div className="inline-flex items-center justify-between pt-4 mt-auto">
              <p className="mr-3">
                <strong>Andrew Possehl</strong>
                <br />
                <span className="text-gray-600">
                  Senior Designer, NationBuilder
                </span>
              </p>
              <div className="flex-shrink-0">
                <Image
                  src="/images/andrew-possehl.jpg"
                  alt="Picture of Andrew Possehl"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
            </div>
          </Card>
        </Grid.Item>
        <Grid.Item>
          <Card>
            <Card.Description>
              “Alex is incredibly skilled, efficient, and thorough in his work.
              Perhaps more than any other co-worker I have had, Alex possesses a
              deep and wide understanding of modern web technologies, while his
              steady passion for producing best-of-class work inspires his peers
              to write cleaner, simpler, and more elegant code.”
            </Card.Description>
            <div className="inline-flex items-center justify-between pt-4 mt-auto">
              <p className="mr-3">
                <strong>Kyle Luck</strong>
                <br />
                <span className="text-gray-600">Developer, Mighty</span>
              </p>
              <div className="flex-shrink-0">
                <Image
                  src="/images/kyle-luck.jpg"
                  alt="Picture of Kyle Luck"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
            </div>
          </Card>
        </Grid.Item>

        <Grid.Item>
          <Card>
            <Card.Description>
              “I would recommend Alex to any forward-thinking web team. His
              passion for web standards along with his friendly attitude made
              him an invaluable part of our development team. I’m always
              especially impressed with his commitment to continuous learning
              and I hope to have the chance to work with him again!”
            </Card.Description>
            <div className="inline-flex items-center justify-between pt-4 mt-auto">
              <p className="mr-3">
                <strong>Melissa Taylor</strong>
                <br />
                <span className="text-gray-600">
                  Director of Client Services, Mighty
                </span>
              </p>
              <div className="flex-shrink-0">
                <Image
                  src="/images/melissa-taylor.jpg"
                  alt="Picture of Melissa Taylor"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
            </div>
          </Card>
        </Grid.Item>

        {viewAll ? (
          <>
            <Grid.Item>
              <Card>
                <Card.Description>
                  “Alex is incredibly thorough and thoughtful with his work and
                  is always seeking out improving in his craft. He’s conscious
                  of meeting deadlines and communicates concerns early so that
                  project teams can be proactive in problem solving.”
                </Card.Description>
                <div className="inline-flex items-center justify-between pt-4 mt-auto">
                  <p className="mr-3">
                    <strong>Danielle Dunn</strong>
                    <br />
                    <span className="text-gray-600">
                      Project Manager, Mighty
                    </span>
                  </p>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/danielle-dunn.jpg"
                      alt="Picture of Danielle Dunn"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </Card>
            </Grid.Item>
            <Grid.Item>
              <Card>
                <Card.Description>
                  “Alex is a true autodidact that is dedicated to keeping up
                  with the latest development tools, methods and trends.”
                </Card.Description>
                <div className="inline-flex items-center justify-between pt-4 mt-auto">
                  <p className="mr-3">
                    <strong>Benjamin Kohl</strong>
                    <br />
                    <span className="text-gray-600">
                      Back-end Developer, Masuga
                    </span>
                  </p>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/ben-kohl.jpg"
                      alt="Picture of Benjamin Kohl"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </Card>
            </Grid.Item>
          </>
        ) : (
          <div className="text-center">
            <button
              onClick={() => setViewAll(true)}
              className="px-4 py-2 transition-colors rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
            >
              View all
            </button>
          </div>
        )}
      </Grid>
    </Section>
  );
}
