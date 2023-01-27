import slugify from "@sindresorhus/slugify";
import { ImageCarousel } from "components/ImageCarousel";
import { Heading } from "components/Heading";
import { Link } from "components/Link";
import { Note } from "components/Note";
import { Text } from "components/Text";
import { YoutubeEmbed } from "components/YoutubeEmbed";
import { Image } from "./Image";

export const Components = {
  ImageCarousel,
  Image,
  Note,
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
