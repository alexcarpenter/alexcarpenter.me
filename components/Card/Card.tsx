import * as styles from "./Card.css";

const Card = ({ children }) => {
  return <article className={styles.root}>{children}</article>;
};

export { Card };
