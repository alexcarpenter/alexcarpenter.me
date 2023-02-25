import * as React from "react";
import { useInterval, useMounted } from "lib/hooks";
import { getScrambledState } from "./utils";
import * as styles from "./TextScrambler.css";

/**
 * TextScrambler
 *
 * @see https://www.nan.fyi/experiments/scrambled-text
 */

const TextScrambler = ({
  children,
  speed = 0.3,
}: {
  children: string;
  speed?: number;
}) => {
  const mounted = useMounted();
  const size = children.length;

  const [[unscrambled, scrambled], setScrambledText] = React.useState(
    getScrambledState(children, size, 0)
  );
  const [count, increment] = React.useReducer((state) => state + 1, 0);
  const finished = count > size;

  useInterval(
    () => {
      increment();
      setScrambledText(getScrambledState(children, size, count));
    },
    finished ? null : 30 / speed
  );

  return (
    <span className={styles.root}>
      <span className={styles.placeholder}>{children}</span>
      {mounted ? (
        <span className={styles.scrambled} aria-hidden={true}>
          {unscrambled}
          {scrambled}
        </span>
      ) : null}
    </span>
  );
};

export { TextScrambler };
