import { products } from '@/lib/data';

export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = products.find((p) => p._id === params.id || p.slug === params.id) || products[0];
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  return (
    <div className="container-brand py-10">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <img src={product.images[0]} alt={product.name} className="h-[500px] w-full rounded-3xl object-cover" />
          <div className="grid grid-cols-3 gap-3">{product.images.map((img) => <img key={img} src={img} className="h-28 w-full rounded-xl object-cover" />)}</div>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-mutedbrown">{product.description}</p>
          <p><span className="text-2xl font-semibold text-rosegold">₹{product.price}</span> <span className="ml-2 line-through text-mutedbrown">₹{product.originalPrice}</span> <span className="ml-2 text-sm">{discount}% OFF</span></p>
          <div>
            <h3 className="font-medium">Variant</h3>
            <div className="mt-2 flex gap-2">{['Rose Gold', 'Silver', 'Matte'].map((v) => <button key={v} className="rounded-full border px-3 py-1 text-sm">{v}</button>)}</div>
          </div>
          <div className="flex gap-3">
            <button className="btn-primary">Add to cart</button>
            <button className="rounded-full border border-rosegold px-5 py-2 text-rosegold">Wishlist</button>
          </div>
          <section>
            <h3 className="font-medium">Reviews</h3>
            <p className="mt-2 text-sm">⭐ {product.rating} ({product.reviewsCount} reviews)</p>
          </section>
        </div>
      </div>
    </div>
  );
}
