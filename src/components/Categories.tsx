import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Fruits", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf", color: "bg-red-100" },
  { name: "Vegetables", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999", color: "bg-green-100" },
  { name: "Dairy", img: "https://images.unsplash.com/photo-1580910051074-3eb694886505", color: "bg-blue-100" },
  { name: "Snacks", img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087", color: "bg-yellow-100" },
  { name: "Beverages", img: "https://images.unsplash.com/photo-1596803244618-8b06c2b59d7c", color: "bg-purple-100" },
  { name: "Cleaning", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952", color: "bg-orange-100" }
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      
      {/* Mobile: Horizontal Scroll, Desktop: Grid */}
      <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-4 lg:grid-cols-6 md:overflow-visible">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/category/${cat.name}`)}
            className={`${cat.color} min-w-[120px] rounded-xl p-4 shadow cursor-pointer transition hover:shadow-lg`}
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="h-24 w-full object-cover rounded-lg"
              referrerPolicy="no-referrer"
            />
            <p className="text-center mt-3 font-semibold text-gray-800">{cat.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
