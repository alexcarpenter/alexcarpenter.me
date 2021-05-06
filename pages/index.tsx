import * as React from 'react';
import Image from 'next/image';

function Hr() {
  return <hr className="bg-gray-800 h-px w-full border-0" />;
}

function Details({
  summary,
  children,
}: {
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <details>
      <summary className="cursor-pointer leading-7 bg-gray-900 hover:bg-gray-800 py-2 px-4 rounded transition-colors">
        <span className="">{summary}</span>
      </summary>
      <div className="mt-4 prose">{children}</div>
    </details>
  );
}

export default function Home() {
  return (
    <div className="prose">
      <Image
        src="/images/me.jpg"
        alt="Picture of Alex Carpenter"
        width={48}
        height={48}
        className="rounded-md"
        priority
      />
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
        <p>NationBuilder</p>
        <p className="mt-1 text-gray-400">UI Engineer • Nov 2018 - Present</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Maintain and implement new features within our design system Radius.
          </li>
          <li>
            Implement new components and features using React, Redux, and React
            Router.
          </li>
          <li>
            Implement marketing landing pages for different product verticals.
          </li>
        </ul>
        <Hr />
        <p>Mighty in the Midwest</p>
        <p className="mt-1 text-gray-400">
          Senior Developer • Oct 2015 - Nov 2018
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Architected solutions and estimate project scope for new and
            existing client features.
          </li>
          <li>
            Introduced modern Javascript practices with Webpack and Rollup.
          </li>
        </ul>
        <Hr />
        <p>Masuga Design </p>
        <p className="mt-1 text-gray-400">
          Front-end Developer • Feb 2012 - Oct 2015
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Designed and developed a SaaS app built on Laravel.</li>
          <li>
            Developed mobile-first front-end templates for clients such as FOX
            Networks Info and A+E Networks Affiliates.
          </li>
        </ul>
      </Details>
      <Details summary="Recommendations">
        <p>
          “I worked with Alex on a variety of different projects. He is
          excellent at his craft and a pleasure to collaborate with. His
          attention to detail always resulted in an extremely polished final
          product.”
        </p>
        <p className="text-gray-400">
          &ndash; Andrew Possehl, Senior Designer, NationBuilder
        </p>
        <Hr />
        <p>
          “Alex is incredibly skilled, efficient, and thorough in his work.
          Perhaps more than any other co-worker I have had, Alex possesses a
          deep and wide understanding of modern web technologies, while his
          steady passion for producing best-of-class work inspires his peers to
          write cleaner, simpler, and more elegant code.”
        </p>
        <p className="text-gray-400">&ndash; Kyle Luck, Developer, Mighty</p>
        <Hr />
        <p>
          “I would recommend Alex to any forward-thinking web team. His passion
          for web standards along with his friendly attitude made him an
          invaluable part of our development team. I’m always especially
          impressed with his commitment to continuous learning and I hope to
          have the chance to work with him again!”
        </p>
        <p className="text-gray-400">
          &ndash; Melissa Taylor, Director of Client Services, Mighty
        </p>
        <Hr />
        <p>
          “Alex is incredibly thorough and thoughtful with his work and is
          always seeking out improving in his craft. He’s conscious of meeting
          deadlines and communicates concerns early so that project teams can be
          proactive in problem solving.”
        </p>
        <p className="text-gray-400">
          &ndash; Danielle Dunn, Project Manager, Mighty
        </p>
        <Hr />
        <p>
          “Alex is a true autodidact that is dedicated to keeping up with the
          latest development tools, methods and trends.”
        </p>
        <p className="text-gray-400">
          &ndash; Benjamin Kohl, Back-end Developer, Masuga
        </p>
      </Details>
      <Details summary="Social">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <a href="">YouTube</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
          <li>
            <a href="">CodePen</a>
          </li>
          <li>
            <a href="">Dribbble</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </Details>
    </div>
  );
}
