export default function CheckoutPage() {
  return (
    <div className="container-brand py-10">
      <h1 className="text-3xl font-semibold">Checkout</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
        <form className="space-y-4 rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="font-semibold">Shipping Address</h2>
          {['Full Name','Address Line 1','City','State','ZIP Code','Country'].map((f)=><input key={f} placeholder={f} className="w-full rounded-xl border p-3"/>) }
          <h3 className="font-semibold">Payment Method</h3>
          <label className="block"><input type="radio" name="pay" defaultChecked className="mr-2"/>Cash on Delivery</label>
          <label className="block"><input type="radio" name="pay" className="mr-2"/>Razorpay</label>
          <button className="btn-primary">Place Order</button>
        </form>
        <aside className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="font-semibold">Order Summary</h2>
          <p className="mt-3 text-sm">Items: ₹1499</p><p className="text-sm">Shipping: ₹99</p><p className="font-medium">Total: ₹1598</p>
        </aside>
      </div>
    </div>
  );
}
