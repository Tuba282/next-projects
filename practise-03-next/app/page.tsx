import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href='/navbar'>{/*ye file base routing */}
        <h1 className="bg-yellow-950 text-white text-4xl">Want to go on Navbar</h1>
      </Link>
      <Link href='/components/footer'>{/*ye component linking */}
        <h1 className="bg-emerald-700 text-white text-4xl">Want to go on Footer</h1>
      </Link>
    </>
  );
}
