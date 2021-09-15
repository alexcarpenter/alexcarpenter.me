import ThemeToggle from '@/components/ThemeToggle';

const Base: React.FC = ({ children }) => {
  return (
    <div>
      <ThemeToggle />
      {children}
    </div>
  );
};

export default Base;
