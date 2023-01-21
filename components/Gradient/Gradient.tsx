import { cn } from "lib/utils";
import { motion } from "framer-motion";
import * as styles from "./Gradient.css";

const Gradient = () => {
  return (
    <div className={styles.root} aria-hidden>
      <span className={cn(styles.blob, styles.left)} />
      <span className={cn(styles.blob, styles.right)} />
    </div>
  );
};

export { Gradient };
