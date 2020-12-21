import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { href: '/', label: 'About' },
  { href: '/work', label: 'Work' },
  // { href: "/posts", label: "Posts" },
  { href: '/screencasts', label: 'Screencasts' },
];

export default function Nav() {
  return (
    <nav className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <Link href="/">
        <a className="hover:opacity-80 transition-opacity">
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
      <ul className="flex space-x-4 sm:space-x-8 mt-4 sm:mt-0">
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
