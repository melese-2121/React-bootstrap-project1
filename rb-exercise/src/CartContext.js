import { createContext, useState } from "react";
import { products, getProductData } from "./products";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteItemFromCart: () => {},
  getTotalCost: () => {},
});

// Create Provider
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const getProductQuantity = (id) => {
    const product = items.find((item) => item.id === id);
    if (product === undefined) {
      return 0;
    } else {
      return product.quantity;
    }
  };

  const addOneToCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setItems([...items, { id: id, quantity: 1 }]);
    } else {
      const newItems = items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setItems(newItems);
    }
  };

  const deleteItemFromCart = (id) => {
    const newItems = items.filter((item) => item.id != id);
    setItems(newItems);
  };

  const removeOneFromCart = (id) => {
    if (getProductQuantity(id) === 1) {
      deleteItemFromCart(id);
    } else {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  // Calculate Total Cost Of Cart (All items in the cart)
  const getTotalCost = () => {
    let total = 0;

    const totalCost = items.map((item) => {
      total += item.quantity * getProductData(item.id).price;
    });
    return total;
  };

  const contextValue = {
    items: items,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteItemFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
