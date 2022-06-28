import * as styles from "./List.css";

interface ListProps {
  as?: "ul" | "ol";
  children: React.ReactNode;
}

interface ListItemProps {
  children: React.ReactNode;
}

export const List = ({ as: Component = "ul", children }: ListProps) => {
  return <Component className={styles.root}>{children}</Component>;
};

export const ListItem = ({ children }: ListItemProps) => {
  return <li>{children}</li>;
};
