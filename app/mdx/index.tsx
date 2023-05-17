"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import { ImageCarousel } from "./image-carousel";

const components = {
  Image,
  ImageCarousel,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
