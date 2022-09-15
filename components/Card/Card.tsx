import * as styles from "./Card.css";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <article className={styles.root}>{children}</article>;
};

export { Card };
