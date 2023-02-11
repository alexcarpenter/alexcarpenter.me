import Link from "next/link";
import type { Activity } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Text } from "components/Text";
import { Components } from "components/MDXComponents";
import { Prose } from "components/Prose";
import * as styles from "./ActivityItem.css";

const ActivityItem = ({ date, formattedDate, slug, body }: Activity) => {
  const MDXContent = useMDXComponent(body.code);
  return (
    <article>
      <Prose>
        <MDXContent components={Components} />
      </Prose>
      <Link href={`/activity/${slug}`} className={styles.anchor}>
        <Text as="time" dateTime={date} color="foregroundNeutral" fontSize="sm">
          {formattedDate}
        </Text>
      </Link>
    </article>
  );
};

export { ActivityItem };
