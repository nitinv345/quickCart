import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartSidebar from "./CartSidebar";

export default function Navbar(){

  const { cart } = useContext(CartContext);
  const [open,setOpen] = useState(false);

  const count = cart.reduce((a: number, b: any) => a + b.qty, 0);

  return (
    <>
    <nav className="flex justify-between p-4 shadow bg-white">
      <h1 className="text-yellow-500 text-xl font-bold">
        QuickCart
      </h1>
      <button onClick={()=>setOpen(true)}>
        Cart ({count})
      </button>
    </nav>
    <CartSidebar open={open} setOpen={setOpen}/>
    </>
  )
}
