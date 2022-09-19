import "./Prose.css";

interface ProseProps {
  children: React.ReactNode;
}

export const Prose = ({ children }: ProseProps) => {
  return <div className="prose">{children}</div>;
};
