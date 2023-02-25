import * as React from "react";

const useInterval = (callback: Function, delay?: number | null) => {
  const savedCallback = React.useRef<Function>(() => {});
  React.useEffect(() => {
    savedCallback.current = callback;
  });
  React.useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [delay]);
};

export { useInterval };
