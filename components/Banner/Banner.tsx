import Link from "next/link";
import * as Grid from "components/Grid";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";

const Banner = () => {
  return (
    <>
      <Grid.Container>
        <Grid.Column>
          <Text fontWeight="bold">Alex Carpenter</Text>
          <Spacer height="xxs" />
          <Text color="foregroundNeutral">Design Engineer</Text>
        </Grid.Column>

        <Grid.Column>
          <Text fontWeight="bold">Routes</Text>
          <Spacer height="xxs" />
          <Text color="foregroundNeutral">
            <Link href="/">/index</Link>
          </Text>
          <Text color="foregroundNeutral">
            <Link href="/posts">/posts</Link>
          </Text>
          <Text color="foregroundNeutral">
            <Link href="/activity">/activity</Link>
          </Text>
        </Grid.Column>

        <Grid.Column span="4/4">
          <Text fontWeight="bold">Connect</Text>
          <Spacer height="xxs" />
          <Text color="foregroundNeutral">
            <a href="https://twitter.com/hybrid_alex">Twitter ↗</a>
          </Text>
          <Text color="foregroundNeutral">
            <a href="https://github.com/alexcarpenter">Github ↗</a>
          </Text>
          <Text color="foregroundNeutral">
            <a href="https://www.linkedin.com/in/imalexcarpenter/">
              LinkedIn ↗
            </a>
          </Text>
        </Grid.Column>
      </Grid.Container>
    </>
  );
};

export { Banner };
