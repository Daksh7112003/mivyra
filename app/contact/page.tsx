export default function ContactPage() {
  return (
    <div className="container-brand py-10">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <form className="space-y-3 rounded-2xl bg-white p-5 shadow-soft">
          <input placeholder="Name" className="w-full rounded-xl border p-3" />
          <input placeholder="Email" className="w-full rounded-xl border p-3" />
          <textarea placeholder="Message" className="h-32 w-full rounded-xl border p-3" />
          <button className="btn-primary">Send</button>
        </form>
        <div className="rounded-2xl bg-white p-5 shadow-soft">
          <p>Email: support@mivyra.com</p>
          <p className="mt-2">Instagram: @mivyra</p>
          <p>Facebook: /mivyra</p>
        </div>
      </div>
    </div>
  );
}
