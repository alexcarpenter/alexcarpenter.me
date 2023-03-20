import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "react-feather";
import * as Dialog from "components/primitives/Dialog";
import * as Grid from "components/Grid";
import { Text } from "components/Text";
import { TextScrambler } from "components/TextScrambler";
import { Spacer } from "components/Spacer";
import { VisuallyHidden } from "components/VisuallyHidden";
import * as styles from "./Banner.css";

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
  {
    label: "colophon",
    href: "/colophon",
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
  const router = useRouter();
  const [panelOpen, setPanelOpen] = React.useState(false);

  React.useEffect(() => {
    const handleRouteChange = () => {
      setPanelOpen(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid.Container rowGap="md">
        <Grid.Column colStart={{ xs: "1" }} colEnd={{ xs: "4", md: "1" }}>
          <Text fontWeight="bold">
            <Link href="/">Alex Carpenter</Link>
          </Text>
          <Text color="foregroundNeutral">
            <TextScrambler>Design Engineer</TextScrambler>
          </Text>
        </Grid.Column>

        <Grid.Column
          className={styles.mobileColumn}
          colStart={{ xs: "4" }}
          colEnd={{ xs: "-1" }}
        >
          <Dialog.Root open={panelOpen} onOpenChange={setPanelOpen}>
            <Dialog.Trigger asChild>
              <button className={styles.toggle}>
                <span className={styles.toggleHighlight} />
                <VisuallyHidden>Open menu</VisuallyHidden>
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
                              router.asPath === route.href ? "page" : undefined
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
                    <React.Fragment key={network.href}>
                      <Spacer height="xs" />
                      <Text color="foregroundNeutral">
                        <a href={network.href}>{network.label} ↗</a>
                      </Text>
                    </React.Fragment>
                  );
                })}
                <Dialog.Close asChild>
                  <button className={styles.panelClose}>
                    <VisuallyHidden>Close menu</VisuallyHidden>
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
          <nav>
            {routes.map((route) => {
              return (
                <Text color="foregroundNeutral" key={route.href}>
                  <Link
                    href={route.href}
                    aria-current={
                      router.asPath === route.href ? "page" : undefined
                    }
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
          {connect.map((network) => {
            return (
              <Text color="foregroundNeutral" key={network.href}>
                <a href={network.href}>{network.label} ↗</a>
              </Text>
            );
          })}
        </Grid.Column>
      </Grid.Container>
      <Spacer height="xxxl" />
    </>
  );
};

export { Banner };
