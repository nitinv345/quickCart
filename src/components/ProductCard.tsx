import { motion } from "framer-motion";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard(props: any) {
  const { product } = props;
  const { cart, addToCart, updateQty } = useContext(CartContext);
  const item = cart.find((i: any) => i.id === product.id);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-4 rounded shadow"
    >
      <img src={product.img} className="h-32 w-full object-cover" alt={product.name}/>
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-green-600">₹{product.price}</p>
      
      {!item ? (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => addToCart(product)}
          className="bg-yellow-500 text-white w-full py-1 mt-2 rounded"
        >
          Add
        </motion.button>
      ) : (
        <div className="flex justify-between items-center mt-2 border rounded px-2">
          <button
            onClick={() => updateQty(product.id, item.qty - 1)}
            className="text-lg font-bold"
          >
            −
          </button>
          <span>{item.qty}</span>
          <button
            onClick={() => updateQty(product.id, item.qty + 1)}
            className="text-lg font-bold"
          >
            +
          </button>
        </div>
      )}
    </motion.div>
  );
}
