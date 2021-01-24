import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { usePress } from '@react-aria/interactions';
import { Search } from 'react-feather';

const navItems = [
  { href: '/', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/posts', label: 'Posts' },
  { href: '/screencasts', label: 'Screencasts' },
];

function DialogTrigger() {
  let { pressProps, isPressed } = usePress({
    onPressUp: (e) => {},
  });

  return (
    <>
      <button
        {...pressProps}
        className="relative w-8 h-8 rounded-full flex items-center justify-center group focus:outline-none"
      >
        <span className="sr-only">Search</span>
        <Search width=".85em" className="relative z-10" />
        <span
          aria-hidden="true"
          className={clsx(
            'bg-gray-200 absolute inset w-8 h-8 rounded-full transform transition-transform transition-background',
            !isPressed && 'group-hover:scale-150 group-focus:scale-150',
          )}
        ></span>
      </button>
    </>
  );
}

export default function Nav() {
  return (
    <nav className="flex flex-col items-start justify-between mb-8 sm:flex-row sm:items-center">
      <Link href="/">
        <a className="w-16 h-16 transition-opacity rounded-full hover:opacity-80 focus:outline-none focus:ring focus:ring-gray-300">
          <span className="sr-only">Home</span>
          <Image
            src="/images/me.jpg"
            alt="Picture of Alex Carpenter"
            width={64}
            height={64}
            className="rounded-full"
            priority
          />
        </a>
      </Link>
      <ul className="flex items-center mt-4 space-x-4 sm:space-x-8 sm:mt-0">
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
        {/* <li>
          <DialogTrigger />
        </li> */}
      </ul>
    </nav>
  );
}
