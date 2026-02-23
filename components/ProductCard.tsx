import Link from 'next/link';

type Product = {
  _id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
};

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-soft">
      <img src={product.images[0]} alt={product.name} className="h-64 w-full object-cover" />
      <div className="space-y-2 p-4">
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-rosegold">₹{product.price}</span>
          {product.originalPrice && <span className="text-mutedbrown line-through">₹{product.originalPrice}</span>}
          {!!discount && <span className="rounded bg-pastelpink px-2 py-0.5 text-xs">{discount}% OFF</span>}
        </div>
        <Link href={`/product/${product._id}`} className="inline-block text-sm text-rosegold underline">View details</Link>
      </div>
    </article>
  );
}
