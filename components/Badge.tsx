import Link from "next/link";
import { cx } from "@/lib/utils";

type BadgeProps = {
  children: string;
  href?: string;
};

const Badge: React.FC<BadgeProps> = ({ children, href }) => {
  const classNames = cx(
    "inline-block text-sm py-0.5 px-2.5 rounded-full",
    "bg-gray-200",
    "dark:bg-gray-800",
    [href && "hover:underline"]
  );
  if (href) {
    return (
      <Link href={href}>
        <a className={classNames}>{children}</a>
      </Link>
    );
  }
  return <span className={classNames}>{children}</span>;
};

export default Badge;
