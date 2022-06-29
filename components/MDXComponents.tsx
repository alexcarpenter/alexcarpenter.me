import Image from "next/image";
import { Link, LinkProps } from "@/components/Link";
import { Heading, HeadingProps } from "@/components/Heading";

export const Components = {
  Image,
  a: (props: LinkProps) => <Link {...props} />,
  h2: (props: HeadingProps) => <Heading as="h2" {...props} />,
  h3: (props: HeadingProps) => <Heading as="h3" {...props} />,
};
