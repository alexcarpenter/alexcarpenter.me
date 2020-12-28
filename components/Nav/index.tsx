import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { href: '/', label: 'About' },
  { href: '/work', label: 'Work' },
  // { href: '/posts', label: 'Posts' },
  { href: '/screencasts', label: 'Screencasts' },
];

export default function Nav() {
  return (
    <nav className="flex flex-col items-start justify-between mb-8 sm:flex-row sm:items-center">
      <Link href="/">
        <a className="w-16 h-16 transition-opacity rounded-full hover:opacity-80 focus:outline-none focus:ring focus:ring-gray-300">
          <span className="sr-only">Home</span>
          <Image
            src="/me.jpg"
            alt="Picture of Alex Carpenter"
            width={64}
            height={64}
            className="rounded-full"
            priority
          />
        </a>
      </Link>
      <ul className="flex mt-4 space-x-4 sm:space-x-8 sm:mt-0">
        {navItems.map((item) => {
          return (
            <li key={item.href}>
              <Link href={item.href}>
                <a className={`hover:text-blue transition-colors`}>
                  {item.label}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
