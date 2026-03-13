import { useContext } from "react";
import { CartContext } from "../context/CartContext";

/**
 * ProductCard component refactored as per user request.
 * Removed delivery time display but kept Blinkit-style aesthetics.
 */
export default function ProductCard({ product }: { product: any }) {
  const { addToCart, cart, updateQty } = useContext(CartContext);
  const itemInCart = cart.find((i: any) => i.id === product.id);

  return (
    <div className="bg-white rounded-lg shadow-md p-3 w-[180px] flex-shrink-0 border border-gray-100 hover:shadow-lg transition-all">
      <div className="h-28 w-full flex items-center justify-center overflow-hidden mb-2">
        <img
          src={product.img}
          className="h-full w-full object-contain hover:scale-110 transition-transform"
          alt={product.name}
          onError={(e: any) => { e.target.src = "https://placehold.co/400x400?text=Product"; }}
        />
      </div>

      <h3 className="text-sm font-bold mt-1 line-clamp-2 h-10 leading-tight text-gray-800">
        {product.name}
      </h3>

      <p className="text-xs text-gray-400 font-medium">
        {product.size}
      </p>

      <div className="flex justify-between items-center mt-3">
        <span className="font-extrabold text-gray-900">
          ₹{product.price}
        </span>

        {!itemInCart ? (
          <button
            onClick={() => addToCart(product)}
            className="border border-green-600 text-green-600 px-4 py-1 rounded-lg font-bold text-xs hover:bg-green-600 hover:text-white transition-all active:scale-95"
          >
            ADD
          </button>
        ) : (
          <div className="flex items-center bg-green-600 text-white rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => updateQty(product.id, itemInCart.qty - 1)}
              className="px-2 py-1 hover:bg-green-700 transition-colors font-bold text-xs"
            >
              −
            </button>
            <span className="px-1 text-xs font-bold min-w-[20px] text-center">{itemInCart.qty}</span>
            <button
              onClick={() => updateQty(product.id, itemInCart.qty + 1)}
              className="px-2 py-1 hover:bg-green-700 transition-colors font-bold text-xs"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
