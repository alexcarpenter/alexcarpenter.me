import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "react-feather";
import * as Dialog from "components/primitives/Dialog";
import * as Grid from "components/Grid";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";
import * as styles from "./Banner.css";
import { VisuallyHidden } from "components/VisuallyHidden";

const routes = [
  {
    label: "index",
    href: "/",
  },
  {
    label: "posts",
    href: "/posts",
  },
  {
    label: "activity",
    href: "/activity",
  },
];

const connect = [
  {
    label: "Twitter",
    href: "https://twitter.com/hybrid_alex",
  },
  {
    label: "Github",
    href: "https://github.com/alexcarpenter",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/imalexcarpenter",
  },
];

const Banner = () => {
  const { asPath } = useRouter();
  return (
    <>
      <Grid.Container rowGap="md">
        <Grid.Column colStart={{ xs: "1" }} colEnd={{ xs: "3", md: "1" }}>
          <Text fontWeight="bold">Alex Carpenter</Text>
          <Spacer height="xxs" />
          <Text color="foregroundNeutral">Design Engineer</Text>
        </Grid.Column>

        <Grid.Column
          className={styles.mobileColumn}
          colStart={{ xs: "4" }}
          colEnd={{ xs: "-1" }}
        >
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className={styles.toggle}>
                <span className={styles.toggleHighlight} />
                <Menu />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={styles.panelOverlay} />
              <Dialog.Content className={styles.panelContent}>
                <Text fontWeight="bold">Routes</Text>
                <nav>
                  {routes.map((route) => {
                    return (
                      <React.Fragment key={route.href}>
                        <Spacer height="xs" />
                        <Text color="foregroundNeutral" key={route.href}>
                          <Link
                            href={route.href}
                            aria-current={
                              asPath === route.href ? "page" : undefined
                            }
                          >
                            /{route.label}
                          </Link>
                        </Text>
                      </React.Fragment>
                    );
                  })}
                </nav>

                <Spacer height="xl" />

                <Text fontWeight="bold">Connect</Text>
                {connect.map((network) => {
                  return (
                    <>
                      <Spacer height="xs" />
                      <Text color="foregroundNeutral">
                        <a href={network.href}>{network.label} ↗</a>
                      </Text>
                    </>
                  );
                })}
                <Dialog.Close asChild>
                  <button className={styles.panelClose}>
                    <VisuallyHidden>Close</VisuallyHidden>
                    <X />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </Grid.Column>

        <Grid.Column
          className={styles.desktopColumn}
          colStart={{ xs: "1", md: "2" }}
          colEnd={{ xs: "2", md: "3" }}
        >
          <Text fontWeight="bold">Routes</Text>
          <Spacer height="xxs" />
          <nav>
            {routes.map((route) => {
              return (
                <Text color="foregroundNeutral" key={route.href}>
                  <Link
                    href={route.href}
                    aria-current={asPath === route.href ? "page" : undefined}
                  >
                    /{route.label}
                  </Link>
                </Text>
              );
            })}
          </nav>
        </Grid.Column>

        <Grid.Column
          className={styles.desktopColumn}
          colStart={{ xs: "3", md: "4" }}
          colEnd={{ xs: "-1" }}
        >
          <Text fontWeight="bold">Connect</Text>
          <Spacer height="xxs" />
          {connect.map((network) => {
            return (
              <>
                <Text color="foregroundNeutral">
                  <a href={network.href}>{network.label} ↗</a>
                </Text>
              </>
            );
          })}
        </Grid.Column>
      </Grid.Container>
      <Spacer height="xxxl" />
    </>
  );
};

export { Banner };
