import Image from 'next/image';

export const Header = () => {
  return (
    <header className="flex items-center gap-4">
      <span className="flex relative">
        <span className="inline-flex rounded-full overflow-hidden">
          <Image
            src="/img/me.jpeg"
            width={64}
            height={64}
            alt="Alex Carpenter avatar"
            priority
          />
        </span>
        <span className="absolute -bottom-2 -right-2 grid place-items-center w-8 h-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full">
          👋
        </span>
      </span>
      <span>
        <h1 className="text-xl">Alex Carpenter</h1>
        <p>UI Engineer</p>
      </span>
    </header>
  );
};
