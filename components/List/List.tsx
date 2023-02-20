import * as styles from "./List.css";

interface ListContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ListContainerProps) => {
  return <ul className={styles.list}>{children}</ul>;
};

interface ListItemProps {
  children: React.ReactNode;
}

const Item = ({ children }: ListItemProps) => {
  return <li className={styles.item}>{children}</li>;
};

export { Container, Item };
