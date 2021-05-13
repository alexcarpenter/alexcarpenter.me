import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="mb-5">
      <Link href="/">
        <a>
          <Image
            src="/images/me.jpg"
            alt="Picture of Alex Carpenter"
            width={48}
            height={48}
            className="rounded-md"
            priority
          />
        </a>
      </Link>
    </header>
  );
}
