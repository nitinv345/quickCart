import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CategoryPage() {
  const { name } = useParams<{ name: string }>();
  const { addToCart } = useContext(CartContext);

  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === name?.toLowerCase()
  );

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">
        {name}
      </h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-xl p-4 flex flex-col">
              <div className="h-40 w-full overflow-hidden rounded-lg mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>

              <div className="mt-auto pt-4 flex items-center justify-between">
                <p className="text-green-600 font-bold text-xl">
                  ₹{product.price}
                </p>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="bg-yellow-500 hover:bg-yellow-600 active:scale-95 transition-all text-white w-full mt-4 py-2 rounded-lg font-semibold shadow-sm"
              >
                Add to Cart
              </button>
            </div>
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
