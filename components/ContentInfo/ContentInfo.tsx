import { Heading } from "@/components/Heading";
import { List, ListItem } from "@/components/List";
import { Link } from "@/components/Link";
import { Item, ItemContent, ItemMeta } from "@/components/Item";
import { Spacer } from "@/components/Spacer";
import * as styles from "./ContentInfo.css";

export const ContentInfo = () => {
  return (
    <footer className={styles.root}>
      <Heading decorated>Connect</Heading>
      <Spacer size="xl" />
      <List>
        <ListItem>
          <Item>
            <ItemMeta>Email</ItemMeta>
            <ItemContent>
              <Link href="mailto:im.alexcarpenter@gmail.com">
                im.alexcarpenter@gmail.com
              </Link>
            </ItemContent>
          </Item>
        </ListItem>
        <ListItem>
          <Item>
            <ItemMeta>Twitter</ItemMeta>
            <ItemContent>
              <Link href="https://twitter.com/hybrid_alex">hybrid_alex</Link>
            </ItemContent>
          </Item>
        </ListItem>
        <ListItem>
          <Item>
            <ItemMeta>Github</ItemMeta>
            <ItemContent>
              <Link href="https://github.com/alexcarpenter">alexcarpenter</Link>
            </ItemContent>
          </Item>
        </ListItem>
        <ListItem>
          <Item>
            <ItemMeta>LinkedIn</ItemMeta>
            <ItemContent>
              <Link href="https://www.linkedin.com/in/imalexcarpenter/">
                alexcarpenter
              </Link>
            </ItemContent>
          </Item>
        </ListItem>
      </List>
    </footer>
  );
};
