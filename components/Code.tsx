//@ts-nocheck
import { cx } from '@/lib/utils';
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

const getParams = (name = ``) => {
  const [lang, params = ``] = name.split(`:`);
  return [lang.split(`language-`).pop().split(`{`).shift()].concat(
    params.split(`&`).reduce((merged, param) => {
      const [key, value] = param.split(`=`);
      merged[key] = value;
      return merged;
    }, {}),
  );
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

export default function Code({ children, className = '' }) {
  const [isCopied, setCopied] = useClipboard(children.trim(), {
    successDuration: 2000,
  });
  const [language, { filename = ``, highlight = `` }] = getParams(className);
  const shouldHighlightLine = calculateLinesToHighlight(highlight);
  return (
    <div
      className={cx(
        'my-12 relative overflow-hidden rounded',
        ['bg-gray-200 text-gray-700'],
        ['dark:text-white dark:bg-gray-900'],
      )}
    >
      <div
        className={cx(
          'flex items-center justify-between w-full px-4 py-2 border-b',
          ['border-gray-300'],
          ['dark:border-black'],
        )}
      >
        <span>
          <span className="uppercase">{language}</span>
          {filename && (
            <span className="hidden sm:inline">
              : <span className="opacity-75">{filename}</span>
            </span>
          )}
        </span>
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
                lineProps.className = `${lineProps.className} bg-gray-300 dark:bg-gray-800 -mx-4 px-4`;
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
