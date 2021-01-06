import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import useClipboard from 'react-use-clipboard';
import { Copy } from 'react-feather';

export default function Code({ children, className }) {
  const [isCopied, setCopied] = useClipboard(children.trim(), {
    successDuration: 2000,
  });
  const language = className.replace(/language-/, '');
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
          <Copy size={'1em'} className="ml-2" />
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
    </div>
  );
}
