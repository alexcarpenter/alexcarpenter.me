import Image from "next/image";

const MediaObject = ({
  cta,
  image,
  heading,
  description,
  href,
}: {
  heading: string;
  description: string;
  href: string;
  cta?: string;
  image: {
    src: string;
    alt: string;
  };
}) => {
  return (
    <a
      href={href}
      className="media-object grid grid-cols-[1fr_150px] gap-6 !no-underline sm:grid-cols-[1fr_200px]"
    >
      <span>
        <h3 className="text-primary underline">{heading}</h3>
        <p className="mt-2 text-secondary">{description}</p>
        {cta ? (
          <p className="mt-2 inline-flex items-center gap-2 text-primary">
            {cta}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 39.24 32.26"
              height=".65em"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m29.1 18.43-6.19.44H0v-5.48h23.91l6.26.44L15.84 0h7.63l15.77 15.84v.58L23.47 32.26h-7.63Z" />
            </svg>
          </p>
        ) : null}
      </span>
      <span className="relative aspect-square overflow-hidden sm:aspect-[3/2]">
        <Image
          src={image.src}
          width="400"
          height="300"
          alt={image.alt}
          className="absolute h-full w-full object-cover"
        />
      </span>
    </a>
  );
};

export { MediaObject };
