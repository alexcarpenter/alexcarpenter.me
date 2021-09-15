import * as style from './style.css';

interface Props {
  targetSelector: string;
  children: string;
}

export const SkipLink = ({ targetSelector, children }: Props) => {
  return (
    <a className={style.skipLink} href={targetSelector}>
      {children}
    </a>
  );
};
