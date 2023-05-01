import * as React from "react";
import type { NextPage } from "next";
import type { Bookmark } from "contentlayer/generated";
import { NextSeo } from "next-seo";
import { formatDate } from "lib/utils";
import { linkStyles } from "styles/link.css";
import * as Grid from "components/Grid";
import * as List from "components/List";
import { Heading } from "components/Heading";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";
import { allBookmarks } from "contentlayer/generated";

export async function getStaticProps() {
  const bookmarks = allBookmarks
    .sort((a, b) => {
      return Number(new Date(b.date)) - Number(new Date(a.date));
    })
    .map(({ body, _raw, ...p }) => {
      return p;
    });
  return { props: { title: "Bookmarks", bookmarks } };
}

const Bookmarks: NextPage<{
  title: string;
  bookmarks: Bookmark[];
}> = ({ bookmarks }) => {
  return (
    <>
      <NextSeo title="Bookmarks" />

      <Grid.Container>
        <Grid.Column
          colStart={{ xs: "1", md: "2" }}
          colEnd={{ xs: "-1", md: "4" }}
        >
          <Heading fontSize="xxxxl" as="h1">
            Bookmarks
          </Heading>
          <Spacer height="xxs" />
          <Text color="foregroundNeutral" fontSize="xxl" fontFamily="serif">
            Saving for later.
          </Text>
        </Grid.Column>
      </Grid.Container>

      <Spacer height="xxxl" />

      <section>
        <List.Container>
          {bookmarks.map(({ _id, title, description, date, url }) => {
            return (
              <List.Item key={_id}>
                <Grid.Container key={_id} rowGap="md">
                  <Grid.Column
                    colStart={{ xs: "1", sm: "2" }}
                    colEnd={{ xs: "-1", md: "4" }}
                  >
                    <Text color="foregroundNeutral" fontSize="sm">
                      {new URL(url).hostname}
                    </Text>
                    <Spacer height="xxs" />
                    <Heading>
                      <a href={url} className={linkStyles()}>
                        {title}
                      </a>{" "}
                      ↗
                    </Heading>
                    {description ? (
                      <>
                        <Spacer height="sm" />
                        <Text color="foregroundNeutral">{description}</Text>
                      </>
                    ) : null}
                  </Grid.Column>

                  <Grid.Column
                    colStart={{ xs: "1" }}
                    colEnd={{ xs: "-1", sm: "1" }}
                    rowStart={{ sm: "1" }}
                  >
                    <Text
                      as="time"
                      dateTime={date}
                      color="foregroundNeutral"
                      fontSize="sm"
                    >
                      {formatDate(date)}
                    </Text>
                  </Grid.Column>
                </Grid.Container>
              </List.Item>
            );
          })}
        </List.Container>
      </section>
    </>
  );
};

export default Bookmarks;
