import { motion } from "framer-motion";
import * as styles from "./styles.css";

const HashiCorpHero = () => {
  return (
    <div className={styles.root}>
      <div className={styles.pattern}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="500"
          fill="none"
          className={styles.patternSvg}
        >
          <g clipPath="url(#a)">
            <path fill="#000" d="M0 0h800v500H0z" />
            <g opacity=".8" filter="url(#b)">
              <path
                d="m576.848 120.743 246.736 142.453-518.718 299.482L58.129 420.225l518.719-299.482Z"
                fill="url(#c)"
              />
            </g>
            <g filter="url(#d)">
              <path
                d="M634.523 41.206 285.945 242.44l123.857 71.502L758.38 112.708 634.523 41.206Z"
                fill="url(#e)"
                shapeRendering="crispEdges"
              />
            </g>
            <motion.path
              d="m755.612 112.708-345.81 199.636-121.089-69.904 345.81-199.636 121.089 69.904Z"
              stroke="url(#f)"
              strokeOpacity=".8"
              strokeWidth="2.768"
              initial={{
                pathLength: 1,
              }}
              animate={{
                pathLength: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 7,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <g filter="url(#g)">
              <path
                d="m405.402 238.224 61.079-43.153-29.841 2.795c-15.717 6.682-57.337 25.31-57.337 25.31l26.099 15.048Z"
                fill="url(#h)"
              />
            </g>
            <g opacity=".9">
              <ellipse
                rx="23.496"
                ry="23.538"
                transform="matrix(-.86603 -.5 -.86603 .5 394.328 234.877)"
                fill="url(#i)"
              />
              <path
                d="M322.62 193.476c-39.673 22.905-39.73 60.01-.127 82.874 39.603 22.865 103.869 22.832 143.543-.073 39.673-22.905 39.73-60.01.127-82.874-39.603-22.865-103.869-22.832-143.543.073Z"
                fill="url(#j)"
                fillOpacity=".6"
              />
              <path
                opacity=".2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M436.106 212.574c-10.71-6.183-24.732-9.267-38.737-9.267-14.005 0-28.025 3.084-38.738 9.267-10.71 6.184-16.129 14.326-16.129 22.528 0 5.989 2.889 11.947 8.617 17.132a.286.286 0 0 0 .384-.424c-5.637-5.102-8.431-10.922-8.431-16.708 0-7.924 5.239-15.909 15.843-22.032 10.604-6.121 24.52-9.19 38.451-9.19 13.931 0 27.847 3.069 38.451 9.19 10.604 6.123 15.843 14.108 15.843 22.032 0 7.925-5.236 15.909-15.843 22.033-10.604 6.121-24.52 9.19-38.451 9.19-9.15 0-18.291-1.323-26.493-3.965l-.67.383c8.394 2.772 17.781 4.154 27.163 4.154 14.005 0 28.025-3.083 38.738-9.267 10.71-6.184 16.129-14.326 16.129-22.528 0-8.202-5.419-16.347-16.129-22.528h.002Z"
                fill="url(#k)"
              />
              <path
                opacity=".35"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M356.086 250.153a.29.29 0 0 1-.317-.052c-4.896-4.558-7.367-9.762-7.367-14.999 0-7.329 4.844-14.6 14.401-20.117 9.559-5.52 22.067-8.268 34.56-8.268 12.494 0 25.004 2.751 34.564 8.268 9.556 5.517 14.4 12.788 14.4 20.117 0 7.329-4.844 14.601-14.4 20.118-9.56 5.517-22.067 8.268-34.564 8.268-7.833 0-15.674-1.082-22.788-3.25l.684-.392c6.914 2.044 14.506 3.069 22.104 3.069 12.419 0 24.824-2.737 34.277-8.193 9.454-5.457 14.114-12.568 14.114-19.622 0-7.055-4.66-14.166-14.114-19.623-9.45-5.456-21.855-8.193-34.277-8.193s-24.824 2.737-34.274 8.193c-9.453 5.457-14.114 12.568-14.114 19.623 0 5.038 2.379 10.108 7.183 14.58a.286.286 0 0 1-.075.47l.003.003Z"
                fill="url(#l)"
              />
              <path
                opacity=".5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M361.044 247.885a.294.294 0 0 1-.321-.054c-4.014-3.888-6.043-8.294-6.043-12.729 0-6.401 4.231-12.745 12.562-17.555 8.334-4.809 19.236-7.208 30.126-7.208s21.792 2.396 30.123 7.208c8.331 4.81 12.562 11.154 12.562 17.555 0 6.402-4.231 12.746-12.562 17.555-8.334 4.81-19.236 7.209-30.123 7.209-6.181 0-12.365-.773-18.082-2.319l.707-.403c5.505 1.434 11.437 2.15 17.375 2.15 10.813 0 21.612-2.382 29.837-7.132 8.228-4.749 12.276-10.933 12.276-17.06 0-6.126-4.048-12.31-12.276-17.06-8.225-4.749-19.024-7.131-29.837-7.131-10.813 0-21.612 2.382-29.84 7.131-8.228 4.75-12.276 10.934-12.276 17.06 0 4.243 1.941 8.515 5.869 12.316a.283.283 0 0 1-.077.464v.003Z"
                fill="url(#m)"
              />
              <path
                opacity=".6"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M365.857 245.681a.29.29 0 0 1-.326-.061c-3.169-3.235-4.775-6.862-4.775-10.518 0-5.505 3.636-10.95 10.781-15.076 7.146-4.125 16.493-6.181 25.826-6.181 9.333 0 18.681 2.056 25.826 6.181 7.143 4.126 10.782 9.571 10.782 15.076 0 5.506-3.636 10.951-10.782 15.073-7.145 4.126-16.493 6.181-25.826 6.181-4.557 0-9.121-.489-13.426-1.471l.738-.424c4.08.882 8.383 1.323 12.688 1.323 9.259 0 18.5-2.039 25.54-6.104 7.04-4.065 10.495-9.35 10.495-14.578 0-5.227-3.455-10.515-10.495-14.577-7.04-4.063-16.281-6.104-25.54-6.104-9.258 0-18.499 2.038-25.539 6.104-7.04 4.065-10.496 9.35-10.496 14.577 0 3.473 1.523 6.971 4.61 10.118a.286.286 0 0 1-.083.461h.002Z"
                fill="url(#n)"
              />
              <path
                opacity=".7"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M370.881 243.385a.295.295 0 0 1-.335-.069c-2.305-2.548-3.476-5.371-3.476-8.214 0-4.574 3.023-9.089 8.938-12.505 5.915-3.415 13.653-5.116 21.374-5.116 7.722 0 15.457 1.701 21.375 5.116 5.914 3.416 8.937 7.931 8.937 12.505 0 4.575-3.023 9.09-8.937 12.505-5.918 3.416-13.653 5.116-21.375 5.116-2.845 0-5.694-.232-8.451-.692l.793-.453a51.1 51.1 0 0 0 7.658.573c7.647 0 15.28-1.686 21.088-5.039 5.812-3.355 8.652-7.71 8.652-12.01s-2.84-8.654-8.652-12.009c-5.808-3.353-13.441-5.039-21.088-5.039-7.646 0-15.279 1.686-21.088 5.039-5.811 3.355-8.651 7.709-8.651 12.009 0 2.671 1.099 5.368 3.327 7.83a.288.288 0 0 1-.089.453Z"
                fill="url(#o)"
              />
              <path
                d="M378.255 223.658c0 9.662 7.832 17.494 17.493 17.494 9.662 0 17.494-7.832 17.494-17.494 0-9.661-7.832-17.493-17.494-17.493-9.661 0-17.493 7.832-17.493 17.493Z"
                fill="url(#p)"
              />
              <path
                d="M378.255 223.658c0 9.662 7.832 17.494 17.493 17.494 9.662 0 17.494-7.832 17.494-17.494 0-9.661-7.832-17.493-17.494-17.493-9.661 0-17.493 7.832-17.493 17.493Z"
                fill="url(#q)"
                fillOpacity=".5"
              />
              <path
                d="M378.255 223.658c0 9.662 7.832 17.494 17.493 17.494 9.662 0 17.494-7.832 17.494-17.494 0-9.661-7.832-17.493-17.494-17.493-9.661 0-17.493 7.832-17.493 17.493Z"
                fill="url(#r)"
              />
              <path
                d="M378.255 223.658c0 9.662 7.832 17.494 17.493 17.494 9.662 0 17.494-7.832 17.494-17.494 0-9.661-7.832-17.493-17.494-17.493-9.661 0-17.493 7.832-17.493 17.493Z"
                fill="url(#s)"
                fillOpacity=".5"
              />
              <path
                d="M378.254 223.658c0 9.662 7.832 17.494 17.493 17.494 9.662 0 17.494-7.832 17.494-17.494 0-9.661-7.832-17.493-17.494-17.493-9.661 0-17.493 7.832-17.493 17.493Z"
                fill="url(#t)"
                fillOpacity=".8"
              />
              <path
                d="M378.254 223.658c0 9.662 7.832 17.494 17.493 17.494 9.662 0 17.494-7.832 17.494-17.494 0-9.661-7.832-17.493-17.494-17.493-9.661 0-17.493 7.832-17.493 17.493Z"
                fill="url(#u)"
                fillOpacity=".5"
              />
              <path
                d="M378.254 223.658c0 9.662 7.832 17.494 17.493 17.494 9.662 0 17.494-7.832 17.494-17.494 0-9.661-7.832-17.493-17.494-17.493-9.661 0-17.493 7.832-17.493 17.493Z"
                fill="url(#v)"
                fillOpacity=".8"
              />
              <path
                d="M378.254 223.658c0 9.662 7.832 17.494 17.493 17.494 9.662 0 17.494-7.832 17.494-17.494 0-9.661-7.832-17.493-17.494-17.493-9.661 0-17.493 7.832-17.493 17.493Z"
                fill="url(#w)"
                fillOpacity=".5"
              />
            </g>
            <g filter="url(#x)">
              <path
                d="m787.609-107.678-358.81 207.14 123.857 71.503 358.809-207.14-123.856-71.503Z"
                fill="url(#y)"
                shapeRendering="crispEdges"
              />
            </g>
            <motion.path
              d="m788.301-108.877-.692-.399-.692.399-358.81 207.141-2.076 1.199 2.076 1.198 123.857 71.503.692.399.691-.399 358.81-207.141 2.076-1.199-2.076-1.198-123.856-71.503Z"
              stroke="url(#z)"
              strokeOpacity=".6"
              strokeWidth="2.768"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <path
              opacity=".2"
              transform="scale(1.22477 .70706) rotate(-45 355.177 -377.338)"
              fill="url(#A)"
              d="M0 0h28.419v28.419H0z"
            />
            <path
              opacity=".3"
              transform="scale(1.22477 .70706) rotate(-45 407.542 -398.433)"
              stroke="#D3FDEB"
              strokeWidth="1.153"
              d="M.999 0h27.266v27.266H.999z"
            />
            <path
              opacity=".3"
              transform="scale(1.22477 .70706) rotate(-45 455.926 -416.908)"
              stroke="#D3FDEB"
              strokeWidth="1.153"
              d="M.999 0h27.266v27.266H.999z"
            />
            <path
              opacity=".3"
              d="m492.122 78.12 23.613-13.632 23.614 13.632-23.614 13.632-23.613-13.632Z"
              stroke="#D3FDEB"
              strokeWidth="1.153"
            />
            <path
              opacity=".2"
              transform="scale(1.22477 .70706) rotate(-45 312.55 -480.256)"
              fill="url(#B)"
              d="M0 0h28.419v28.419H0z"
            />
            <path
              d="m503.352 99.896-24.502 14.147v-49.06l24.502-14.146v49.06Z"
              fill="url(#C)"
              fillOpacity=".65"
            />
            <path
              d="m454.348 99.896 24.502 14.147V46.401l-24.502-14.146v67.641Z"
              fill="url(#D)"
              fillOpacity=".65"
            />
            <path
              d="m576.977 56.782-24.502 14.146v-49.06l24.502-14.146v49.06Z"
              fill="url(#E)"
              fillOpacity=".65"
            />
            <path
              d="m527.973 56.782 24.502 14.146V3.286L527.973-10.86v67.642Z"
              fill="url(#F)"
              fillOpacity=".65"
            />
            <g opacity=".8" filter="url(#G)">
              <path
                transform="scale(-1.22477 .70706) rotate(45 300.677 -335.519)"
                fill="url(#H)"
                d="M0 0h273.327v388.134H0z"
              />
            </g>
            <path
              d="m478.971 52.768 19.027-10.986v117.665l-19.027 10.986V52.768Z"
              fill="url(#I)"
              fillOpacity=".7"
            />
            <path
              d="m478.971 52.768-19.028-10.986v117.015l19.028 10.986V52.768Z"
              fill="url(#J)"
              fillOpacity=".65"
            />
            <path
              d="m459.77 20 19.113-11.035v22.07L459.77 42.07V20Z"
              fill="#0CC"
              fillOpacity=".38"
            />
            <path
              d="M497.998 20 478.885 8.965v22.07l19.113 11.035V20Z"
              fill="#009A9A"
              fillOpacity=".38"
            />
            <path
              transform="matrix(-.86603 -.5 .86603 -.5 478.824 31.065)"
              fill="url(#K)"
              fillOpacity=".9"
              d="M0 0h22.07v22.07H0z"
            />
            <path
              d="M478.889 31.035 459.775 20v22.07l19.114 11.035v-22.07Z"
              fill="url(#L)"
              fillOpacity=".9"
            />
            <path
              d="m478.883 31.03 19.113-11.035v22.07L478.883 53.1V31.03Z"
              fill="url(#M)"
              fillOpacity=".9"
            />
            <g opacity=".7">
              <path
                d="m412.934 77.744 7.886-4.553v48.768l-7.886 4.553V77.744Z"
                fill="url(#N)"
                fillOpacity=".7"
              />
              <path
                d="m412.934 77.744-7.887-4.553v48.499l7.887 4.553V77.744Z"
                fill="url(#O)"
                fillOpacity=".65"
              />
              <path
                d="m404.975 64.163 7.921-4.573v9.147l-7.921 4.574v-9.148Z"
                fill="#0CC"
                fillOpacity=".38"
              />
              <path
                d="m420.818 64.163-7.922-4.573v9.147l7.922 4.574v-9.148Z"
                fill="#009A9A"
                fillOpacity=".38"
              />
              <path
                transform="matrix(-.86603 -.5 .86603 -.5 412.873 68.75)"
                fill="url(#P)"
                fillOpacity=".9"
                d="M0 0h9.147v9.147H0z"
              />
              <path
                d="m412.898 68.737-7.921-4.574v9.147l7.921 4.574v-9.147Z"
                fill="url(#Q)"
                fillOpacity=".9"
              />
              <path
                d="m412.896 68.735 7.922-4.574v9.147l-7.922 4.574v-9.147Z"
                fill="url(#R)"
                fillOpacity=".9"
              />
            </g>
            <g filter="url(#S)">
              <path
                d="m698.583 171.828 203.426 115.677L435.402 556.9 231.977 441.223l466.606-269.395Z"
                fill="url(#T)"
                shapeRendering="crispEdges"
              />
            </g>
            <motion.path
              d="m699.267 170.625-.69-.392-.686.396-466.606 269.396-2.092 1.207 2.1 1.194 203.425 115.677.69.392.686-.396L902.7 288.704l2.092-1.208-2.099-1.194-203.426-115.677Z"
              stroke="url(#U)"
              strokeOpacity=".8"
              strokeWidth="2.768"
              initial={{
                pathLength: 1,
              }}
              animate={{
                pathLength: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 7,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <path
              d="m358.199 378.9 9.534-5.504v58.954l-9.534 5.504V378.9Z"
              fill="url(#V)"
              fillOpacity=".7"
            />
            <path
              d="m358.199 378.9-9.533-5.504v58.628l9.533 5.504V378.9Z"
              fill="url(#W)"
              fillOpacity=".65"
            />
            <path
              d="m348.637 362.344 9.56-5.519v11.039l-9.56 5.519v-11.039Z"
              fill="#5A00CC"
              fillOpacity=".38"
            />
            <path
              d="m367.758 362.344-9.56-5.519v11.039l9.56 5.519v-11.039Z"
              fill="#56009A"
              fillOpacity=".38"
            />
            <path
              transform="matrix(-.86603 -.5 .86603 -.5 358.168 367.88)"
              fill="url(#X)"
              d="M0 0h11.039v11.039H0z"
            />
            <path
              transform="matrix(-.86603 -.5 .86603 -.5 358.168 378.889)"
              fill="url(#Y)"
              fillOpacity=".9"
              d="M0 0h11.039v11.039H0z"
            />
            <path
              d="m358.201 367.865-9.56-5.52v11.039l9.56 5.52v-11.039Z"
              fill="url(#Z)"
              fillOpacity=".9"
            />
            <path
              d="m358.199 367.862 9.56-5.519v11.039l-9.56 5.519v-11.039Z"
              fill="url(#aa)"
              fillOpacity=".9"
            />
            <g filter="url(#ab)">
              <path
                d="M725.421 93.78 1032.17 270.88 735.801 441.989 429.053 264.888 725.421 93.78Z"
                fill="url(#ac)"
                shapeRendering="crispEdges"
              />
            </g>
            <motion.path
              d="m726.113 92.581-.692-.4-.692.4L428.361 263.69l-2.076 1.198 2.076 1.198 306.748 177.102.692.399.692-.399L1032.86 272.08l2.08-1.199-2.08-1.198L726.113 92.581Z"
              stroke="url(#ad)"
              strokeOpacity=".8"
              strokeWidth="2.768"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <g filter="url(#ae)">
              <path
                d="m624.982 218.971-44.441 47.864-27.352-15.77-28.433 15.77 28.018-16.01.415.24 52.267-28.99 19.526-3.104Z"
                fill="url(#af)"
              />
            </g>
            <path
              d="M487.798 229.384c-35.886 20.719-35.938 54.281-.115 74.963 35.823 20.683 93.955 20.653 129.841-.066 35.887-20.719 35.938-54.281.115-74.964-35.823-20.682-93.954-20.652-129.841.067Z"
              fill="url(#ag)"
              fillOpacity=".5"
            />
            <path
              opacity=".4"
              transform="matrix(-.86603 -.5 .86603 -.5 552.473 282.753)"
              fill="url(#ah)"
              d="M0 0h31.683v31.683H0z"
            />
            <g opacity=".9" fillRule="evenodd" clipRule="evenodd">
              <path
                d="m525.035 266.962 27.424-28.648v44.452l-27.424-15.804Z"
                fill="url(#ai)"
              />
              <path
                d="m525.035 266.962 27.424-28.648v44.452l-27.424-15.804Z"
                fill="url(#aj)"
                fillOpacity=".1"
              />
            </g>
            <g opacity=".9" fillRule="evenodd" clipRule="evenodd">
              <path
                d="m579.887 266.962-27.424-28.648v44.452l27.424-15.804Z"
                fill="url(#ak)"
              />
              <path
                d="m579.887 266.962-27.424-28.648v44.452l27.424-15.804Z"
                fill="url(#al)"
                fillOpacity=".1"
              />
            </g>
            <path
              opacity=".6"
              fillRule="evenodd"
              clipRule="evenodd"
              d="m415.66 394.675-64.161-37.632-.556.946 63.617 37.313-20.496 11.684.543.953 79.606-45.379-.544-.954-34.135 19.459-37.579-22.152-.557.945 37.037 21.834-22.775 12.983Zm97.116 28.463-20.886 11.64 35.957 22.978-.616.91-36.431-23.281-21.319 11.881 17.434 11.142-.615.91-17.565-11.225.447-.66-28.417 15.837-.534-.959 141.5-78.859.534.959-68.377 38.107 60.273 35.331-.554.947-60.831-35.658Z"
              fill="url(#am)"
            />
            <g opacity=".5" strokeWidth="1.153">
              <path d="m660.271 172.982 105.19-60.731" stroke="url(#an)" />
              <circle
                r="1.925"
                transform="scale(1.22477 .70706) rotate(-45 565.752 -525.562)"
                stroke="#fff"
              />
            </g>
            <g opacity=".5" strokeWidth="1.153">
              <path d="m657.949 302.945 105.19 60.731" stroke="url(#ao)" />
              <path
                d="M657.544 303.072c.921-.532.921-1.394 0-1.925-.92-.532-2.413-.532-3.333 0-.921.531-.921 1.393 0 1.925.92.531 2.413.531 3.333 0Z"
                stroke="#fff"
              />
            </g>
            <g opacity=".6" strokeWidth="1.153">
              <path
                d="m764.627 279.537-109.012-63.796-28.718 17.526"
                stroke="url(#ap)"
              />
              <circle
                r="1.925"
                transform="scale(1.22477 .70706) rotate(-45 655.19 -450.69)"
                stroke="#fff"
              />
            </g>
            <path
              d="m468.822 409.501 22.245-12.843v137.558l-22.245 12.843V409.501Z"
              fill="url(#aq)"
              fillOpacity=".7"
            />
            <path
              d="m468.822 409.501-22.244-12.843v136.799l22.244 12.843V409.501Z"
              fill="url(#ar)"
              fillOpacity=".65"
            />
            <path
              d="m446.514 370.875 22.307-12.879v25.758l-22.307 12.879v-25.758Z"
              fill="#5A00CC"
              fillOpacity=".38"
            />
            <path
              d="m491.129 370.875-22.307-12.879v25.758l22.307 12.879v-25.758Z"
              fill="#56009A"
              fillOpacity=".38"
            />
            <path
              transform="matrix(-.86603 -.5 .86603 -.5 468.752 383.789)"
              fill="url(#as)"
              d="M0 0h25.758v25.758H0z"
            />
            <path
              transform="matrix(-.86603 -.5 .86603 -.5 468.752 409.477)"
              fill="url(#at)"
              fillOpacity=".9"
              d="M0 0h25.758v25.758H0z"
            />
            <path
              d="m468.83 383.754-22.307-12.879v25.758l22.307 12.879v-25.758Z"
              fill="url(#au)"
              fillOpacity=".9"
            />
            <path
              d="m468.82 383.748 22.307-12.879v25.758l-22.307 12.879v-25.758Z"
              fill="url(#av)"
              fillOpacity=".9"
            />
            <path
              transform="rotate(90 800 419)"
              fill="url(#aw)"
              d="M800 419h81v800h-81z"
            />
          </g>
          <defs>
            <linearGradient
              id="e"
              x1="556.616"
              y1="88.85"
              x2="266.493"
              y2="259.227"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#313131" stopOpacity="0" />
              <stop offset=".432" stopColor="#1C1C1C" stopOpacity=".76" />
              <stop offset="1" stopColor="#1F1F1F" stopOpacity=".86" />
            </linearGradient>
            <linearGradient
              id="f"
              x1="493.097"
              y1="143.035"
              x2="367.286"
              y2="285.915"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F4538E" stopOpacity="0" />
              <stop offset=".255" stopColor="#F4538E" stopOpacity=".42" />
              <stop offset=".684" stopColor="#FB78A7" stopOpacity=".805" />
              <stop offset="1" stopColor="#FF7485" />
            </linearGradient>
            <linearGradient
              id="h"
              x1="400.34"
              y1="219.955"
              x2="433.456"
              y2="187.047"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset=".349" stopOpacity=".37" />
              <stop offset=".542" stopOpacity=".23" />
              <stop offset=".766" stopOpacity=".12" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="k"
              x1="378.414"
              y1="217.796"
              x2="398.122"
              y2="235.789"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity=".4" />
              <stop offset="1" stopColor="#DC477D" stopOpacity=".26" />
            </linearGradient>
            <linearGradient
              id="l"
              x1="380.449"
              y1="219.657"
              x2="398.039"
              y2="235.715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity=".4" />
              <stop offset="1" stopColor="#DC477D" stopOpacity=".26" />
            </linearGradient>
            <linearGradient
              id="m"
              x1="382.621"
              y1="221.63"
              x2="397.958"
              y2="235.632"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity=".4" />
              <stop offset="1" stopColor="#DC477D" stopOpacity=".26" />
            </linearGradient>
            <linearGradient
              id="n"
              x1="384.724"
              y1="223.536"
              x2="397.879"
              y2="235.549"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity=".4" />
              <stop offset="1" stopColor="#DC477D" stopOpacity=".26" />
            </linearGradient>
            <linearGradient
              id="o"
              x1="386.93"
              y1="225.503"
              x2="397.826"
              y2="235.452"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity=".4" />
              <stop offset="1" stopColor="#DC477D" stopOpacity=".26" />
            </linearGradient>
            <linearGradient
              id="y"
              x1="476.533"
              y1="135.301"
              x2="772.991"
              y2="-58.488"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#292929" />
              <stop offset=".418" stopColor="#262626" stopOpacity=".88" />
              <stop offset="1" stopColor="#1F1F1F" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="z"
              x1="713.412"
              y1="-12.327"
              x2="407.215"
              y2="111.659"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#147DC2" stopOpacity="0" />
              <stop offset=".505" stopColor="#14B3C2" stopOpacity=".7" />
              <stop offset="1" stopColor="#01CE9D" />
            </linearGradient>
            <linearGradient
              id="A"
              x1="-.004"
              y1="14.209"
              x2="28.42"
              y2="14.209"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#59F5FF" stopOpacity=".62" />
              <stop offset="0" stopColor="#BBFBFF" stopOpacity=".62" />
              <stop offset="1" stopColor="#B8FFE1" stopOpacity=".02" />
            </linearGradient>
            <linearGradient
              id="B"
              x1="-.004"
              y1="14.209"
              x2="28.42"
              y2="14.209"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#59F5FF" stopOpacity=".62" />
              <stop offset="0" stopColor="#BBFBFF" stopOpacity=".62" />
              <stop offset="1" stopColor="#B8FFE1" stopOpacity=".02" />
            </linearGradient>
            <linearGradient
              id="C"
              x1="487.202"
              y1="123.731"
              x2="500.887"
              y2="86.823"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#56C0A7" />
              <stop offset="1" stopColor="#008196" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="D"
              x1="467.709"
              y1="121.777"
              x2="467.328"
              y2="77.799"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9EFED5" />
              <stop offset="1" stopColor="#008196" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="E"
              x1="560.827"
              y1="80.616"
              x2="574.512"
              y2="43.708"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#56C0A7" />
              <stop offset="1" stopColor="#008196" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="F"
              x1="541.334"
              y1="78.662"
              x2="540.953"
              y2="34.684"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9EFED5" />
              <stop offset="1" stopColor="#008196" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="I"
              x1="486.837"
              y1="10.113"
              x2="440.325"
              y2="96.083"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A7D4C" />
              <stop offset="1" stopColor="#04183E" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="J"
              x1="476.815"
              y1="19.399"
              x2="470.109"
              y2="111.518"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#65D592" />
              <stop offset="1" stopColor="#31526A" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="K"
              x1="22.028"
              y1="3.586"
              x2="-.738"
              y2="21.112"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DFFFF1" />
              <stop offset=".5" stopColor="#4DECBC" stopOpacity=".83" />
              <stop offset=".987" stopColor="#0694AB" stopOpacity=".8" />
            </linearGradient>
            <linearGradient
              id="L"
              x1="459.775"
              y1="19.129"
              x2="475.98"
              y2="54.116"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A5FFDE" stopOpacity=".99" />
              <stop offset=".781" stopColor="#086E67" stopOpacity=".998" />
              <stop offset="1" stopColor="#005459" />
            </linearGradient>
            <linearGradient
              id="M"
              x1="488.44"
              y1="29.089"
              x2="495.836"
              y2="42.498"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3DEBC1" stopOpacity=".31" />
              <stop offset="1" stopColor="#016862" stopOpacity=".81" />
            </linearGradient>
            <linearGradient
              id="N"
              x1="416.194"
              y1="60.066"
              x2="396.916"
              y2="95.697"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A7D4C" />
              <stop offset="1" stopColor="#04183E" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="O"
              x1="412.04"
              y1="63.914"
              x2="409.261"
              y2="102.094"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#65D592" />
              <stop offset="1" stopColor="#31526A" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="P"
              x1="9.13"
              y1="1.486"
              x2="-.306"
              y2="8.75"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DFFFF1" />
              <stop offset=".5" stopColor="#4DECBC" stopOpacity=".83" />
              <stop offset=".987" stopColor="#0694AB" stopOpacity=".8" />
            </linearGradient>
            <linearGradient
              id="Q"
              x1="404.977"
              y1="63.802"
              x2="411.693"
              y2="78.303"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A5FFDE" stopOpacity=".99" />
              <stop offset=".781" stopColor="#086E67" stopOpacity=".998" />
              <stop offset="1" stopColor="#005459" />
            </linearGradient>
            <linearGradient
              id="R"
              x1="416.857"
              y1="67.93"
              x2="419.923"
              y2="73.488"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3DEBC1" stopOpacity=".31" />
              <stop offset="1" stopColor="#016862" stopOpacity=".81" />
            </linearGradient>
            <linearGradient
              id="T"
              x1="193.086"
              y1="449.151"
              x2="943.302"
              y2="578.559"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2D2D2D" />
              <stop offset=".418" stopColor="#181818" stopOpacity=".74" />
              <stop offset="1" stopColor="#1F1F1F" stopOpacity=".13" />
            </linearGradient>
            <linearGradient
              id="U"
              x1="976.693"
              y1="327.93"
              x2="226.886"
              y2="447.437"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#171234" />
              <stop offset=".568" stopColor="#5811B5" />
              <stop offset="1" stopColor="#4CACDA" />
            </linearGradient>
            <linearGradient
              id="V"
              x1="362.14"
              y1="357.529"
              x2="338.836"
              y2="400.602"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#532A7D" />
              <stop offset="1" stopColor="#33197C" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="W"
              x1="357.119"
              y1="362.181"
              x2="353.759"
              y2="408.336"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9C65D5" />
              <stop offset="1" stopColor="#522AC2" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="X"
              x1="11.501"
              y1="2.409"
              x2="-.726"
              y2="9.575"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DAEBFF" stopOpacity=".86" />
              <stop offset=".5" stopColor="#A35BFF" stopOpacity=".88" />
              <stop offset=".987" stopColor="#3A07CD" stopOpacity=".8" />
            </linearGradient>
            <linearGradient
              id="Y"
              x1="12.349"
              y1="-.323"
              x2="-1.517"
              y2="10.721"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D1DBFF" />
              <stop offset=".479" stopColor="#A975FF" stopOpacity=".45" />
              <stop offset=".987" stopColor="#552ACE" stopOpacity=".65" />
            </linearGradient>
            <linearGradient
              id="Z"
              x1="348.641"
              y1="361.91"
              x2="357.712"
              y2="378.904"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A5B3FF" stopOpacity=".84" />
              <stop offset=".596" stopColor="#7622CA" stopOpacity=".998" />
              <stop offset="1" stopColor="#2E2C9F" />
            </linearGradient>
            <linearGradient
              id="aa"
              x1="368.086"
              y1="362.343"
              x2="358.199"
              y2="379.236"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#863BE7" stopOpacity=".76" />
              <stop offset="1" stopColor="#0F1B5C" stopOpacity=".81" />
            </linearGradient>
            <linearGradient
              id="ac"
              x1="424.29"
              y1="289.859"
              x2="686.27"
              y2="202.867"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#313131" />
              <stop offset="1" stopOpacity=".74" />
            </linearGradient>
            <linearGradient
              id="ad"
              x1="726.645"
              y1="183.557"
              x2="415.886"
              y2="252.402"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EC585D" stopOpacity="0" />
              <stop offset=".505" stopColor="#EC585D" stopOpacity=".57" />
              <stop offset="1" stopColor="#FFD976" />
            </linearGradient>
            <linearGradient
              id="af"
              x1="554.775"
              y1="254.327"
              x2="610.387"
              y2="212.388"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset=".349" stopOpacity=".37" />
              <stop offset=".542" stopOpacity=".23" />
              <stop offset=".766" stopOpacity=".12" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="ah"
              x1="0"
              y1="31.683"
              x2="34.5"
              y2="3.441"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFF4D4" />
              <stop offset="1" stopColor="#EC585D" />
            </linearGradient>
            <linearGradient
              id="ai"
              x1="525.035"
              y1="282.766"
              x2="564.146"
              y2="262.251"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFF6B7" />
              <stop offset="1" stopColor="#EC585D" />
            </linearGradient>
            <linearGradient
              id="aj"
              x1="550.949"
              y1="234.098"
              x2="538.712"
              y2="278.573"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="ak"
              x1="579.887"
              y1="282.766"
              x2="540.776"
              y2="262.251"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EC585D" />
              <stop offset="1" stopColor="#FFF6B7" />
            </linearGradient>
            <linearGradient
              id="al"
              x1="581.899"
              y1="265.41"
              x2="552.489"
              y2="245.718"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="an"
              x1="660.271"
              y1="172.982"
              x2="705.601"
              y2="145.963"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="ao"
              x1="657.949"
              y1="302.945"
              x2="729.099"
              y2="343.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="ap"
              x1="629.1"
              y1="232.2"
              x2="714.767"
              y2="249.191"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="aq"
              x1="478.018"
              y1="359.634"
              x2="441.335"
              y2="433.833"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#532A7D" />
              <stop offset="1" stopColor="#33197C" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="ar"
              x1="466.302"
              y1="370.49"
              x2="464.617"
              y2="455.67"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9C65D5" />
              <stop offset="1" stopColor="#522AC2" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="as"
              x1="26.836"
              y1="5.62"
              x2="-1.693"
              y2="22.341"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DAEBFF" stopOpacity=".86" />
              <stop offset=".5" stopColor="#A35BFF" stopOpacity=".88" />
              <stop offset=".987" stopColor="#3A07CD" stopOpacity=".8" />
            </linearGradient>
            <linearGradient
              id="at"
              x1="28.815"
              y1="-.753"
              x2="-3.539"
              y2="25.015"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D1DBFF" />
              <stop offset=".479" stopColor="#A975FF" stopOpacity=".45" />
              <stop offset=".987" stopColor="#552ACE" stopOpacity=".65" />
            </linearGradient>
            <linearGradient
              id="au"
              x1="446.523"
              y1="369.859"
              x2="467.689"
              y2="409.512"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A5B3FF" stopOpacity=".84" />
              <stop offset=".596" stopColor="#7622CA" stopOpacity=".998" />
              <stop offset="1" stopColor="#2E2C9F" />
            </linearGradient>
            <linearGradient
              id="av"
              x1="491.889"
              y1="370.869"
              x2="468.82"
              y2="410.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#863BE7" stopOpacity=".76" />
              <stop offset="1" stopColor="#0F1B5C" stopOpacity=".81" />
            </linearGradient>
            <linearGradient
              id="aw"
              x1="881"
              y1="715.552"
              x2="805.82"
              y2="719.357"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="c"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(515.97762 -329.13068 327.33502 513.16257 -49.756 515.211)"
            >
              <stop stopColor="#484848" stopOpacity=".88" />
              <stop offset=".47" stopColor="#242424" />
              <stop offset="1" stopColor="#131313" stopOpacity=".34" />
            </radialGradient>
            <radialGradient
              id="i"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(94.934 .932 22.568) scale(29.7616 27.0679)"
            >
              <stop stopOpacity=".8" />
              <stop offset=".365" stopOpacity=".4" />
              <stop offset=".844" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="j"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(141.935 156.576 185.467) scale(88.9812 76.6538)"
            >
              <stop stopColor="#CA3066" stopOpacity=".8" />
              <stop offset=".295" stopColor="#CA3066" stopOpacity=".4" />
              <stop offset=".599" stopColor="#D63F75" stopOpacity=".095" />
              <stop offset=".754" stopColor="#DC477D" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="p"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(96.139 102.782 286.443) scale(26.4219 26.4224)"
            >
              <stop offset=".135" stopColor="#DC477D" stopOpacity=".4" />
              <stop offset=".748" stopColor="#8A143F" />
            </radialGradient>
            <radialGradient
              id="q"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-2.5248 14.12705 -14.12735 -2.52486 398.333 214.882)"
            >
              <stop stopColor="#F98DB4" />
              <stop offset=".969" stopColor="#DC477D" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="r"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-3.00584 25.84952 -25.85012 -3.00591 398.814 217.106)"
            >
              <stop stopColor="#DC477D" stopOpacity="0" />
              <stop offset=".391" stopColor="#CA3066" stopOpacity="0" />
              <stop offset=".734" stopColor="#64112F" />
              <stop offset=".844" stopColor="#500B24" />
              <stop offset=".969" stopColor="#6C0E30" stopOpacity=".17" />
            </radialGradient>
            <radialGradient
              id="s"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-3.30642 26.5108 -26.5114 -3.3065 399.054 214.641)"
            >
              <stop offset=".219" stopColor="#D1EBFF" />
              <stop offset="1" stopColor="#CA3066" />
            </radialGradient>
            <radialGradient
              id="t"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(83.861 76.845 326.164) scale(26.4219)"
            >
              <stop offset=".135" stopColor="#DC477D" stopOpacity=".4" />
              <stop offset=".748" stopColor="#8A143F" />
            </radialGradient>
            <radialGradient
              id="u"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(79.867 68.235 342.27) scale(14.3509)"
            >
              <stop stopColor="#F9BFD4" />
              <stop offset=".969" stopColor="#DC477D" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="v"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(83.368 74.433 329.046) scale(26.0237)"
            >
              <stop stopColor="#DC477D" stopOpacity="0" />
              <stop offset=".391" stopColor="#CA3066" stopOpacity="0" />
              <stop offset=".734" stopColor="#64112F" />
              <stop offset=".844" stopColor="#500B24" />
              <stop offset=".969" stopColor="#6C0E30" stopOpacity=".17" />
            </radialGradient>
            <radialGradient
              id="w"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(82.891 74.683 329.532) scale(26.7162)"
            >
              <stop offset=".219" stopColor="#FE689E" />
              <stop offset="1" stopColor="#BE30CA" />
            </radialGradient>
            <radialGradient
              id="H"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(-121.364 330.381 165.3) scale(510.468 3628.95)"
            >
              <stop stopColor="#484848" stopOpacity=".88" />
              <stop offset=".47" stopColor="#242424" stopOpacity=".76" />
              <stop offset="1" stopColor="#131313" stopOpacity=".34" />
            </radialGradient>
            <radialGradient
              id="ag"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(142.55 231.037 227.097) scale(85.2774 73.463)"
            >
              <stop stopColor="#F73F3F" stopOpacity=".8" />
              <stop offset=".295" stopColor="#FF6635" stopOpacity=".33" />
              <stop offset=".521" stopColor="#FFC06D" stopOpacity=".12" />
              <stop offset=".745" stopColor="#FFE974" stopOpacity=".02" />
              <stop offset=".953" stopColor="#FFDF38" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="am"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(5.469 -4021.104 5185.476) scale(88.4884 54.1783)"
            >
              <stop offset=".375" stopColor="#EADDFF" />
              <stop offset="1" stopColor="#E3D2FF" stopOpacity="0" />
            </radialGradient>
            <filter
              id="b"
              x="56.544"
              y="119.157"
              width="768.625"
              height="445.106"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation=".793" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_6991_27620"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_backgroundBlur_6991_27620"
                result="shape"
              />
            </filter>
            <filter
              id="d"
              x="233.054"
              y="41.206"
              width="578.219"
              height="397.031"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="71.403" />
              <feGaussianBlur stdDeviation="26.446" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_6991_27620"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_6991_27620"
                result="shape"
              />
            </filter>
            <filter
              id="g"
              x="377.336"
              y="193.104"
              width="91.112"
              height="47.087"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation=".983"
                result="effect1_foregroundBlur_6991_27620"
              />
            </filter>
            <filter
              id="x"
              x="375.907"
              y="-107.678"
              width="588.45"
              height="402.938"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="71.403" />
              <feGaussianBlur stdDeviation="26.446" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_6991_27620"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_6991_27620"
                result="shape"
              />
            </filter>
            <filter
              id="G"
              x="-55.585"
              y="-221.397"
              width="576.024"
              height="333.879"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation=".793" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_6991_27620"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_backgroundBlur_6991_27620"
                result="shape"
              />
            </filter>
            <filter
              id="S"
              x="231.977"
              y="171.828"
              width="670.031"
              height="456.475"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="71.403" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_6991_27620"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_6991_27620"
                result="shape"
              />
            </filter>
            <filter
              id="ab"
              x="376.161"
              y="93.78"
              width="708.901"
              height="472.504"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="71.403" />
              <feGaussianBlur stdDeviation="26.446" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_6991_27620"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_6991_27620"
                result="shape"
              />
            </filter>
            <filter
              id="ae"
              x="522.789"
              y="217.004"
              width="104.16"
              height="51.798"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation=".983"
                result="effect1_foregroundBlur_6991_27620"
              />
            </filter>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h800v500H0z" />
            </clipPath>
          </defs>
        </motion.svg>
      </div>
      <div className={styles.logo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 106.9 113.1"
          fill="white"
        >
          <g id="Logo">
            <path d="M44.5 0 0 25.7v61.7l16.7 9.7V35.3l27.8-16z" />
            <path d="M62.3 0v49.2H44.5V30.8l-16.7 9.7v62.9l16.7 9.7v-49h17.8v18.2l16.8-9.6v-63z" />
            <path d="m62.3 113.1 44.6-25.7V25.7l-16.8-9.6v61.7l-27.8 16z" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export { HashiCorpHero };
