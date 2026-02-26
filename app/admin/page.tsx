import { requireAdminPage } from '@/lib/rbac';

export default async function AdminPage() {
  const user = await requireAdminPage();

  return (
    <div className="container-brand py-10">
      <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
      <p className="mt-2 text-sm text-mutedbrown">Welcome {user.name}. You have full access to product, order, and coupon management.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[['Total Sales', '₹2,14,000'], ['Orders', '156'], ['Users', '1,024']].map(([k, v]) => (
          <div key={k} className="rounded-2xl bg-white p-5 shadow-soft">
            <p className="text-sm text-mutedbrown">{k}</p>
            <p className="text-2xl font-semibold text-rosegold">{v}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <section className="rounded-2xl bg-white p-5 shadow-soft">
          <h2 className="font-semibold">Product Management</h2>
          <p className="mt-2 text-sm text-mutedbrown">Add, edit, delete products and manage inventory.</p>
        </section>
        <section className="rounded-2xl bg-white p-5 shadow-soft">
          <h2 className="font-semibold">Order Management</h2>
          <p className="mt-2 text-sm text-mutedbrown">Update order statuses from processing to delivery.</p>
        </section>
        <section className="rounded-2xl bg-white p-5 shadow-soft">
          <h2 className="font-semibold">Coupon Management</h2>
          <p className="mt-2 text-sm text-mutedbrown">Create and control discount campaigns securely.</p>
        </section>
      </div>
    </div>
  );
}
