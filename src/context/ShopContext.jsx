import { React, createContext, useState } from "react";
import all_product from "./../Components/Assets/all_product";
export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    } else {
      return cartItems;
    }
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = all_product.find((item) => item.id === Number(itemId));
        if (product) {
          totalAmount += cartItems[itemId] * product.new_price;
        }
      }
    }
    return totalAmount;
  };
  const totalCartItem = () => {
    let totalItems = 0;
    for (let items in cartItems) {
      totalItems += cartItems[items];
    }
    return totalItems;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    totalCartItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
