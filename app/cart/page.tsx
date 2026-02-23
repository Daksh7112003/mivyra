export default function CartPage() {
  return (
    <div className="container-brand py-10">
      <h1 className="text-3xl font-semibold">Your Cart</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="rounded-2xl bg-white p-6 shadow-soft">
          <p>Luna Pearl Drop Earrings</p>
          <div className="mt-3 flex items-center gap-3">
            <button className="rounded border px-3">-</button>
            <span>1</span>
            <button className="rounded border px-3">+</button>
          </div>
          <div className="mt-6 border-t pt-4">
            <input placeholder="Coupon code" className="rounded-full border px-4 py-2" />
            <button className="ml-2 rounded-full border border-rosegold px-4 py-2 text-rosegold">Apply</button>
          </div>
        </div>
        <aside className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold">Summary</h2>
          <p className="mt-2 text-sm">Subtotal: ₹1499</p>
          <p className="text-sm">Shipping: ₹99</p>
          <p className="mt-3 font-medium">Total: ₹1598</p>
        </aside>
      </div>
    </div>
  );
}
