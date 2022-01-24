//@ts-nocheck
import { Children } from "react";
import { cx } from "@/lib/utils";
import rangeParser from "parse-numeric-range";
import Highlight, { defaultProps } from "prism-react-renderer";
import useClipboard from "react-use-clipboard";

var theme = {
  plain: {
    color: "inherit",
    backgroundColor: "transparent",
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "inherit",
        opacity: "0.75",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "inherit",
        opacity: "0.75",
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
    }, {})
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

const getCodeDataFromChildren = (children) => {
  const childrenArray = Children.toArray(children);
  const codeChild = childrenArray[0];

  if (codeChild) {
    return {
      source: codeChild.props.children.trim(),
      className: codeChild.props.className,
    };
  }

  return {};
};

export default function Code({ children }) {
  const { source, className } = getCodeDataFromChildren(children);
  const [isCopied, setCopied] = useClipboard(source, {
    successDuration: 2000,
  });
  const [language, { filename = ``, highlight = `` }] = getParams(className);
  const shouldHighlightLine = calculateLinesToHighlight(highlight);
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded border",
        ["bg-gray-50 border-gray-200"],
        ["dark:text-white dark:bg-gray-900 dark:border-gray-700"]
      )}
    >
      <div
        className={cx(
          "flex items-center justify-between w-full px-4 py-2 border-b",
          "border-gray-200",
          "dark:border-gray-700"
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
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={source}
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
              overflow: "auto",
              padding: 16,
            }}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              if (shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} bg-gray-100 dark:bg-gray-800 -mx-4 px-4`;
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
