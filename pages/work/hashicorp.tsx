import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { cx } from '@/lib/utils';
import Page from '@/components/Page';
import Emoji from '@/components/Emoji';
import List from '@/components/List';
import Entry from '@/components/Entry';
import { useEffect } from 'react';

export default function HashiCorp() {
  return (
    <Page
      title="HashiCorp"
      description="Web Engineer helping build and maintain public-facing HashiCorp websites and web applications with Next.js."
    >
      <List>
        {/* <List.Item>
          <Entry
            date="Jul 26, 2021"
            title="Waypoint homepage"
            link="https://waypointproject.io"
            tags={['project']}
          />
        </List.Item> */}

        <List.Item>
          <Entry
            date="Sep 30, 2021"
            title="Zero trust security with HashiCorp and Microsoft Azure page"
            link="https://www.hashicorp.com/solutions/zero-trust-security-microsoft-azure"
            tags={['project']}
          />
        </List.Item>

        <List.Item>
          <Entry
            date="Sep 30, 2021"
            title="Boundary homepage updates"
            link="https://www.boundaryproject.io/"
            tags={['project']}
          />
        </List.Item>

        <List.Item>
          <Entry
            date="Sep 8, 2021"
            title="HashiCorp about pages"
            link="https://hashicorp.com/about"
            tags={['project']}
          />
        </List.Item>

        <List.Item>
          <Entry
            // feature={
            //   <Video
            //     src="/videos/state-of-the-cloud-animation.mp4"
            //     width={1454}
            //     height={1138}
            //   />
            // }
            date="Aug 11, 2021"
            title="State of the Cloud page"
            link="https://hashicorp.com/state-of-the-cloud"
            tags={['project']}
          >
            {/* <Media className="ml-4 mb-4 float-right w-1/2">
              <Image
                src="/images/work/hashicorp/state-of-the-cloud-graph.jpeg"
                width={940}
                height={1135}
                alt="Try HCP Consul homepage screenshot"
              />
            </Media> */}
          </Entry>
        </List.Item>

        <List.Item>
          <Entry
            date="Jul 29, 2021"
            title="Consul on the HashiCorp Cloud Platform"
            link="https://cloud.hashicorp.com/try-hcp-consul"
            tags={['project']}
          >
            {/* <Image
              src="/images/work/hashicorp/try-hcp-consul.jpeg"
              width={1600}
              height={900}
              alt="Try HCP Consul homepage screenshot"
            /> */}
          </Entry>
        </List.Item>

        <List.Item>
          <Entry
            date="Jul 26, 2021"
            title={
              <>
                <Emoji label="Tada">🎉</Emoji> Joined HashiCorp as a Web
                Engineer II on the core&nbsp;team.
              </>
            }
            tags={['update']}
          />
        </List.Item>
      </List>
    </Page>
  );
}

const Media = React.forwardRef<
  HTMLDivElement,
  { className?: string; children: React.ReactNode }
>((props, ref) => (
  <div className={props.className}>
    <div
      className="flex relative border border-white border-opacity-[.15]"
      ref={ref}
    >
      {props.children}
    </div>
  </div>
));

function Video({
  className,
  src,
  width,
  height,
}: {
  className?: string;
  src: string;
  width?: number;
  height?: number;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [inViewRef, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      videoRef.current.play();
    }
  }, [inView]);

  useEffect(() => {
    videoRef.current.addEventListener('play', () => {
      setIsPlaying(true);
    });
    videoRef.current.addEventListener('ended', () => {
      setIsPlaying(false);
    });
  }, [videoRef.current]);

  return (
    <Media ref={inViewRef} className={className}>
      {inView && (
        <button
          onClick={() => videoRef.current.play()}
          className={cx(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white text-black py-2 px-4 text-sm rounded-md transition-all',
            {
              'opacity-100 transform translate-y-0': !isPlaying,
              'opacity-0 pointer-events-none transform translate-y-full':
                isPlaying,
            },
          )}
          aria-hidden={isPlaying ? true : false}
        >
          Replay <span className="sr-only">video</span>
        </button>
      )}
      <div
        className={cx('transition-opacity', {
          'opacity-50': !isPlaying,
          'opacity-100': isPlaying,
        })}
        style={
          {
            '--aspect-ratio': width && height ? `${width}/${height}` : null,
          } as React.CSSProperties
        }
      >
        <video muted playsInline ref={videoRef}>
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </Media>
  );
}
