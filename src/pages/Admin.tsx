import React, { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { handleFirestoreError, OperationType } from "../utils/firebaseUtils";

export default function Admin(){
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [img,setImg] = useState("");

  const addProduct = async (e: React.FormEvent)=>{
    e.preventDefault();
    try {
      await addDoc(collection(db,"products"),{
        name:name,
        price:Number(price),
        img:img
      });
      alert("Product Added");
      setName("");
      setPrice("");
      setImg("");
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, "products", auth);
    }
  };

  return(
    <div className="p-10 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Admin Panel
      </h1>
      <form onSubmit={addProduct} className="flex flex-col gap-4">
        <input
          placeholder="Product Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="border p-2"
        />
        <input
          placeholder="Price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          className="border p-2"
        />
        <input
          placeholder="Image URL"
          value={img}
          onChange={(e)=>setImg(e.target.value)}
          className="border p-2"
        />
        <button className="bg-blue-600 text-white py-2">
          Add Product
        </button>
      </form>
    </div>
  )
}
