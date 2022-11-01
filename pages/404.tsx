import * as React from "react";
import type { NextPage } from "next";
import { Box } from "components/Box";
import { Heading } from "components/Heading";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";

const FourOhFour: NextPage = () => {
  return (
    <>
      <Box
        as="header"
        textAlign={{ md: "center" }}
        maxWidth="container"
        marginX="auto"
      >
        <Heading fontSize={{ xs: "xxl", sm: "xxxl" }} as="h1">
          404
        </Heading>
        <Spacer height="xl" />
        <Text
          fontSize={{ xs: "lg", sm: "xl" }}
          color="foregroundNeutral"
          style={{
            display: "inline-flex",
          }}
        >
          Page not found
        </Text>
      </Box>
    </>
  );
};

export default FourOhFour;
