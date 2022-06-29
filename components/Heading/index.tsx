import * as styles from "./Heading.css";

export interface HeadingProps {
  as?: "h2" | "h3";
  decorated?: boolean;
  children: React.ReactNode;
}

export const Heading = ({
  as: Component = "h2",
  decorated = false,
  children,
}: HeadingProps) => {
  return (
    <Component className={styles.root}>
      {children}
      {decorated ? (
        <>
          &nbsp;<span aria-hidden={true}>¬</span>
        </>
      ) : null}
    </Component>
  );
};
