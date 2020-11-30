import Link from 'next/link';

export default function PseudoLink({ href, children }) {
  return (
    <>
      <style jsx>{`
        a::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
      <Link href={href}><a className="hover:text-blue">{children}</a></Link>
    </>
  )
}
