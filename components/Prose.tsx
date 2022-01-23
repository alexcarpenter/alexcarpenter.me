import s from "@/styles/prose.module.css";

const Prose: React.FC = ({ children }) => {
  return <div className={s.prose}>{children}</div>;
};

export default Prose;
