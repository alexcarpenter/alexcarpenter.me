import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="mb-8 flex justify-between items-center">
      <Image
        src="/me.jpg"
        alt="Picture of Alex Carpenter"
        width={64}
        height={64}
        className="rounded-full"
      />
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <a className="hover:text-blue transition-colors">About</a>
          </Link>
        </li>
        <li>
          <Link href="/screencasts">
            <a className="hover:text-blue transition-colors">Screencasts</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a className="hover:text-blue transition-colors">Posts</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
