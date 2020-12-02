import Link from 'next/link';

function MDXh2({ children }) {
  return <h2 className="mt-4 text-2xl font-bold">{children}</h2>
}

function MDXh3({ children }) {
  return <h3 className="mt-4 text-xl font-bold">{children}</h3>
}

function MDXLink({ href, children }) {
  return <Link href={href}><a className="text-blue hover:underline">{children}</a></Link>
}

function MDXBlockquote({ children }) {
  return <blockquote className="border-l-4 border-blue italic px-4 py-2 text-gray-600 text-xl">{children}</blockquote>
}

function MDXCode({ children }) {
  return <pre className="p-4 bg-gray-900 text-white rounded-md">{children}</pre>
}

export {
  MDXh2,
  MDXh3,
  MDXLink,
  MDXBlockquote,
  MDXCode,
}
