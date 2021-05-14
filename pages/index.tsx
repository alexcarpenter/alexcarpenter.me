import * as React from 'react';
import { getAllMdx } from '@/lib/mdx';
import Page from '@/components/Page';
import Details from '@/components/Details';
import experience from '@/data/experience';
import recommendations from '@/data/recommendations';

export default function Home() {
  return (
    <Page>
      <div className="prose">
        <p>Hey, I'm Alex.</p>
        <p>
          A detail oriented user interface engineer currently interested in CSS
          architecture, React, TypeScript, design systems, and state machines.
        </p>
        <p>
          Outside of work I am a serial hobbyist. Currently enjoying disc golf,
          outdoor cooking, and most recently lawn maintenance. I love learning,
          sharing and being apart of passionate communities.
        </p>
        <Details summary="Experience">
          {experience.map((job, index) => {
            return (
              <React.Fragment key={index}>
                <p className="font-bold">{job.company}</p>
                <p className="mt-1 text-gray-400">
                  {job.title} • {job.timeline.start} -{' '}
                  {job.timeline.end ? job.timeline.end : 'Present'}
                </p>
                <ul>
                  {job.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {index < experience.length - 1 && <hr />}
              </React.Fragment>
            );
          })}
        </Details>
        <Details summary="Recommendations">
          {recommendations.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <p>“{item.text}”</p>
                <p className="text-gray-400">
                  &ndash; {item.cite.name}, {item.cite.title},{' '}
                  {item.cite.company}
                </p>
                {index < recommendations.length - 1 && <hr />}
              </React.Fragment>
            );
          })}
        </Details>
        <Details summary="Social">
          <ul>
            <li>
              <a href="https://www.youtube.com/channel/UC2jJoQlzvLPvnYfowAEVaOg">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://twitter.com/hybrid_alex">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/alexcarpenter">Github</a>
            </li>
            <li>
              <a href="https://codepen.io/alexcarpenter">CodePen</a>
            </li>
            <li>
              <a href="https://dribbble.com/alexcarpenter">Dribbble</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/imalexcarpenter/">
                LinkedIn
              </a>
            </li>
          </ul>
        </Details>
      </div>
    </Page>
  );
}
