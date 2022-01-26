import { cx } from "@/lib/utils";
import s from "@/styles/prose.module.css";

type PropsProps = {
  className?: string;
};

const Prose: React.FC<PropsProps> = ({ children, className }) => {
  return <div className={cx(s.prose, className)}>{children}</div>;
};

export default Prose;
