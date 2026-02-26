import Link from 'next/link';

export default function AuthPage() {
  return (
    <div className="container-brand py-12">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-6 text-center shadow-soft">
        <h1 className="text-2xl font-semibold">Welcome to Mivyra</h1>
        <p className="mt-2 text-sm text-mutedbrown">Sign in to continue or create your account.</p>
        <div className="mt-6 grid gap-3">
          <Link href="/auth/login" className="btn-primary">Login</Link>
          <Link href="/auth/signup" className="rounded-full border border-rosegold px-4 py-2 text-rosegold">Create account</Link>
        </div>
      </div>
    </div>
  );
}
