import RightArrow from "./RightArrow";
import { cx } from "@/lib/utils";

interface NoteProps {
  variant?: keyof typeof variants;
  label?: string;
  children: React.ReactNode;
}

const variants = {
  orange: cx(
    "bg-orange-200 text-orange-800",
    "dark:bg-orange-600 dark:text-white"
  ),
  emerald: cx(
    "bg-emerald-200 text-emerald-800",
    "dark:bg-emerald-800 dark:text-white"
  ),
  violet: cx(
    "bg-violet-200 text-violet-800",
    "dark:bg-violet-800 dark:text-white"
  ),
  gray: cx("bg-gray-200", "dark:bg-gray-900"),
  ghost: cx("border", "border-gray-200", "dark:border-gray-800"),
};

export default function Note({
  variant = "gray",
  label = "Note",
  children,
}: NoteProps) {
  return (
    <div className={cx("p-4 rounded-md flex", [variants[variant]])}>
      <span className="mr-2 flex-shrink-0">
        <RightArrow position="start" fill="currentColor" />
      </span>
      <p className="prose">
        <span className="uppercase">{label}</span>: {children}
      </p>
    </div>
  );
}
