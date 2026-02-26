import ProductCard from '@/components/ProductCard';
import { categories, products } from '@/lib/data';

export default function ShopPage() {
  return (
    <div className="container-brand py-10">
      <h1 className="text-3xl font-semibold">Shop Jewellery</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="space-y-6 rounded-2xl bg-white p-5 shadow-soft">
          <div>
            <h3 className="font-medium">Categories</h3>
            {categories.map((c) => <label key={c} className="mt-2 block text-sm"><input type="checkbox" className="mr-2" />{c}</label>)}
          </div>
          <div>
            <h3 className="font-medium">Price</h3>
            <input type="range" className="mt-3 w-full" />
          </div>
          <div>
            <h3 className="font-medium">Occasion</h3>
            {['Casual', 'Party', 'Gift', 'Wedding'].map((o) => <label key={o} className="mt-2 block text-sm"><input type="checkbox" className="mr-2" />{o}</label>)}
          </div>
        </aside>
        <section>
          <div className="mb-4 flex justify-end">
            <select className="rounded-full border px-4 py-2 text-sm">
              <option>Sort: Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((p) => <ProductCard key={p._id} product={p} />)}
          </div>
        </section>
      </div>
    </div>
  );
}
