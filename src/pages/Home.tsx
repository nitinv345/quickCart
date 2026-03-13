import { categories } from "../data/products";
import CategoryRow from "../components/CategoryRow";
import Banners from "../components/Banners";

export default function Home() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Banners />
      
      {categories.map(cat => (
        <CategoryRow
          key={cat.slug}
          title={cat.title}
          items={cat.items}
        />
      ))}
    </div>
  );
}

