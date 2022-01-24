import Link from "next/link";
import {
  cx,
  slugify,
  formatDate,
  getHostname,
  isInternalLink,
} from "@/lib/utils";
import RightArrow from "@/components/RightArrow";
import Badge from "./Badge";

type EntryProps = {
  link: string;
  date: string;
  title: string;
  description: string;
  tags?: Array<{
    path: string;
    tag: string;
  }>;
};

const Entry = ({ link, date, title, description, tags }: EntryProps) => {
  return (
    <article className="flex flex-col sm:flex-row flex-wrap">
      <div className="w-28 flex-shrink-0">
        <time
          className={cx(
            "mb-2 inline-block",
            "text-gray-600",
            "dark:text-gray-300"
          )}
          dateTime=""
        >
          {formatDate(date)}
        </time>
      </div>
      <div className="flex-1">
        <h3>
          <Link href={link}>
            <a className="underline hover:no-underline">{title}</a>
          </Link>
          <RightArrow position="end" />
        </h3>
        {isInternalLink(link) ? null : (
          <p className={cx("text-sm", "text-gray-600", "dark:text-gray-300")}>
            {getHostname(link)}
          </p>
        )}
        <p className={cx("mt-4", "text-gray-600", "dark:text-gray-300")}>
          {description}
        </p>
        {tags ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map(({ path, tag }, index) => {
              const tagSlug = slugify(tag);
              return (
                <li key={index}>
                  <Badge href={path}>{tagSlug}</Badge>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </article>
  );
};

export default Entry;
