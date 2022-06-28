import * as styles from "./Item.css";

interface ItemProps {
  children: React.ReactNode;
}

interface ItemMetaProps {
  children: React.ReactNode;
}

interface ItemContentProps {
  children: React.ReactNode;
}

export const Item = ({ children }: ItemProps) => {
  return <article className={styles.root}>{children}</article>;
};

export const ItemMeta = ({ children }: ItemMetaProps) => {
  return <span className={styles.meta}>{children}</span>;
};

export const ItemContent = ({ children }: ItemContentProps) => {
  return <span className={styles.content}>{children}</span>;
};
