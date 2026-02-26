export default function Footer() {
  return (
    <footer className="mt-16 border-t border-beige py-10">
      <div className="container-brand grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold text-rosegold">Mivyra</h3>
          <p className="mt-2 text-sm text-mutedbrown">Elegant fashion jewellery for modern women.</p>
        </div>
        <div>
          <h4 className="font-medium">Customer Care</h4>
          <p className="text-sm">support@mivyra.com</p>
        </div>
        <div>
          <h4 className="font-medium">Follow us</h4>
          <p className="text-sm">Instagram · Pinterest · Facebook</p>
        </div>
      </div>
    </footer>
  );
}
