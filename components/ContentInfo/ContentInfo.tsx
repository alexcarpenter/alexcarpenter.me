import { Box } from "@/components/Box";
import { Heading } from "@/components/Heading";
import { List, ListItem } from "@/components/List";
import { Link } from "@/components/Link";
import { Spacer } from "@/components/Spacer";
import * as styles from "./ContentInfo.css";

const items: Array<{
  heading: string;
  link: string;
  label: string;
}> = [
  {
    heading: "Email",
    link: "mailto:im.alexcarpenter@gmail.com",
    label: "im.alexcarpenter@gmail.com",
  },
  {
    heading: "Twitter",
    link: "https://twitter.com/hybrid_alex",
    label: "hybrid_alex",
  },
  {
    heading: "Github",
    link: "https://github.com/alexcarpenter",
    label: "alexcarpenter",
  },
  {
    heading: "LinkedIn",
    link: "https://www.linkedin.com/in/imalexcarpenter/",
    label: "alexcarpenter",
  },
];

export const ContentInfo = () => {
  return (
    <footer className={styles.root}>
      <Heading decorated>Connect</Heading>
      <Spacer height="xl" />
      <List>
        {items.map((item) => {
          return (
            <ListItem key={item.heading}>
              <Box
                display="grid"
                columnGap="xl"
                gridTemplateColumns={{
                  sm: "1fr",
                  md: "8rem 1fr",
                }}
              >
                <span>{item.heading}</span>
                <div>
                  <Link href={item.link}>{item.label}</Link>
                </div>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </footer>
  );
};
