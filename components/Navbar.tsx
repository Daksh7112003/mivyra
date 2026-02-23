import Link from 'next/link';

const links = [
  ['Shop', '/shop'],
  ['About', '/about'],
  ['Contact', '/contact'],
  ['Orders', '/orders'],
  ['Admin', '/admin']
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-beige bg-offwhite/90 backdrop-blur">
      <nav className="container-brand flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-semibold tracking-wide text-rosegold">Mivyra</Link>
        <div className="flex items-center gap-4 text-sm">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-rosegold">{label}</Link>
          ))}
          <Link href="/cart" className="btn-primary">Cart</Link>
        </div>
      </nav>
    </header>
  );
}
