import { cx } from "@/lib/utils";
import Image from "next/image";
import Card from "@/components/Card";
import Code from "@/components/Code";
import Highlights from "@/components/Hightlights";
import Note from "@/components/Note";
import Video from "@/components/Video";

export const components = {
  Card,
  Image,
  Highlights,
  Note,
  pre: Code,
  Spacer: () => {
    return <span aria-hidden={true} className={cx("m-0 block h-6")} />;
  },
  Video,
};
