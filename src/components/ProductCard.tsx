import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-lg shadow p-3 w-[180px] flex-shrink-0">
      <img
        src={product.img}
        className="h-28 w-full object-contain"
        alt={product.name}
      />

      <span className="text-[10px] text-gray-500 font-bold block mt-2">
        ⏱ {product.time}
      </span>

      <h3 className="text-sm font-semibold mt-1 line-clamp-2 h-10 leading-tight">
        {product.name}
      </h3>

      <p className="text-xs text-gray-500">
        {product.size}
      </p>

      <div className="flex justify-between items-center mt-2">
        <span className="font-bold">
          ₹{product.price}
        </span>

        <button
          onClick={() => addToCart(product)}
          className="border border-green-600 text-green-600 px-3 py-1 rounded font-bold text-sm hover:bg-green-50 active:bg-green-100"
        >
          ADD
        </button>
      </div>
    </div>
  );
}
