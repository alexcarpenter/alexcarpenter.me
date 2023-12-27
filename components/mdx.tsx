"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";
import { ButtonLink } from "./button-link";
import { Columns } from "./columns";
import { DescriptionList } from "./description-list";
import { ImageCarousel } from "./image-carousel";
import { MediaObject } from "./media-object";
import { Note } from "./note";
import { Spacer } from "./spacer";

const components = {
  Badge,
  ButtonLink,
  Columns,
  DescriptionList,
  Image,
  ImageCarousel,
  MediaObject,
  Note,
  Spacer,
  SearchLink: (props: { children: string }) => {
    return (
      <a
        href={`https://duckduckgo.com/?q=${props.children}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  },
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
