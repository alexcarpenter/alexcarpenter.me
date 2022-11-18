import type { Activity } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Text } from "components/Text";
import { Components } from "components/MDXComponents";
import * as styles from "./ActivityItem.css";

export type FormattedActivity = Activity & {
  formattedDate: string;
};

const ActivityItem = ({ date, formattedDate, body }: FormattedActivity) => {
  const MDXContent = useMDXComponent(body.code);
  return (
    <article>
      <div className={styles.content}>
        <MDXContent components={Components} />
      </div>
      <Text as="time" dateTime={date} color="foregroundNeutral" fontSize="sm">
        {formattedDate}
      </Text>
    </article>
  );
};

export { ActivityItem };
