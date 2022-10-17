import Image from "next/image";
import * as styles from "./styles.css";

const HashiCorpHero = () => {
  return (
    <div className={styles.root}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <Image
          src="/img/hashicorp-hero.svg"
          width={800}
          height={300}
          alt=""
          priority
        />
      </div>
    </div>
  );
};

export { HashiCorpHero };
