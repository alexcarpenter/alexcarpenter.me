import type { Sprinkles } from "styles/sprinkles.css";
import { cn } from "lib/utils";
import { sprinkles } from "styles/sprinkles.css";
import * as styles from "./Grid.css";

interface GridContainerProps {
  children: React.ReactNode;
  rowGap?: Sprinkles["rowGap"];
}

const Container = ({ rowGap = "none", children }: GridContainerProps) => {
  return (
    <div className={cn(styles.container, sprinkles({ rowGap }))}>
      {children}
    </div>
  );
};

interface GridColumnProps {
  children: React.ReactNode;
  colStart?: Sprinkles["gridColumnStart"];
  colEnd?: Sprinkles["gridColumnEnd"];
}

const Column = ({ colStart, colEnd, children }: GridColumnProps) => {
  return (
    <div
      className={cn(
        sprinkles({
          gridColumnStart: colStart,
          gridColumnEnd: colEnd,
        })
      )}
    >
      {children}
    </div>
  );
};

export { Container, Column };
