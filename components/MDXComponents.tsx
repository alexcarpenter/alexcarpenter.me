import type { ImageProps } from "next/legacy/image";
import Image from "next/legacy/image";
import slugify from "@sindresorhus/slugify";
import { ImageCarousel } from "components/ImageCarousel";
import { Heading } from "components/Heading";
import { Link } from "components/Link";
import { Text } from "components/Text";
import { YoutubeEmbed } from "components/YoutubeEmbed";

export const Components = {
  ImageCarousel,
  Image: (props: ImageProps & { rounded: boolean }) => {
    const { rounded = true } = props;
    return (
      <Image
        {...props}
        alt={props.alt}
        style={{
          borderRadius: rounded ? 10 : undefined,
        }}
      />
    );
  },
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
