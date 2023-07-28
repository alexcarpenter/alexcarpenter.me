"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import { slugify, onlyText } from "@/app/utils";
import Image from "next/image";
import { ImageCarousel } from "./image-carousel";
import { Note } from "./note";

const components = {
  Image,
  ImageCarousel,
  Note,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} id={slugify(onlyText(props.children))} />
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
