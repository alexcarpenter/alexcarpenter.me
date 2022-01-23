import Link from "next/link";
import { cx } from "@/lib/utils";

type CardProps = {
  link?: string;
  eyebrow?: string;
  heading?: string;
};

const Card: React.FC<CardProps> = ({ link, eyebrow, heading, children }) => {
  return (
    <article
      className={cx(
        "relative group flex flex-col flex-grow p-4 sm:p-8 rounded-md overflow-hidden border borderColor",
        "bg-gray-50",
        "dark:bg-gray-900"
      )}
    >
      {eyebrow ? (
        <p className={cx("mb-1 text-sm uppercase tracking-wider")}>{eyebrow}</p>
      ) : null}

      <h3 className="text-lg">
        {link ? (
          <Link href={link}>
            <a className="underline hover:no-underline after:absolute after:inset-0 after:z-10">
              {heading}
            </a>
          </Link>
        ) : (
          <>{heading}</>
        )}
      </h3>
      {children ? children : null}
    </article>
  );
};

export default Card;
