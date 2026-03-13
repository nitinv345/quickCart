import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeItem, updateQty } = useContext(CartContext);
  const navigate = useNavigate();
  
  const total = cart.reduce(
    (sum: number, item: any) => sum + item.price * (item.qty || 1),
    0
  );

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Your Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <p className="text-gray-500 mb-6 font-medium text-lg">Your cart is empty</p>
          <button 
            onClick={() => navigate("/")}
            className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-all shadow-md active:scale-95"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 space-y-6">
            {cart.map((item: any) => (
              <div key={item.id} className="flex gap-4 items-center border-b border-gray-50 pb-6 last:border-0 last:pb-0">
                <div className="h-16 w-16 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src={item.img} alt={item.name} className="h-full w-full object-contain" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-bold text-gray-800">{item.name}</h3>
                  <p className="text-xs text-gray-400 font-medium">₹{item.price} per unit</p>
                </div>

                <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden h-10">
                  <button 
                    onClick={() => updateQty(item.id, Math.max(0, (item.qty || 1) - 1))}
                    className="px-3 hover:bg-gray-200 transition-colors font-bold text-gray-600"
                  >
                    −
                  </button>
                  <span className="px-2 text-sm font-extrabold min-w-[30px] text-center text-gray-800">{item.qty}</span>
                  <button 
                    onClick={() => updateQty(item.id, (item.qty || 1) + 1)}
                    className="px-3 hover:bg-gray-200 transition-colors font-bold text-gray-600"
                  >
                    +
                  </button>
                </div>

                <div className="text-right min-w-[80px]">
                  <p className="font-bold text-gray-900">₹{item.price * (item.qty || 1)}</p>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="text-xs text-red-500 font-semibold hover:underline mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 border-t border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-2xl font-extrabold text-gray-900">₹{total}</span>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => navigate("/")}
                className="flex-1 bg-white border border-gray-200 text-gray-600 px-6 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all active:scale-95"
              >
                Add More
              </button>
              <button 
                onClick={() => navigate("/checkout")}
                className="flex-[2] bg-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-md active:scale-95"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
