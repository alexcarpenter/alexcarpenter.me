import { cx } from "@/lib/utils";

type RightArrowProps = {
  position: "start" | "end";
};

const RightArrow = ({ position }: RightArrowProps) => {
  const NBSP = "\u00a0";
  return (
    <>
      {position === "end" && NBSP}
      <span
        role="img"
        aria-hidden="true"
        className={cx("flex-shrink-0", "text-gray-600", "dark:text-gray-300")}
      >
        &#8594;
      </span>
      {position === "start" && NBSP}
    </>
  );
};

export default RightArrow;
