import slugify from "@sindresorhus/slugify";
import { onlyText } from "react-children-utilities";
import Image from "next/image";
import { Heading } from "components/Heading";
import { ImageCarousel } from "components/ImageCarousel";
import { Text } from "components/Text";
import { YoutubeEmbed } from "components/YoutubeEmbed";

export const Components = {
  ImageCarousel,
  Image,
  p: (props: any) => <Text {...props} />,
  h2: (props: any) => (
    <Heading {...props} fontSize="lg" id={slugify(onlyText(props.children))} />
  ),
  h3: (props: any) => (
    <Heading {...props} as="h3" id={slugify(onlyText(props.children))} />
  ),
  YoutubeEmbed,
};
