import { Slot } from "@radix-ui/react-slot";
import * as styles from "./Button.css";

interface ButtonProps {
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = ({ asChild, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={styles.root} {...props} />;
};

export { Button };
