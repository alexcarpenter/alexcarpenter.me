import { VisuallyHidden } from "components/VisuallyHidden";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./Banner.css";

const Banner = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <header className={styles.banner}>
        <Link href="/" className={styles.avatar}>
          <VisuallyHidden>Home</VisuallyHidden>
          <Image
            src="/img/me.jpeg"
            width={48}
            height={48}
            alt="Photo of Alex Carpenter at desk"
            style={{
              borderRadius: 10,
            }}
            priority
          />
          <span className={styles.logo}>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={32}
              height={32}
              focusable={false}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.403 8.22c1.655 0 3.579.45 5.203 1.35v7.421c0 2.494.391 3.275 1.413 3.275 1.443 0 2.496-1.502 2.496-6.369 0-5.228-2.888-8.442-9.141-8.442C9.909 5.455 6.3 9.811 6.3 16.061c0 6.398 3.488 10.424 10.103 10.424 2.075 0 4.36-.45 5.924-1.02l1.113 3.274c-1.895.72-4.541 1.261-7.066 1.261C7.654 30 2 24.563 2 16.06 2 7.889 8.013 2 16.403 2c8.54 0 13.382 5.678 13.382 11.838 0 5.437-2.586 9.373-6.556 9.373-2.405 0-3.698-1.593-4.028-3.065-.723 1.683-2.106 2.945-4.301 2.945-3.818 0-5.502-2.885-5.502-6.76 0-4.927 2.555-8.112 7.005-8.112zm-.872 11.896c1.083 0 1.715-.78 2.045-1.472v-7.15c-.451-.18-.811-.27-1.323-.27-1.563 0-2.556 1.261-2.556 5.137 0 2.764.572 3.755 1.834 3.755z"
                fill="#fff"
              />
            </svg>
          </span>
        </Link>
        <button className={styles.toggle} onClick={() => setOpen(true)}>
          <VisuallyHidden>Open command menu</VisuallyHidden>
          <span className={styles.toggleHighlight} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
          </svg>
        </button>
      </header>
    </>
  );
};

export { Banner };
