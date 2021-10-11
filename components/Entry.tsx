import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import RightArrow from '@/components/RightArrow';
import Tags from '@/components/Tags';

interface EntryProps {
  feature?: React.ReactNode;
  image?: {
    src: string;
    alt: string;
  };
  date: string;
  title: string | React.ReactNode;
  description?: string;
  tags?: string[];
  link?: string;
  children?: React.ReactNode;
}

export default function Entry({
  feature,
  image,
  date,
  title,
  description,
  tags,
  link,
  children,
}: EntryProps) {
  const isInternalLink = (href) =>
    href && (href.startsWith('/') || href.startsWith('#'));

  const CustomLink = ({ href, children }) => {
    if (isInternalLink(href)) {
      return (
        <Link href={href}>
          <a className="underline hover:no-underline focus:no-underline">
            {children}
          </a>
        </Link>
      );
    }

    return (
      <>
        <a
          className="underline hover:no-underline focus:no-underline"
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
          {children}
        </a>
        <RightArrow position="after" />
      </>
    );
  };

  return (
    <article className="flex flex-col sm:flex-row flex-wrap">
      {image && (
        <div className="w-full mb-4">
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={450}
            className="rounded-md"
          />
        </div>
      )}
      {feature && <div className="w-full mb-4">{feature}</div>}
      <div className="w-28 flex-shrink-0">
        <time className="text-gray-300 mb-2 inline-block" dateTime={date}>
          {formatDate(date)}
        </time>
      </div>
      <div className="flex-1">
        <h2>
          {link ? <CustomLink href={link}>{title}</CustomLink> : <>{title}</>}
        </h2>
        {link && !isInternalLink(link) && (
          <p className="mt-0.5 text-sm text-gray-300">
            {new URL(link).hostname}
          </p>
        )}
        {description && <p className="mt-4 text-gray-300">{description}</p>}
        {children && (
          <div className="mt-4 text-gray-300 prose">
            {typeof children === 'string' ? <p>{children}</p> : children}
          </div>
        )}
        {tags && <Tags items={tags} />}
      </div>
    </article>
  );
}
