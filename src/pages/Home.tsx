import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getDocs(collection(db, "products"));
      setProducts(
        data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    }
    loadProducts();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-yellow-100 py-16 text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Groceries Delivered in Minutes</h1>
        <p className="text-gray-600 mb-6">Order fruits, vegetables, snacks and more instantly.</p>
        <input type="text" placeholder="Search groceries..." className="w-full max-w-md p-3 border rounded-lg" />
      </section>
      
      <Categories />

      {/* PRODUCT GRID */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6">Popular Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>© 2026 QuickCart Grocery Delivery</p>
      </footer>
    </div>
  );
}
