export default function AdminPage() {
  return (
    <div className="container-brand py-10">
      <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
      <p className="mt-2 text-sm text-mutedbrown">Secure admin login required. Sample credentials in README.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[['Total Sales','₹2,14,000'],['Orders','156'],['Users','1,024']].map(([k,v])=><div key={k} className="rounded-2xl bg-white p-5 shadow-soft"><p className="text-sm text-mutedbrown">{k}</p><p className="text-2xl font-semibold text-rosegold">{v}</p></div>)}
      </div>
    </div>
  );
}
