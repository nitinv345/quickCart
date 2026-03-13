export default function Banners() {
  const bannerImages = [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1608686209041-721100dd1dbf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1543083477-4f7f44aefc10?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {bannerImages.map((src, index) => (
        <img
          key={index}
          src={src}
          className="rounded-xl w-full h-40 object-cover shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          alt={`Banner ${index + 1}`}
        />
      ))}
    </div>
  );
}
