import { useState, useMemo } from "react";
import Banners from "../components/Banners";
import CategoryRow from "../components/CategoryRow";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { categories, products } from "../data/products";

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchUpdate = (results: any[]) => {
    setFilteredProducts(results);
    // Determine if we are actively searching (results differ from all products)
    // Actually, it's simpler: if the query is not empty, SearchBar calls this.
    // Let's use a simpler heuristic or pass a query state up.
    // For now, if results length is different from total products, or if we use a flag.
  };

  // We need to know if the search is active to toggle views.
  // Refactoring Home to be cleaner:
  return (
    <div className="bg-white min-h-screen pb-20">
      <SearchBar 
        products={products} 
        setFiltered={(results) => {
          setFilteredProducts(results);
          // If results is the same as products, we cleared the search.
          setIsSearching(results.length !== products.length);
        }} 
      />

      <div className="max-w-7xl mx-auto px-4">
        {!isSearching ? (
          <>
            <Banners />
            <div className="mt-4">
              {categories.map((cat) => (
                <CategoryRow 
                  key={cat.slug} 
                  title={cat.title} 
                  items={cat.items} 
                />
              ))}
            </div>
          </>
        ) : (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">
              {filteredProducts.length > 0 
                ? `Found ${filteredProducts.length} items`
                : "No products found"}
            </h2>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-2xl">
                <p className="text-gray-500">Try searching for something else like "milk" or "chicken".</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
