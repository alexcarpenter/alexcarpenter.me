import Image from 'next/image';

export const Header = () => {
  return (
    <header className="flex items-center gap-4">
      <span className="flex rounded-full overflow-hidden w-16 h-16">
        <Image
          src="/img/me.jpeg"
          width={64}
          height={64}
          alt="Alex Carpenter avatar"
          priority
        />
      </span>
      <span>
        <h1 className="text-xl">Alex Carpenter</h1>
        <p>UI Engineer</p>
      </span>
    </header>
  );
};
