//@ts-nocheck
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
        color: 'inherit',
        opacity: '0.75',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'inherit',
        opacity: '0.75',
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

export default function Code({ children, className = '', metastring }) {
  const [isCopied, setCopied] = useClipboard(children.trim(), {
    successDuration: 2000,
  });
  const language = className.replace(/language-/, '');
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  return (
    <div className="relative overflow-hidden rounded bg-white bg-opacity-10 text-white">
      <div className="flex items-center justify-between w-full px-4 py-2 border-b border-black">
        <span className="uppercase">{language}</span>
        <button className="flex items-center" onClick={setCopied}>
          {isCopied ? 'Copied' : 'Copy'}
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
                lineProps.className = `${lineProps.className} bg-white bg-opacity-5 -mx-4 px-4`;
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
