import { cx } from "@/lib/utils";
import { getHostname } from "@/lib/getHostname";
import RightArrow from "./RightArrow";

type IntroProps = {
  title: string;
  description: string;
  link?: string;
};

const Intro = ({ title, description, link }: IntroProps) => {
  return (
    <header
      className={cx(
        "mb-12 pb-12 border-b",
        "border-gray-200",
        "dark:border-gray-700"
      )}
    >
      <h1 className="text-xl">
        {title}
        <span aria-hidden={true}>&nbsp;&#xAC;</span>
      </h1>
      <p className={cx("mt-2", "text-gray-600", "dark:text-gray-300")}>
        {description}
      </p>
      {link ? (
        <p className={cx("mt-2", "text-gray-600", "dark:text-gray-300")}>
          <a href={link}>{getHostname(link)}</a>
          <RightArrow position="end" />
        </p>
      ) : null}
    </header>
  );
};

export default Intro;
