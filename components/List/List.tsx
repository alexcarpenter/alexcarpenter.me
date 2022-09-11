import * as React from "react";
import * as styles from "./List.css";

const List = ({ children }: { children: React.ReactNode }) => {
  return <ul className={styles.root}>{children}</ul>;
};

const Item = ({ children }: { children: React.ReactNode }) => {
  return <li className={styles.item}>{children}</li>;
};

List.Item = Item;

export { List };
