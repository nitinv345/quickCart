import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {
  const { name } = useParams<{ name: string }>();

  const filteredProducts = products.filter(
    (p) => p.category?.toLowerCase() === name?.toLowerCase()
  );

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">
        {name}
      </h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">No products found for this category.</p>
        </div>
      )}
    </div>
  );
}
