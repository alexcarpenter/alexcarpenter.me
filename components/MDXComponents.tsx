import slugify from "@sindresorhus/slugify";
import Image from "next/image";
import { Heading } from "components/Heading";
import { Link } from "components/Link";
import { Text } from "components/Text";

export const Components = {
  Image,
  a: (props: any) => <Link {...props} />,
  p: (props: any) => <Text {...props} />,
  h2: (props: any) => (
    <Heading {...props} fontSize="xl" id={slugify(props.children)} />
  ),
  h3: (props: any) => (
    <Heading {...props} as="h3" fontSize="lg" id={slugify(props.children)} />
  ),
};
