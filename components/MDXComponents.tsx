import { cx } from "@/lib/utils";
import Image from "next/image";
import Card from "@/components/Card";
import Code from "@/components/Code";
import Note from "@/components/Note";
import YoutubeEmbed from "@/components/YoutubeEmbed";

export const components = {
  Card,
  Image,
  Note,
  pre: Code,
  Spacer: () => {
    return <span aria-hidden={true} className={cx("m-0 block h-6")} />;
  },
  YoutubeEmbed,
};
