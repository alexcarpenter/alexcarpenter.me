import { cx } from "@/lib/utils";
import Image from "next/image";
import Card from "@/components/Card";
import Code from "@/components/Code";
import ExternalLink from "@/components/ExternalLink";
import Highlights from "@/components/Hightlights";
import Meta from "@/components/Meta";
import Note from "@/components/Note";
import Slideshow from "@/components/Slideshow";
import Video from "@/components/Video";

export const components = {
  Card,
  ExternalLink,
  Image,
  Highlights,
  Note,
  PersonMeta: ({
    avatar,
    meta,
  }: {
    meta: Array<{
      title: string;
      description: string;
    }>;
    avatar: {
      src: string;
      alt: string;
    };
  }) => {
    return (
      <div className="relative clear-both">
        <div className="relative float-right w-1/3 ml-4 md:ml-8 mb-4 md:mb-8 inline-flex rounded-md overflow-hidden">
          <Image src={avatar.src} width={400} height={400} alt={avatar.alt} />
        </div>
        <Meta items={meta} />
      </div>
    );
  },
  pre: Code,
  Slideshow,
  Spacer: () => {
    return <span aria-hidden={true} className={cx("m-0 block h-6")} />;
  },
  Video,
};
