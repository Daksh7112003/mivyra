import { getSessionUser } from '@/lib/rbac';
import { redirect } from 'next/navigation';

export default async function UserDashboardPage() {
  const user = await getSessionUser();

  if (!user) redirect('/auth/login');
  if (user.role === 'admin') redirect('/admin');

  return (
    <div className="container-brand py-10">
      <h1 className="text-3xl font-semibold">User Dashboard</h1>
      <p className="mt-2 text-mutedbrown">Welcome back, {user.name}. View your orders and wishlist from here.</p>
    </div>
  );
}
