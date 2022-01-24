import Link from "next/link";
import { cx } from "@/lib/utils";
import RightArrow from "./RightArrow";

type CardProps = {
  variant?: keyof typeof variants;
  link?: string;
  cta?: string;
  eyebrow?: string;
  title?: string;
  description?: never;
};

const variants = {
  orange: "text-orange-600",
  emerald: "text-emerald-600",
  violet: "text-violet-600",
  blue: "text-blue-600",
  amber: "text-amber-600",
  red: "text-red-600",
  gray: "text-secondary",
};

const Card: React.FC<CardProps> = ({
  variant = "orange",
  link,
  cta,
  eyebrow,
  title,
  description,
  children,
}) => {
  return (
    <article
      className={cx(
        "relative group flex flex-col flex-grow p-4 sm:p-8 rounded-md overflow-hidden border",
        "bg-gray-50 border-gray-200",
        "dark:bg-gray-900 dark:border-gray-700"
      )}
    >
      {eyebrow ? (
        <p
          className={cx(
            "mb-1 text-sm uppercase tracking-wider",
            variant && variants[variant]
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <h3 className="text-lg">
        {link ? (
          <Link href={link}>
            <a className="underline hover:no-underline after:absolute after:inset-0 after:z-10">
              {title}
            </a>
          </Link>
        ) : (
          <>{title}</>
        )}
      </h3>
      {description ? (
        <p className="mt-4 mb-0 text-base opacity-75">{description}</p>
      ) : null}
      {children ? children : null}
      {link && (
        <div className="mt-auto pt-4 sm:pt-8 flex justify-end items-center transition-transform group-hover:translate-x-[2px]">
          {cta ? (
            <span className={cx("text-sm", variant && variants[variant])}>
              {cta}
            </span>
          ) : null}
          <RightArrow
            position="end"
            fill={variant ? variants[variant] : undefined}
          />
        </div>
      )}
    </article>
  );
};

export default Card;
