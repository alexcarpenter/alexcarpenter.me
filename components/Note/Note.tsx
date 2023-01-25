import { Info } from "react-feather";
import * as styles from "./Note.css";

const Note = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <Info width={".8em"} height={".8em"} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export { Note };
