import slugify from "@sindresorhus/slugify";
import Image from "next/legacy/image";
import { Carousel } from "components/Carousel";
import { Heading } from "components/Heading";
import { Link } from "components/Link";
import { Text } from "components/Text";
import { YoutubeEmbed } from "components/YoutubeEmbed";

export const Components = {
  Carousel,
  Image,
  YoutubeEmbed,
  a: (props: any) => <Link {...props} variant="highlight" />,
  p: (props: any) => <Text {...props} />,
  h2: (props: any) => (
    <Heading {...props} fontSize="xl" id={slugify(props.children)} />
  ),
  h3: (props: any) => (
    <Heading {...props} as="h3" fontSize="lg" id={slugify(props.children)} />
  ),
};
