import { useRouter } from 'next/router';
import cx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  const { pathname } = useRouter();
  return (
    <header className="mb-8 flex items-center">
      <div className="w-28 flex-shrink-0">
        <Link href="/">
          <a className="flex items-start w-12">
            <Image
              src="/images/me.jpg"
              alt="Picture of Alex Carpenter"
              width={48}
              height={48}
              className="rounded-md w-full block"
              priority
            />
          </a>
        </Link>
      </div>
      <ul className="flex space-x-8">
        <li>
          <Link href="/work">
            <a
              className={cx(
                'text-white text-opacity-75 hover:text-opacity-100',
              )}
              aria-current={pathname === '/work' ? 'page' : null}
            >
              Work
            </a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a
              className={cx(
                'text-white text-opacity-75 hover:text-opacity-100',
              )}
              aria-current={pathname === '/posts' ? 'page' : null}
            >
              Posts
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
