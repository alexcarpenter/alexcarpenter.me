import { cn } from "lib/utils";
import * as styles from "./Grid.css";

interface GridContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: GridContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

interface GridColumnProps {
  children: React.ReactNode;
  span?: keyof typeof styles.column;
}

const Column = ({ span, children }: GridColumnProps) => {
  return <div className={cn(span && styles.column[span])}>{children}</div>;
};

export { Container, Column };
