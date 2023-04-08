import * as React from "react";
import * as Grid from "components/Grid";
import { Spacer } from "components/Spacer";
import { Text } from "components/Text";
import { ThemeToggle } from "components/ThemeToggle";

const ContentInfo = () => {
  return (
    <footer>
      <Spacer height="xxxl" />
      <Grid.Container alignItems="center" rowGap="lg">
        <Grid.Column
          colStart={{ xs: "1", md: "2" }}
          colEnd={{ xs: "-1", md: "4" }}
        >
          <ThemeToggle />
        </Grid.Column>

        <Grid.Column colStart={{ xs: "1", md: "4" }} colEnd={{ xs: "-1" }}>
          <Text fontSize="sm" color="foregroundNeutral">
            &ldquo;Less but better&rdquo;
          </Text>

          <Text fontSize="xs" color="foregroundNeutral">
            &nbsp;&nbsp;&mdash; Dieter Rams
          </Text>
        </Grid.Column>
      </Grid.Container>
    </footer>
  );
};

export { ContentInfo };
