import * as style from './style.css';

export const VisuallyHidden: React.FC = ({ children }) => {
  return <span className={style.visuallyHidden}>{children}</span>;
};
