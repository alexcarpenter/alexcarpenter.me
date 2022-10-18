import * as React from "react";
import Image from "next/image";
import * as styles from "./styles.css";

const HashiCorpHero = () => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <div className={styles.root} data-state={loaded ? "loaded" : "loading"}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <Image
          src="/img/hashicorp-hero.svg"
          width={800}
          height={300}
          alt=""
          priority
          onLoadingComplete={() => {
            setLoaded(true);
          }}
          style={{
            borderRadius: 10,
          }}
        />
      </div>
    </div>
  );
};

export { HashiCorpHero };
