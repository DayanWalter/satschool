"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const updatedCart = [...cart];

    const existingProduct = updatedCart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantityInCart += 1;
    } else {
      updatedCart.push({ ...product, quantityInCart: 1 });
    }

    setCart(updatedCart);
  };
  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    if (updatedCart.length !== cart.length) {
      setCart(updatedCart);
    }
  };
  const incrementQuantity = (productId: number) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantityInCart: item.quantityInCart + 1 }
        : item,
    );
    setCart(updatedCart);
  };
  const decrementQuantity = (productId: number) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantityInCart:
              item.quantityInCart > 0 ? item.quantityInCart - 1 : 0,
          }
        : item,
    );
    const filteredCart = updatedCart.filter((item) => item.quantityInCart > 0);
    setCart(filteredCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be within a cartprovider");
  }
  return context;
};
