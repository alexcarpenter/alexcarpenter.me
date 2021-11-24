import Image from 'next/image';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import Code from '@/components/Code';
import Note from '@/components/Note';
import Highlights from './Highlights';
import Slideshow from '@/components/Slideshow';
import YoutubeEmbed from '@/components/YoutubeEmbed';
import LinkedHeading from '@/components/LinkedHeading';

export const components = {
  h2: (props) => <LinkedHeading {...props} as="h2" />,
  h3: (props) => <LinkedHeading {...props} as="h3" />,
  pre: Code,
  Badge,
  Card,
  Image,
  Note,
  Highlights,
  YoutubeEmbed,
  Slideshow,
  ExternalLink: ({ href, children }) => (
    <div className="flex-1">
      <p>
        <a
          className="underline hover:no-underline focus:no-underline"
          target="_blank"
          rel="noopener noreferrer"
          href={href}
        >
          {children}
        </a>
        &nbsp;
        <span
          role="img"
          aria-hidden="true"
          className="flex-shrink-0 textSecondary"
        >
          →
        </span>
      </p>
      <p className="mt-0.5 text-sm textSecondary">{new URL(href).hostname}</p>
    </div>
  ),
  CodeSandbox: ({ src, title }: { src: string; title: string }) => (
    <iframe
      title={title}
      src={src}
      className="my-12"
      style={{
        width: '100%',
        height: 500,
        border: 0,
        borderRadius: 4,
        overflow: 'hidden',
      }}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  ),
};
