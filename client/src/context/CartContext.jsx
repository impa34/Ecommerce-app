import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const exists = prevCart.find(item => item._id === product._id)
      if (exists) {
        return prevCart.map(item => 
          item._id === product._id ? 
          {...item, quantity: item.quantity + 1}
          : item
        )
        
      }else {
        return [...prevCart, {...product, quantity: 1}]
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((p) => p._id !== id));
  };

  const updateQuantity = (id, newQt) => {
    setCart(prevCart => 
      prevCart.map(item => item._id === id ? {...item, quantity: newQt} : item) 
    )
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext)
};
