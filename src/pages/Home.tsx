import React, { useState, useMemo } from "react";
import Categories from "../components/Categories";
import Banners from "../components/Banners";
import CategoryRow from "../components/CategoryRow";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/products";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return products.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* SEARCH BAR SECTION */}
      <div className="px-4 py-6 bg-yellow-400 sticky top-0 z-20 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center bg-white rounded-xl px-4 py-3 shadow-inner">
          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder='Search "milk", "chicken", "diapers"' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent w-full focus:outline-none text-base font-medium text-gray-800" 
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm("")} className="ml-2 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {searchTerm === "" ? (
          <>
            {/* PROMO BANNERS */}
            <Banners />

            {/* PRODUCT ROWS */}
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
                ? `Showing ${filteredProducts.length} results for "${searchTerm}"`
                : `No results found for "${searchTerm}"`}
            </h2>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-2xl">
                <p className="text-gray-500 text-lg">Try searching for something else like "milk" or "munchies".</p>
                <div className="mt-8">
                   <h3 className="text-gray-400 font-semibold mb-4">Related Suggestions</h3>
                   <div className="flex flex-wrap justify-center gap-2">
                      {["Milk", "Chicken", "Biscuits", "Soap", "Diapers"].map(tag => (
                        <button 
                          key={tag}
                          onClick={() => setSearchTerm(tag)}
                          className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:border-green-500 hover:text-green-600 transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                   </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
