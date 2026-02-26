'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

async function readApiError(response: Response) {
  const fallback = 'Login failed';

  try {
    const data = await response.json();
    return data?.message || fallback;
  } catch {
    return fallback;
  }
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        setError(await readApiError(response));
        return;
      }

      const data = await response.json();
      if (data.user.role === 'admin') router.push('/admin');
      else router.push('/dashboard');
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-brand py-12">
      <form onSubmit={onSubmit} className="mx-auto max-w-md space-y-4 rounded-2xl bg-white p-6 shadow-soft">
        <h1 className="text-2xl font-semibold">Login</h1>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-xl border p-3" required />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className="w-full rounded-xl border p-3" required />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button disabled={loading} className="btn-primary w-full">{loading ? 'Please wait...' : 'Login'}</button>
        <p className="text-sm">New here? <Link href="/auth/signup" className="text-rosegold underline">Create account</Link></p>
      </form>
    </div>
  );
}
