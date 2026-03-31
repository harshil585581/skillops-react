import { createContext, useState } from "react";

// create context
export const CartContext = createContext();

// provider component
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // add item
  const addItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  // remove item (by index)
  const removeItem = (indexToRemove) => {
    setItems((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};