import Link from "next/link";
import { Menu } from "react-feather";
import * as Grid from "components/Grid";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";
import * as styles from "./Banner.css";

const Banner = () => {
  return (
    <>
      <Grid.Container rowGap="md">
        <Grid.Column colStart={{ xs: "1" }} colEnd={{ xs: "-1", md: "1" }}>
          <Text fontWeight="bold">Alex Carpenter</Text>
          <Spacer height="xxs" />
          <Text color="foregroundNeutral">Design Engineer</Text>
        </Grid.Column>

        {/* <Grid.Column colStart={{ xs: "4" }} colEnd={{ xs: "-1" }}>
          <button className={styles.toggle}>
            <span className={styles.toggleHighlight} />
            <Menu />
          </button>
        </Grid.Column> */}

        <Grid.Column
          colStart={{ xs: "1", md: "2" }}
          colEnd={{ xs: "2", md: "3" }}
        >
          <Text fontWeight="bold">Routes</Text>
          <Spacer height="xxs" />
          <nav>
            <Text color="foregroundNeutral">
              <Link href="/">/index</Link>
            </Text>
            <Text color="foregroundNeutral">
              <Link href="/posts">/posts</Link>
            </Text>
            <Text color="foregroundNeutral">
              <Link href="/activity">/activity</Link>
            </Text>
          </nav>
        </Grid.Column>

        <Grid.Column colStart={{ xs: "3", md: "4" }} colEnd={{ xs: "-1" }}>
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
      <Spacer height="xxxl" />
    </>
  );
};

export { Banner };
