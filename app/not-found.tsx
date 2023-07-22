import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <header>
        <h1 className="font-semibold">404&nbsp;&not;</h1>
        <p className="text-gray-500">Could not find requested resource.</p>
        <Link href="/" className="text-gray-500 underline">
          Back home
        </Link>
      </header>
    </>
  );
}
