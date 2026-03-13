import { useEffect,useState } from "react";
import { db } from "../firebase";
import { collection,getDocs, query, where } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Orders(){
  const [orders,setOrders] = useState<any[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(()=>{
    async function loadOrders(){
      if(!user) return;
      const q = query(collection(db,"orders"), where("userId", "==", user.uid));
      const data = await getDocs(q);
      setOrders(data.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
      })));
    }
    loadOrders();
  },[user]);

  return(
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl mb-6 font-bold">My Orders</h1>
      {orders.map(order=>(
        <div key={order.id} className="border p-4 mb-4 rounded shadow bg-white">
          <p className="font-semibold">Status: {order.status}</p>
          <p>Total: ₹{order.total}</p>
          <div className="mt-2 text-sm text-gray-500">
            {order.items.map((item: any, idx: number) => (
              <span key={idx}>{item.name} (x{item.qty}), </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
