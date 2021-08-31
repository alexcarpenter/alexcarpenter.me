import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { cx } from '@/lib/utils';
import BulletList from '@/components/BulletList';
import Page from '@/components/Page';
import Section from '@/components/Section';
import { useEffect } from 'react';

export default function HashiCorp() {
  return (
    <Page title="HashiCorp" description="">
      {/* <Section id="about-redesign">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8">
          <div className="col-span-2">
            <p className="text-5xl">03</p>
            <h2 className="mt-4 text-white text-opacity-75">About redesign</h2>
          </div>

          <div className="col-span-2 prose">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              dolorem voluptatibus reiciendis, veniam dolorum necessitatibus
              dicta? Repellendus magni dolorum at accusamus vel quod, cum atque
              quos doloremque odit quidem voluptatem.
            </p>
            <p>
              <a href="https://www.hashicorp.com/about">View pages</a>
              <span className="text-white text-opacity-75">&nbsp;→</span>
            </p>
          </div>
        </div>
      </Section> */}

      <Section id="state-of-the-cloud">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8">
          <div className="col-span-2">
            <p className="text-5xl">02</p>
            <h2 className="mt-4 text-white text-opacity-75">
              State of the Cloud
            </h2>
          </div>

          <div className="col-span-2 prose">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              dolorem voluptatibus reiciendis, veniam dolorum necessitatibus
              dicta? Repellendus magni dolorum at accusamus vel quod, cum atque
              quos doloremque odit quidem voluptatem.
            </p>
          </div>

          <div className="col-span-4">
            <Video src="/videos/state-of-the-cloud-animation.mp4" />
          </div>

          <div className="col-start-3 col-span-2 prose">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              dolorem voluptatibus reiciendis, veniam dolorum necessitatibus
              dicta? Repellendus magni dolorum at accusamus vel quod, cum atque
              quos doloremque odit quidem voluptatem.
            </p>
            <p>
              <a href="https://www.hashicorp.com/state-of-the-cloud">
                View page
              </a>
              <span className="text-white text-opacity-75">&nbsp;→</span>
            </p>
          </div>
        </div>
      </Section>

      <Section id="hcp-consul-page">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8">
          <div className="md:col-span-2 md:col-start-3">
            <a
              href="https://cloud.hashicorp.com/try-hcp-consul"
              className="group relative flex"
            >
              <Image
                src="/images/work/hashicorp/try-hcp-consul.jpeg"
                width={1600}
                height={900}
              />
              <span className="flex-shrink-0 w-10 h-10 text-sm bg-orange-500 text-black absolute bottom-0 right-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="sr-only">View page</span>
                <span>→</span>
              </span>
            </a>
          </div>

          <div className="md:col-span-2">
            <p className="text-5xl">01</p>
            <h2 className="mt-4 text-white text-opacity-75">HCP Consul page</h2>
          </div>

          <div className="md:col-span-2 prose">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              dolorem voluptatibus reiciendis, veniam dolorum necessitatibus
              dicta? Repellendus magni dolorum at accusamus vel quod, cum atque
              quos doloremque odit quidem voluptatem.
            </p>
            <p>
              <a href="https://cloud.hashicorp.com/try-hcp-consul">View page</a>
              <span className="text-white text-opacity-75">&nbsp;→</span>
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-4">
          <div className="col-start-2 col-span-2 text-center">
            <time className="text-white text-opacity-75">Jul 26, 2021</time>
            <h2 className="mt-2">
              Joined HashiCorp as a Web Engineer II on the core team.
            </h2>
          </div>
        </div>
      </Section>
    </Page>
  );
}

function Video({ src }: { src: string }) {
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
    <div
      className="relative border border-white border-opacity-[.15]"
      ref={inViewRef}
    >
      {inView && (
        <button
          onClick={() => videoRef.current.play()}
          className={cx(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-orange-500 text-black py-2 px-4 text-sm rounded-md transition-opacity',
            {
              'opacity-100': !isPlaying,
              'opacity-0 pointer-events-none': isPlaying,
            },
          )}
        >
          Replay
        </button>
      )}
      <div
        className={cx('transition-opacity', {
          'opacity-50': !isPlaying,
          'opacity-100': isPlaying,
        })}
      >
        <video muted ref={videoRef}>
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
