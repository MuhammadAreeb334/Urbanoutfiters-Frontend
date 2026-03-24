import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, selectedColor, selectedSize, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.color === selectedColor &&
          item.size === selectedSize,
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id &&
          item.color === selectedColor &&
          item.size === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      const colorObj = product.colors.find((c) => c.name === selectedColor);
      const image = colorObj?.main;

      return [
        ...prev,
        {
          id: product.id,
          name: product.title,
          price: product.salePrice,
          image,
          color: selectedColor,
          size: selectedSize,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (itemId, color, size) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(item.id === itemId && item.color === color && item.size === size),
      ),
    );
  };

  const updateQuantity = (itemId, color, size, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId && item.color === color && item.size === size
          ? { ...item, quantity }
          : item,
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
