import { cx } from "@/lib/utils";

type IntroProps = {
  title: string;
  description: string;
};

const Intro = ({ title, description }: IntroProps) => {
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
    </header>
  );
};

export default Intro;
