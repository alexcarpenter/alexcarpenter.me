import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "About" },
  // { href: "/work", label: "Work" },
  { href: "/screencasts", label: "Screencasts" },
];

export default function Nav() {
  return (
    <nav className='mb-8 flex justify-between items-center'>
      <Image
        src='/me.jpg'
        alt='Picture of Alex Carpenter'
        width={64}
        height={64}
        className='rounded-full'
      />
      <ul className='flex space-x-4'>
        {navItems.map((item) => {
          return (
            <li>
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
