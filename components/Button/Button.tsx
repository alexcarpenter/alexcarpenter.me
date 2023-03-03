import { Slot } from "@radix-ui/react-slot";
import * as styles from "./Button.css";

type ButtonProps = ButtonVariants & {
  asChild?: boolean;
};

const Button = ({ asChild, size = "sm", ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={styles.root} {...props} />;
};

export { Button };
