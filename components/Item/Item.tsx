import * as styles from "./Item.css";

interface ItemProps {
  as?: "article" | "div";
  children: React.ReactNode;
}

interface ItemMetaProps {
  children: React.ReactNode;
}

interface ItemContentProps {
  children: React.ReactNode;
}

export const Item = ({ as: Component = "article", children }: ItemProps) => {
  return <Component className={styles.root}>{children}</Component>;
};

export const ItemMeta = ({ children }: ItemMetaProps) => {
  return <span className={styles.meta}>{children}</span>;
};

export const ItemContent = ({ children }: ItemContentProps) => {
  return <span className={styles.content}>{children}</span>;
};
