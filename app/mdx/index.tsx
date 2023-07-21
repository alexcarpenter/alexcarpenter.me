"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import { slugify } from "@/lib/formatting";
import { onlyText } from "@/lib/utils";
import Image from "next/image";
import { ImageCarousel } from "./image-carousel";

const components = {
  Image,
  ImageCarousel,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} id={slugify(onlyText(props.children))} />
  ),
  Eyebrow: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      {...props}
      className="eyebrow font-variable-semibold tracking text-xs uppercase tracking-widest text-foreground-neutral"
    />
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
