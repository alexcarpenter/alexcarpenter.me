import rangeParser from 'parse-numeric-range';
import Highlight, { defaultProps } from 'prism-react-renderer';
import useClipboard from 'react-use-clipboard';

var theme = {
  plain: {
    color: 'inherit',
    backgroundColor: 'transparent',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgba(161, 161, 170, var(--tw-text-opacity))',
      },
    },
    {
      types: ['string', 'number', 'builtin', 'variable'],
      // style: {
      //   color: '#aaaaa',
      // },
    },
    {
      types: ['class-name', 'function', 'tag', 'attr-name'],
      // style: {
      //   color: '#fff',
      // },
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
  const language = className.replace(/language-/, '');
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  return (
    <div className="relative overflow-hidden rounded border border-gray-900">
      <div className="flex items-center justify-between w-full px-4 py-2 text-white border-b border-gray-900">
        <span className="uppercase">{language}</span>
        <button
          className="flex items-center focus:outline-none"
          onClick={setCopied}
        >
          {isCopied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <Highlight
        {...defaultProps}
        //@ts-ignore
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
