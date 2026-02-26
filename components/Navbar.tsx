import Link from 'next/link';
import { getSessionUser } from '@/lib/rbac';

const baseLinks = [
  ['Shop', '/shop'],
  ['About', '/about'],
  ['Contact', '/contact'],
  ['Orders', '/orders']
] as const;

export default async function Navbar() {
  const user = await getSessionUser();

  return (
    <header className="sticky top-0 z-50 border-b border-beige bg-offwhite/90 backdrop-blur">
      <nav className="container-brand flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-semibold tracking-wide text-rosegold">Mivyra</Link>
        <div className="flex items-center gap-4 text-sm">
          {baseLinks.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-rosegold">{label}</Link>
          ))}

          {user?.role === 'admin' ? (
            <Link href="/admin" className="hover:text-rosegold">Admin</Link>
          ) : user ? (
            <Link href="/dashboard" className="hover:text-rosegold">Dashboard</Link>
          ) : (
            <Link href="/auth/login" className="hover:text-rosegold">Login</Link>
          )}

          <Link href="/cart" className="btn-primary">Cart</Link>
        </div>
      </nav>
    </header>
  );
}
