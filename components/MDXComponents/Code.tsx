import rangeParser from 'parse-numeric-range';
import Highlight, { defaultProps } from 'prism-react-renderer';
import useClipboard from 'react-use-clipboard';
import { Copy } from 'react-feather';
import clsx from 'clsx';

// Copied from https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/themes/nightOwl.js
var theme = {
  plain: {
    color: '#d6deeb',
    backgroundColor: '#011627',
  },
  styles: [
    {
      types: ['changed'],
      style: {
        color: 'rgb(162, 191, 252)',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgba(239, 83, 80, 0.56)',
      },
    },
    {
      types: ['inserted', 'attr-name'],
      style: {
        color: 'rgb(173, 219, 103)',
      },
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(99, 119, 119)',
      },
    },
    {
      types: ['string', 'url'],
      style: {
        color: 'rgb(173, 219, 103)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(214, 222, 235)',
      },
    },
    {
      types: ['number'],
      style: {
        color: 'rgb(247, 140, 108)',
      },
    },
    {
      types: ['builtin', 'char', 'constant', 'function'],
      style: {
        color: 'rgb(130, 170, 255)',
      },
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ['punctuation'],
      style: {
        color: 'rgb(199, 146, 234)',
      },
    },
    {
      types: ['selector', 'doctype'],
      style: {
        color: 'rgb(199, 146, 234)',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: 'rgb(255, 203, 139)',
      },
    },
    {
      types: ['tag', 'operator', 'keyword'],
      style: {
        color: 'rgb(127, 219, 202)',
      },
    },
    {
      types: ['boolean'],
      style: {
        color: 'rgb(255, 88, 116)',
      },
    },
    {
      types: ['property'],
      style: {
        color: 'rgb(128, 203, 196)',
      },
    },
    {
      types: ['namespace'],
      style: {
        color: 'rgb(178, 204, 214)',
      },
    },
  ],
};

const calculateLinesToHighlight = (meta) => {
  const RE = /{([\d,-]+)}/;
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1];
    const lineNumbers = rangeParser(strlineNumbers);
    return (index) => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};

export default function Code({ children, className, metastring }) {
  const [isCopied, setCopied] = useClipboard(children.trim(), {
    successDuration: 2000,
  });
  const language = className ? className.replace(/language-/, '') : '';
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  return (
    <div className="relative overflow-hidden rounded">
      <div
        className="flex items-center justify-between w-full px-4 py-2 text-white border-b border-gray-700"
        style={{ background: 'rgb(1, 22, 39)' }}
      >
        <span className="text-sm uppercase">{language}</span>
        <button
          className="flex items-center text-sm focus:outline-none"
          onClick={setCopied}
        >
          {isCopied ? 'Copied' : 'Copy'}
          <Copy
            size={'1em'}
            className={clsx(
              'ml-2 transition-transform',
              isCopied && 'transform rotate-90',
            )}
          />
        </button>
      </div>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={children.trim()}
        language={language}
      >
        {({
          className,
          style = { marginTop: 0 },
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <pre
            className={`${className}`}
            style={{
              ...style,
              overflow: 'auto',
              padding: 16,
            }}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              if (shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} bg-gray-800 -mx-4 px-4`;
              }
              return (
                <div key={i} {...lineProps}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
