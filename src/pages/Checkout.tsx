import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  const placeOrder = async () => {
    if (!address) {
      alert("Enter delivery address");
      return;
    }

    if (!auth.currentUser) {
      alert("Please login to place an order");
      navigate("/login");
      return;
    }

    try {
      await addDoc(collection(db, "orders"), {
        userId: auth.currentUser.uid,
        items: cart,
        total: total,
        address: address,
        status: "Order Placed",
        createdAt: new Date()
      });

      alert("Order placed successfully");
      setCart([]);
      navigate("/orders");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Checkout</h1>

      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Delivery Address</h2>
        <textarea
          placeholder="Enter your full address (House No, Street, City)"
          className="border border-gray-200 w-full p-4 mb-6 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all h-32"
          onChange={(e) => setAddress(e.target.value)}
        />

        <div className="border-t border-gray-100 pt-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600">Total Amount:</span>
            <span className="text-2xl font-extrabold text-green-700">₹{total}</span>
          </div>

          <button
            onClick={placeOrder}
            disabled={cart.length === 0}
            className="w-full bg-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-md active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {cart.length === 0 ? "Cart is Empty" : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
}
