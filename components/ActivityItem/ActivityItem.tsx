import type { Activity } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { formatDateTime } from "lib/utils";
import { Text } from "components/Text";
import { Components } from "components/MDXComponents";
import * as styles from "./ActivityItem.css";

const ActivityItem = ({ date, body }: Activity) => {
  const MDXContent = useMDXComponent(body.code);
  return (
    <article>
      <div className={styles.content}>
        <MDXContent components={Components} />
      </div>
      <Text as="time" dateTime={date} color="foregroundNeutral" fontSize="sm">
        {formatDateTime(date)}
      </Text>
    </article>
  );
};

export { ActivityItem };
