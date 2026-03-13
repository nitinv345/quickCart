import { createContext, useState, ReactNode } from "react";

export const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find(item => item.id === product.id);
      if (itemExists) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  const removeItem = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQty = (id: string, qty: number) => {
    if(qty <= 0){
      setCart(cart.filter(item => item.id !== id));
      return;
    }
    setCart(
      cart.map(item =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeItem,
      updateQty
    }}>
      {children}
    </CartContext.Provider>
  );
};
