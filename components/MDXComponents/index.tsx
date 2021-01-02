import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/Card';
import Code from './Code';
import ExternalLink from '@/components/ExternalLink';
import YoutubeVideo from '@/components/YoutubeVideo';

function H2({ children }) {
  return <h2 className="mt-4 text-2xl font-bold">{children}</h2>;
}

function H3({ children }) {
  return <h3 className="mt-4 text-xl font-bold">{children}</h3>;
}

function InlineCode({ children }) {
  return (
    <code className="bg-gray-200 px-1 py-0.5 rounded-sm text-sm">
      {children}
    </code>
  );
}

function CustomLink(props) {
  const isInternalLink =
    props.href && (props.href.startsWith('/') || props.href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={props.href}>
        <a className="text-blue hover:underline" {...props} />
      </Link>
    );
  }

  return (
    <a
      className="text-blue hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}

function List({ children }) {
  return <ul className="pl-4 space-y-1 list-disc">{children}</ul>;
}

function Blockquote({ children }) {
  return (
    <blockquote className="px-4 py-2 text-xl italic text-gray-600 border-l-4 border-blue">
      {children}
    </blockquote>
  );
}

const MDXComponents = {
  h2: H2,
  h3: H3,
  ul: List,
  a: CustomLink,
  blockquote: Blockquote,
  inlineCode: InlineCode,
  code: Code,
  Card,
  ExternalLink,
  Image,
  YoutubeVideo,
};

export default MDXComponents;
