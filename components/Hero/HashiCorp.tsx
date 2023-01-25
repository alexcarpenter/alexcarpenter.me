import * as styles from "./HashiCorp.css";

const HashiCorpHero = () => {
  return (
    <div className={styles.root}>
      <div className={styles.paths}>
        <svg
          width="150%"
          viewBox="0 0 1920 700"
          fill="none"
          className="HeroAnimation_svg__soPwa"
        >
          <path
            d="M1 3.00354C179.628 198.347 377.216 285 632.684 285C888.152 285 973.973 285 1290.31 285C1606.65 285 1797.76 143.751 1921 1.00002"
            stroke="url(#path)"
            vectorEffect="non-scaling-stroke"
          ></path>
          <path
            d="M1 197.5C185.5 282.5 336 320 631 320C926 320 980 320 1291 320C1602 320 1746.5 276.5 1921 197.5"
            stroke="url(#path)"
            vectorEffect="non-scaling-stroke"
          ></path>
          <path
            d="M1 354H1921"
            stroke="url(#path)"
            vectorEffect="non-scaling-stroke"
          ></path>
          <path
            d="M1 510C185.5 425 336 387.5 631 387.5C926 387.5 980 387.5 1291 387.5C1602 387.5 1746.5 431 1921 510"
            stroke="url(#path)"
            vectorEffect="non-scaling-stroke"
          ></path>
          <path
            d="M1 704.996C179.628 509.653 377.216 423 632.684 423C888.152 423 973.973 423 1290.31 423C1606.65 423 1797.76 564.249 1921 707"
            stroke="url(#path)"
            vectorEffect="non-scaling-stroke"
          ></path>
          <line
            x1="0"
            y1="0"
            x2="80"
            y2="0"
            stroke="url(#datumPurple)"
            strokeWidth="2"
            strokeLinecap="round"
            transform="translate(-80,0)"
            vectorEffect="non-scaling-stroke"
          >
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M1 3.00354C179.628 198.347 377.216 285 632.684 285C888.152 285 973.973 285 1290.31 285C1606.65 285 1797.76 143.751 1921 1.00002"
              rotate="auto"
              begin="1"
            ></animateMotion>
          </line>
          <line
            x1="0"
            y1="0"
            x2="80"
            y2="0"
            stroke="url(#datumBlue)"
            strokeWidth="2"
            strokeLinecap="round"
            transform="translate(-80,0)"
            vectorEffect="non-scaling-stroke"
          >
            <animateMotion
              dur="2.5s"
              repeatCount="indefinite"
              path="M1 197.5C185.5 282.5 336 320 631 320C926 320 980 320 1291 320C1602 320 1746.5 276.5 1921 197.5"
              rotate="auto"
              begin="5"
            ></animateMotion>
          </line>
          <line
            x1="0"
            y1="0"
            x2="80"
            y2="0"
            stroke="url(#datumPurple)"
            strokeWidth="2"
            strokeLinecap="round"
            transform="translate(-80,0)"
            vectorEffect="non-scaling-stroke"
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M1 354H1921"
              rotate="auto"
              begin="3"
            ></animateMotion>
          </line>
          <line
            x1="0"
            y1="0"
            x2="80"
            y2="0"
            stroke="url(#datumBlue)"
            strokeWidth="2"
            strokeLinecap="round"
            transform="translate(-80,0)"
            vectorEffect="non-scaling-stroke"
          >
            <animateMotion
              dur="3.5s"
              repeatCount="indefinite"
              path="M1 510C185.5 425 336 387.5 631 387.5C926 387.5 980 387.5 1291 387.5C1602 387.5 1746.5 431 1921 510"
              rotate="auto"
              begin="2"
            ></animateMotion>
          </line>
          <line
            x1="0"
            y1="0"
            x2="80"
            y2="0"
            stroke="url(#datumPurple)"
            strokeWidth="2"
            strokeLinecap="round"
            transform="translate(-80,0)"
            vectorEffect="non-scaling-stroke"
          >
            <animateMotion
              dur="4.5s"
              repeatCount="indefinite"
              path="M1 704.996C179.628 509.653 377.216 423 632.684 423C888.152 423 973.973 423 1290.31 423C1606.65 423 1797.76 564.249 1921 707"
              rotate="auto"
              begin="0"
            ></animateMotion>
          </line>
          <defs>
            <linearGradient
              id="datumPurple"
              x1="0"
              y1="0"
              x2="80"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="transparent " offset="0"></stop>
              <stop stopColor="#844FBA" offset="1"></stop>
            </linearGradient>
            <linearGradient
              id="datumBlue"
              x1="0"
              y1="0"
              x2="80"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="transparent" offset="0"></stop>
              <stop stopColor="#2E71E5" offset="1"></stop>
            </linearGradient>
            <linearGradient
              id="path"
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="transparent " offset="0%"></stop>
              <stop stopColor="#444" offset="30%"></stop>
              <stop stopColor="#444" offset="70%"></stop>
              <stop stopColor="transparent" offset="100%"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.logo}>
        <svg
          width="96"
          height="96"
          viewBox="0 0 144 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <path
            d="M63.348 17L20 42.002v60.069l16.282 9.401V51.404l27.066-15.62V17z"
            fill="white"
            stroke="url(#path)"
            vectorEffect="non-scaling-stroke"
          ></path>
          <path
            d="M80.652 17v47.835H63.348v-17.85l-16.292 9.402v61.285l16.292 9.42V79.394h17.304v17.732l16.282-9.4V26.4L80.652 17z"
            fill="white"
          ></path>
          <path
            d="M80.652 127.112L124 102.109V42.041l-16.292-9.401v60.068l-27.056 15.62v18.784z"
            fill="white"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export { HashiCorpHero };
