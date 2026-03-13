import { useState, useContext } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

export default function Checkout(){
  const [payment, setPayment] = useState("COD");
  const { user } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum: number, item: any) => sum + item.price * item.qty, 0);

  const placeOrder = async () => {
    if (!user) {
      alert("Please login to place an order");
      return;
    }
    await addDoc(collection(db, "orders"), {
      userId: user.uid,
      items: cart,
      total: total,
      status: "Preparing",
      createdAt: new Date()
    });
    alert("Order placed successfully");
  };

  return(
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl mb-6 font-bold">Checkout</h1>
      <input
        placeholder="Delivery Address"
        className="border p-2 w-full mb-4 rounded"
      />
      <select 
        value={payment}
        onChange={(e) => setPayment(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      >
        <option>Cash on Delivery</option>
        <option>UPI</option>
        <option>Card</option>
        <option>Wallet</option>
      </select>
      <button 
        onClick={placeOrder}
        className="bg-green-600 text-white px-4 py-2 rounded font-semibold w-full"
      >
        Place Order
      </button>
    </div>
  )
}
