import * as styles from "./List.css";

const Container = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

const Item = ({ children }) => {
  return <li className={styles.item}>{children}</li>;
};

export { Container, Item };
