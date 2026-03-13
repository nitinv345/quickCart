export default function Banners() {
  const images = [
    { src: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80", alt: "Fresh Vegetables" },
    { src: "https://images.unsplash.com/photo-1543083477-4f7f44aefc10?auto=format&fit=crop&w=800&q=80", alt: "Snacks & Drinks" },
    { src: "https://images.unsplash.com/photo-1506484334402-40f2269bd528?auto=format&fit=crop&w=800&q=80", alt: "Dairy Products" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {images.map((img, idx) => (
        <div key={idx} className="h-44 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <img
            src={img.src}
            className="w-full h-full object-cover transition-transform hover:scale-105"
            alt={img.alt}
          />
        </div>
      ))}
    </div>
  );
}
