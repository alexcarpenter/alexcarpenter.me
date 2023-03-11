import { Slot } from "@radix-ui/react-slot";
import { cn } from "lib/utils";
import * as styles from "./Link.css";

interface LinkProps {
  children: React.ReactNode;
  underlined?: boolean;
}

const Link = ({ ...props }: LinkProps) => {
  const { underlined, ...restProps } = props;
  return (
    <Slot {...restProps} className={cn(underlined && styles.underlined)} />
  );
};

export { Link };
