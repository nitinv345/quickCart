import React from "react";
import Categories from "../components/Categories";
import Banners from "../components/Banners";
import CategoryRow from "../components/CategoryRow";
import { categories } from "../data/products";

export default function Home() {
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
            placeholder='Search "milk", "eggs", "chips"' 
            className="bg-transparent w-full focus:outline-none text-base font-medium text-gray-800" 
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ICON CATEGORIES */}
        <Categories />

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
      </div>
    </div>
  );
}
