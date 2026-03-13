import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart(){
  const { cart, removeItem, updateQty } = useContext(CartContext);
  const total = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.qty,
    0
  );

  return(
    <div className="p-8">
      <h1 className="text-2xl mb-6">Your Cart</h1>
      {cart.map((item: any) => (
        <div key={item.id} className="flex gap-4 mb-4">
          <h3>{item.name}</h3>
          <input
            type="number"
            value={item.qty}
            onChange={(e)=>updateQty(item.id, Number(e.target.value))}
            className="border w-16"
          />
          <p>₹{item.price * item.qty}</p>
          <button onClick={()=>removeItem(item.id)}>
            Remove
          </button>
        </div>
      ))}
      <h2 className="text-xl mt-4">
        Total: ₹{total}
      </h2>
    </div>
  )
}
