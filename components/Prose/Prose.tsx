import * as styles from "./Prose.css";

interface ProseProps {
  children: React.ReactNode;
}

const Prose = ({ children }: ProseProps) => {
  return <div className={styles.root}>{children}</div>;
};

export { Prose };
