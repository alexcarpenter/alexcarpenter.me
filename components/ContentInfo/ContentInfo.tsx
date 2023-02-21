import * as Grid from "components/Grid";
import { Spacer } from "components/Spacer";
import { ThemeToggle } from "components/ThemeToggle";

const ContentInfo = () => {
  return (
    <>
      <Spacer height="xxxl" />
      <Grid.Container>
        <Grid.Column
          colStart={{ xs: "1", md: "2" }}
          colEnd={{ xs: "-1", md: "4" }}
        >
          <ThemeToggle />
        </Grid.Column>
      </Grid.Container>
    </>
  );
};

export { ContentInfo };
