"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";
import { ButtonLink } from "./button-link";
import { Columns } from "./columns";
import { ImageCarousel } from "./image-carousel";
import { Note } from "./note";
import { Spacer } from "./spacer";

const components = {
  // Custom components
  Badge,
  ButtonLink,
  Columns,
  Image,
  ImageCarousel,
  Note,
  Spacer,
  // Navtive elements
  a: (props: any) => {
    if (props.href.startsWith("/")) {
      return <Link {...props} />;
    }

    return <a {...props} />;
  },
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
