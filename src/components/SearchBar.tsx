import { useState } from "react";

export default function SearchBar({ products, setFiltered }: { products: any[], setFiltered: (results: any[]) => void }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    const result = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase()) ||
      product.category.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(result);
  };

  return (
    <div className="flex justify-center p-6 bg-yellow-400 sticky top-0 z-20 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center bg-white rounded-xl px-4 py-3 shadow-inner w-full">
        <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          value={query}
          onChange={handleSearch}
          placeholder="Search groceries..."
          className="bg-transparent w-full focus:outline-none text-base font-medium text-gray-800"
        />
        {query && (
          <button onClick={() => { setQuery(""); setFiltered(products); }} className="ml-2 text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
