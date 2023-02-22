import type { Sprinkles } from "styles/sprinkles.css";
import { cn } from "lib/utils";
import { sprinkles } from "styles/sprinkles.css";
import * as styles from "./Grid.css";

interface GridContainerProps {
  children: React.ReactNode;
  colGap?: Sprinkles["columnGap"];
  rowGap?: Sprinkles["rowGap"];
}

const Container = ({
  colGap = "xxxl",
  rowGap = "none",
  children,
}: GridContainerProps) => {
  return (
    <div
      className={cn(styles.container, sprinkles({ columnGap: colGap, rowGap }))}
    >
      {children}
    </div>
  );
};

interface GridColumnProps {
  children: React.ReactNode;
  colStart?: Sprinkles["gridColumnStart"];
  colEnd?: Sprinkles["gridColumnEnd"];
  rowStart?: Sprinkles["gridRowStart"];
  rowEnd?: Sprinkles["gridRowEnd"];
}

const Column = ({
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  children,
}: GridColumnProps) => {
  return (
    <div
      className={cn(
        sprinkles({
          gridColumnStart: colStart,
          gridColumnEnd: colEnd,
          gridRowStart: rowStart,
          gridRowEnd: rowEnd,
        })
      )}
    >
      {children}
    </div>
  );
};

export { Container, Column };
