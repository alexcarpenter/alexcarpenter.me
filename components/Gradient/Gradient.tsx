import { cn } from "lib/utils";
import * as styles from "./Gradient.css";

const Gradient = () => {
  return (
    <div className={styles.root}>
      <span className={cn(styles.blob, styles.left)} />
      <span className={cn(styles.blob, styles.right)} />
    </div>
  );
};

export { Gradient };
