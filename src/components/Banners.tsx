export default function Banners() {
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      <img
        src="https://images.unsplash.com/photo-1542838132-92c53300491e"
        className="rounded-xl w-full h-40 object-cover"
        alt="Banner 1"
      />
      <img
        src="https://images.unsplash.com/photo-1543083477-4f7f44aefc10"
        className="rounded-xl w-full h-40 object-cover"
        alt="Banner 2"
      />
      <img
        src="https://images.unsplash.com/photo-1506484334402-40f2269bd528"
        className="rounded-xl w-full h-40 object-cover"
        alt="Banner 3"
      />
    </div>
  );
}
