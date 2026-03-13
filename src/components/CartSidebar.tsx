import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartSidebar({ open, setOpen }) {
  const { cart, removeItem, updateQty } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg 
    transform ${open ? "translate-x-0" : "translate-x-full"} 
    transition-transform duration-300 z-50`}>
      <div className="p-4 flex justify-between border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={() => setOpen(false)}>✕</button>
      </div>
      <div className="p-4 overflow-y-auto h-[70%]">
        {cart.map((item: any) => (
          <div key={item.id} className="flex justify-between mb-4">
            <div>
              <p className="font-medium">{item.name}</p>
              <input
                type="number"
                value={item.qty}
                onChange={(e) =>
                  updateQty(item.id, Number(e.target.value))
                }
                className="border w-16"
              />
            </div>
            <div>
              <p>₹{item.price * item.qty}</p>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <h3 className="font-bold mb-2">Total: ₹{total}</h3>
        <button className="w-full bg-green-600 text-white py-2 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
}
