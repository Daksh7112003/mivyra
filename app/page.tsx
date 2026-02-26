import ProductCard from '@/components/ProductCard';
import { products, testimonials } from '@/lib/data';

export default function HomePage() {
  return (
    <div>
      <section className="container-brand grid items-center gap-8 py-12 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-mutedbrown">New Collection 2026</p>
          <h1 className="mt-3 text-5xl font-semibold leading-tight">Wear Your Elegance, Every Day.</h1>
          <p className="mt-4 max-w-xl text-mutedbrown">Mivyra curates premium non-gold jewellery in timeless silhouettes designed to make every look feel luxurious.</p>
          <button className="btn-primary mt-6">Shop now</button>
        </div>
        <img src="https://images.unsplash.com/photo-1617038261299-8746f9f0f5f2?w=1600" alt="Mivyra hero" className="h-[480px] w-full rounded-3xl object-cover" />
      </section>

      <section className="container-brand py-10">
        <h2 className="text-2xl font-semibold">Best Sellers</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => <ProductCard key={product._id} product={product} />)}
        </div>
      </section>

      <section className="container-brand py-10">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl bg-white p-5 shadow-soft">
              <p>“{t.text}”</p>
              <footer className="mt-3 text-sm text-rosegold">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="container-brand py-10">
        <h2 className="text-2xl font-semibold">Instagram @mivyra</h2>
        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
          {products.map((p) => <img key={p._id} src={p.images[0]} alt={p.name} className="h-40 w-full rounded-xl object-cover" />)}
        </div>
      </section>

      <section className="container-brand py-12">
        <div className="rounded-2xl bg-charcoal p-8 text-offwhite">
          <h3 className="text-2xl font-semibold">Join the Mivyra Circle</h3>
          <p className="mt-2 text-sm text-beige">Get early access to launches, styling tips, and exclusive offers.</p>
          <div className="mt-4 flex max-w-md gap-3">
            <input placeholder="Enter your email" className="w-full rounded-full px-4 py-2 text-charcoal" />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
