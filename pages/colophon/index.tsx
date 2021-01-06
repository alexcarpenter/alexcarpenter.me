import Page from '@/components/Page';
import ExternalLink from '@/components/ExternalLink';

export default function Colophon() {
  return (
    <Page
      meta={{
        title: 'Colophon',
        description:
          'The tools and services used to build and maintain alexcarpenter.me.',
      }}
    >
      <Page.Header>
        <Page.Title>Colophon</Page.Title>
        <Page.Description>
          The tools and services used to build and maintain alexcarpenter.me.
        </Page.Description>
        <ExternalLink href="https://github.com/alexcarpenter/alexcarpenter-next">
          View source code
        </ExternalLink>
      </Page.Header>
      <div className="divide-y divide-gray-200">
        {data.map((item, index) => {
          return (
            <section key={index} className="flex py-8">
              {item.logo}
              <div>
                <h2 className="text-xl font-bold">{item.heading}</h2>
                <p className="mt-1 mb-2">{item.description}</p>
                <ExternalLink href={item.link} />
              </div>
            </section>
          );
        })}
      </div>
    </Page>
  );
}

const SVG_CLASSES = 'rounded-lg shadow-xl flex-shrink-0 mr-4 md:mr-8 w-16 h-16';

const data = [
  {
    heading: 'Next.js',
    description: '',
    logo: (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={SVG_CLASSES}
      >
        <path fill="#fff" d="M0 0h120v120H0z" />
        <path
          d="M37 47.084h16.786v1.342H38.54v10.099h14.338v1.342H38.539v11.087h15.422v1.342H37V47.084zm18.29 0h1.784l7.903 11.087 8.079-11.087L84.043 33 65.991 59.337l9.303 12.96H73.44l-8.463-11.795-8.498 11.794h-1.818l9.372-12.96-8.742-12.252h-.001zm20.669 1.342v-1.342h19.128v1.342h-8.812v23.87h-1.54v-23.87H75.96zM16 47.084h1.924L44.446 87l-10.96-14.704-15.878-23.305-.07 23.305H16V47.084zm78.933 23.465a.545.545 0 01-.55-.561c0-.317.235-.562.55-.562.318 0 .55.245.55.562a.543.543 0 01-.55.561zm1.511-1.477h.824c.012.448.338.75.816.75.535 0 .838-.324.838-.931v-3.844h.839v3.848c0 1.093-.629 1.723-1.67 1.723-.976 0-1.646-.611-1.646-1.546zm4.413-.049h.831c.071.516.572.844 1.295.844.673 0 1.167-.35 1.167-.833 0-.414-.314-.663-1.029-.833l-.696-.169c-.976-.23-1.422-.705-1.422-1.504 0-.969.786-1.613 1.964-1.613 1.097 0 1.899.644 1.947 1.56h-.816c-.078-.5-.512-.814-1.142-.814-.662 0-1.104.32-1.104.81 0 .388.285.611.989.777l.595.147c1.107.26 1.564.712 1.564 1.53 0 1.04-.802 1.693-2.081 1.693-1.197 0-2.002-.623-2.062-1.595z"
          fill="#000"
        />
      </svg>
    ),
    link: 'https://nextjs.org/',
  },
  {
    heading: 'Vercel',
    description: '',
    logo: (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={SVG_CLASSES}
      >
        <path fill="#fff" d="M0 0h120v120H0z" />
        <path d="M60.082 36l28.082 48.246H32L60.082 36z" fill="#000" />
      </svg>
    ),
    link: 'https://vercel.com/',
  },
  {
    heading: 'Tailwind CSS',
    description: '',
    logo: (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={SVG_CLASSES}
      >
        <path fill="#fff" d="M0 0h120v120H0z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60.5 37c-10.267 0-16.682 5.111-19.25 15.334 3.85-5.111 8.342-7.028 13.475-5.75 2.929.728 5.023 2.844 7.339 5.187C65.839 55.585 70.209 60 79.75 60 90.016 60 96.433 54.889 99 44.667c-3.849 5.112-8.34 7.028-13.474 5.75-2.93-.73-5.024-2.845-7.34-5.186C74.41 41.413 70.043 37 60.5 37zM41.25 60C30.984 60 24.567 65.111 22 75.334c3.85-5.111 8.342-7.028 13.474-5.75 2.93.728 5.024 2.844 7.34 5.187C46.59 78.585 50.957 83 60.501 83c10.266 0 16.683-5.11 19.25-15.333-3.851 5.112-8.343 7.028-13.476 5.75-2.929-.73-5.023-2.845-7.339-5.186C55.161 64.416 50.791 60 41.25 60z"
          fill="#06B6D4"
        />
      </svg>
    ),
    link: 'https://tailwindcss.com/',
  },
  {
    heading: 'MDX',
    description: '',
    logo: (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={SVG_CLASSES}
      >
        <rect width="120" height="120" fill="white" />
        <path
          d="M60.6917 65.9474V48.4495"
          stroke="black"
          strokeWidth="6"
          strokeLinecap="square"
        />
        <path
          d="M50.0286 59.0308L60.7793 69.7763L71.3753 59.1863"
          stroke="black"
          strokeWidth="6"
        />
        <path
          d="M18 72.2063V52.4979L28.9395 63.4329L39.9438 52.4347V72.065"
          stroke="black"
          strokeWidth="6"
        />
        <path
          d="M78.9065 70.1063L102.025 47M101.716 70.1063L78.5977 47L101.716 70.1063Z"
          stroke="#F9AC00"
          strokeWidth="6"
        />
      </svg>
    ),
    link: 'https://mdxjs.com/',
  },
  {
    heading: 'TypeScript',
    description: '',
    logo: (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={SVG_CLASSES}
      >
        <path fill="#fff" d="M0 0h120v120H0z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.25 31h55.5c1.243 0 2.25.99 2.25 2.212v54.575C90 89.01 88.993 90 87.75 90h-55.5c-1.243 0-2.25-.99-2.25-2.213V33.212C30 31.991 31.007 31 32.25 31zm31.104 31.389V57.55H42v4.839h7.624v21.545h6.069V62.39h7.66zm2.42 20.976c.978.491 2.135.86 3.472 1.104 1.336.246 2.744.369 4.225.369 1.443 0 2.814-.135 4.112-.405 1.299-.27 2.438-.715 3.416-1.334a6.86 6.86 0 002.325-2.43c.57-.999.856-2.235.856-3.707 0-1.067-.163-2.002-.49-2.806a6.54 6.54 0 00-1.411-2.144 10.306 10.306 0 00-2.212-1.683 23.939 23.939 0 00-2.907-1.408c-.79-.319-1.5-.629-2.127-.929-.627-.3-1.16-.607-1.6-.92-.439-.313-.778-.644-1.016-.993a2.057 2.057 0 01-.358-1.187c0-.405.107-.77.32-1.095.214-.325.515-.604.904-.837.389-.233.865-.414 1.43-.543a8.487 8.487 0 011.882-.193 12.844 12.844 0 013.275.45c.565.154 1.114.347 1.647.58a9.143 9.143 0 011.477.81v-5.502a14.944 14.944 0 00-3.002-.764c-1.085-.165-2.33-.248-3.736-.248-1.43 0-2.785.15-4.065.45-1.28.301-2.406.77-3.378 1.408a7.095 7.095 0 00-2.306 2.438c-.565.988-.847 2.169-.847 3.542 0 1.755.518 3.251 1.553 4.49 1.035 1.24 2.607 2.288 4.715 3.147.828.33 1.6.656 2.315.975.715.319 1.333.65 1.853.993.521.344.932.718 1.233 1.123.301.404.452.865.452 1.38 0 .38-.094.733-.282 1.058-.189.325-.474.607-.857.846-.382.24-.86.427-1.43.561-.571.135-1.24.203-2.005.203a11.67 11.67 0 01-3.877-.672 11.641 11.641 0 01-3.557-2.014v5.888z"
          fill="#3178C6"
        />
      </svg>
    ),
    link: 'https://typescriptlang.org/',
  },
  {
    heading: 'Github Actions',
    description: '',
    logo: (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 120"
        className={SVG_CLASSES}
      >
        <path fill="#fff" d="M0 0h120v120H0z" />
        <path
          clip-rule="evenodd"
          d="M40.375 26.438c7.145 0 12.938 5.792 12.938 12.937S47.52 52.313 40.374 52.313c-7.145 0-12.938-5.793-12.938-12.938 0-7.145 5.793-12.938 12.938-12.938zM59.063 52.313a8.625 8.625 0 110 17.25 8.625 8.625 0 010-17.25zM59.063 75.313a8.625 8.625 0 110 17.25 8.625 8.625 0 010-17.25zM84.938 75.313a8.625 8.625 0 110 17.25 8.625 8.625 0 010-17.25z"
          stroke="#1074E7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M61.99 58.935l-4.412 4.406-2.143-2.135"
          stroke="#1074E7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          clip-rule="evenodd"
          d="M84.938 52.313a8.625 8.625 0 110 17.25 8.625 8.625 0 010-17.25z"
          stroke="#1074E7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M87.865 58.935l-4.412 4.406-2.143-2.135M36.063 34.792a1.437 1.437 0 012.203-1.216l7.35 4.63a1.438 1.438 0 01-.008 2.438l-7.35 4.558a1.438 1.438 0 01-2.196-1.222v-9.188zM38.938 52.313v21.562c0 5.557 4.567 10.063 10.062 10.063h1.438"
          stroke="#1074E7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50.364 62.375a1.438 1.438 0 000-2.875v2.875zM37.5 52.363c0 5.53 4.483 10.012 10.012 10.012V59.5a7.137 7.137 0 01-7.137-7.137H37.5zm10.012 10.012h2.852V59.5h-2.852v2.875z"
          fill="#1074E7"
        />
        <path
          d="M67.766 60.938h8.545"
          stroke="#1074E7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M56.188 82.5a1.438 1.438 0 11-.002 2.877 1.438 1.438 0 01.002-2.877zM61.938 82.5a1.438 1.438 0 11-.002 2.877 1.438 1.438 0 01.002-2.877z"
          fill="#1074E7"
        />
        <path
          d="M74.882 83.947l-1.456.048"
          stroke="#1074E7"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    link: 'https://github.com/features/actions',
  },
  {
    heading: 'Dependabot',
    description: '',
    logo: (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={SVG_CLASSES}
      >
        <path fill="#fff" d="M0 0h120v120H0z" />
        <path
          d="M28.599 43.295l27.997-18.353a5.752 5.752 0 016.308 0L90.9 43.295a5.754 5.754 0 012.599 4.812v23.785a5.754 5.754 0 01-2.6 4.81L62.904 95.056a5.752 5.752 0 01-6.307 0L28.599 76.702A5.754 5.754 0 0126 71.892V48.107a5.753 5.753 0 012.599-4.812z"
          fill="#0366D6"
        />
        <path
          d="M62 48.75V46.5h-3.75a.75.75 0 01-.75-.75V40.5a.75.75 0 01.75-.75h5.25a.75.75 0 01.75.75v8.25H75.5A2.25 2.25 0 0177.75 51v9h1.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75h-1.5v4.5a2.25 2.25 0 01-2.25 2.25H44a2.25 2.25 0 01-2.25-2.25V69h-1.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h1.5v-9A2.25 2.25 0 0144 48.75h18z"
          fill="#fff"
        />
        <path
          d="M65.857 66.482a.907.907 0 001.283 0l4.718-4.716a.91.91 0 000-1.284l-.968-.966a.908.908 0 00-1.282 0l-3.11 3.108-1.233-1.233a.908.908 0 00-1.282 0l-.968.966a.907.907 0 000 1.284l2.843 2.841h-.001zm-15 0a.907.907 0 001.283 0l4.718-4.716a.91.91 0 000-1.284l-.968-.966a.908.908 0 00-1.282 0l-3.109 3.108-1.234-1.233a.908.908 0 00-1.282 0l-.968.966a.909.909 0 000 1.284l2.843 2.841z"
          fill="#0366D6"
        />
      </svg>
    ),
    link: 'https://dependabot.com/',
  },
  {
    heading: 'Kodiak',
    description: '',
    logo: (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 120"
        className={SVG_CLASSES}
      >
        <path fill="#fff" d="M0 0h120v120H0z" />
        <circle cx="60" cy="60" r="34" fill="url(#paint0_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="60"
            y1="26"
            x2="60"
            y2="94"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FBD55F" />
            <stop offset="1" stop-color="#F77022" />
          </linearGradient>
        </defs>
      </svg>
    ),
    link: 'https://kodiakhq.com/',
  },
  {
    heading: 'Cypress',
    description: '',
    logo: (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={SVG_CLASSES}
      >
        <path fill="#fff" d="M0 0h120v120H0z" />
        <path
          d="M42.606 72.46c1.789 0 3.243-.486 4.36-1.458 1.12-.972 1.7-2.264 1.745-3.877h9.092a12.259 12.259 0 01-2.013 6.694c-1.32 2.01-3.131 3.579-5.435 4.705-2.281 1.105-4.808 1.657-7.581 1.657-5.19 0-9.282-1.623-12.279-4.871C27.498 72.04 26 67.534 26 61.79v-.63c0-5.523 1.487-9.93 4.462-13.222C33.436 44.646 37.518 43 42.706 43c4.54 0 8.175 1.281 10.903 3.844 2.751 2.54 4.149 5.932 4.194 10.173H48.71c-.044-1.855-.626-3.358-1.744-4.506-1.118-1.171-2.594-1.757-4.428-1.757-2.26 0-3.97.818-5.133 2.453-1.14 1.612-1.71 4.241-1.71 7.887v.994c0 3.69.57 6.34 1.71 7.953 1.14 1.613 2.874 2.419 5.2 2.419zM76.891 65.965l6.71-22.302H94L79.407 85.086l-.805 1.889C76.432 91.658 72.854 94 67.867 94c-1.41 0-2.84-.21-4.294-.63v-7.257l1.476.033c1.834 0 3.198-.276 4.093-.828.916-.553 1.632-1.47 2.147-2.75l1.14-2.95-12.714-35.955h10.433l6.743 22.302z"
          fill="#000"
        />
      </svg>
    ),
    link: 'https://cypress.io/',
  },
  {
    heading: 'Inter',
    description: '',
    logo: (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={SVG_CLASSES}
      >
        <path fill="#fff" d="M0 0h120v120H0z" />
        <circle cx="60" cy="61" r="34" fill="#000" />
        <path
          d="M71.014 73.486c3.617 0 5.506-1.943 6.154-3.293h.161V73h3.185V59.344c0-6.586-5.02-7.341-7.665-7.341-3.13 0-6.693 1.08-8.312 4.858l3.023 1.08c.701-1.512 2.361-3.131 5.397-3.131 2.929 0 4.373 1.551 4.373 4.21v.108c0 1.538-1.566 1.403-5.344 1.889-3.846.5-8.043 1.35-8.043 6.1 0 4.048 3.13 6.369 7.071 6.369zm.486-2.861c-2.537 0-4.372-1.133-4.372-3.347 0-2.429 2.213-3.184 4.696-3.508 1.35-.162 4.966-.54 5.505-1.188v2.915c0 2.591-2.05 5.128-5.829 5.128zM40.48 73l2.78-7.827h11.173L57.213 73h3.509L50.574 45.364h-3.455L36.972 73h3.508zm3.833-10.795l4.426-12.47h.216l4.426 12.47h-9.069z"
          fill="#fff"
        />
      </svg>
    ),
    link: 'https://rsms.me/inter/',
  },
];
