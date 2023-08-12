"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "./button-link";
import { ImageCarousel } from "./image-carousel";
import { Note } from "./note";

const components = {
  Image,
  ButtonLink,
  ImageCarousel,
  Note,
  a: (props: any) => {
    if (props.href.startsWith("/")) {
      return <Link {...props} />;
    } else {
      return <a {...props} />;
    }
  },
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
