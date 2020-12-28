import Link from 'next/link';
import Image from 'next/image';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import Card from '@/components/Card';
import ExternalLink from '@/components/ExternalLink';
import YoutubeVideo from '@/components/YoutubeVideo';

function H2({ children }) {
  return <h2 className="mt-4 text-2xl font-bold">{children}</h2>;
}

function H3({ children }) {
  return <h3 className="mt-4 text-xl font-bold">{children}</h3>;
}

function CustomLink({ href, ...rest }) {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className="text-blue hover:underline" {...rest} />
      </Link>
    );
  }

  return (
    <a
      className="text-blue hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
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

function Code({ children }) {
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            overflow: 'auto',
            marginTop: 20,
            marginBottom: 20,
            padding: 16,
          }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

const MDXComponents = {
  h2: H2,
  h3: H3,
  ul: List,
  a: CustomLink,
  blockquote: Blockquote,
  code: Code,
  Card,
  ExternalLink,
  Image,
  YoutubeVideo,
};

export default MDXComponents;
