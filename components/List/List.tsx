import * as styles from "./List.css";

interface ListContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ListContainerProps) => {
  return <ul className={styles.list}>{children}</ul>;
};

interface ListItemProps {
  id?: string;
  hidden?: boolean;
  children: React.ReactNode;
}

const Item = ({ id, hidden, children }: ListItemProps) => {
  return (
    <li className={styles.item} id={id} hidden={hidden}>
      {children}
    </li>
  );
};

export { Container, Item };
