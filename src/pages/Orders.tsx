import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";

export default function Orders() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      if (!auth.currentUser) {
        setLoading(false);
        return;
      }

      try {
        const q = query(
          collection(db, "orders"),
          where("userId", "==", auth.currentUser.uid)
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Sorting locally since composite index might not be ready
        const sortedData = data.sort((a: any, b: any) => 
          (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)
        );

        setOrders(sortedData);
      } catch (error) {
        console.error("Error loading orders:", error);
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Loading your orders...</div>;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Order History</h1>

      {orders.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <p className="text-gray-500">You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider font-semibold">Order ID: {order.id.slice(-8).toUpperCase()}</p>
                  <p className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md inline-block">
                    {order.status}
                  </p>
                </div>
                <p className="text-xl font-extrabold text-gray-900">₹{order.total}</p>
              </div>

              <div className="space-y-2 mb-4">
                {order.items?.map((item: any, idx: number) => (
                  <div key={idx} className="flex justify-between text-sm text-gray-600">
                    <span>{item.name} x{item.qty}</span>
                    <span>₹{item.price * item.qty}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-50 pt-4 flex justify-between items-center bg-gray-50 -mx-6 -mb-6 px-6 py-4 rounded-b-2xl">
                <p className="text-xs text-gray-500 italic truncate max-w-[200px]">
                  Delivering to: {order.address}
                </p>
                <p className="text-xs text-gray-400 font-medium whitespace-nowrap">
                  {order.createdAt?.seconds 
                    ? new Date(order.createdAt.seconds * 1000).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
                    : 'Order Processed'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
