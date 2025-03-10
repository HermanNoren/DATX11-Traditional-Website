"use client";

import React, { createContext, useState, useContext } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  dimensions: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContext {
  cartItems: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  Quantity: (productId: string, quantity: number) => void;
}

const CartConditions = createContext<CartContext| undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    if (!cartItems.find(item => item.id === product.id)) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: string) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  return (
    <CartConditions.Provider value={{ cartItems, addItem: addToCart, removeItem: removeFromCart, Quantity: updateQuantity }}>
      {children}
    </CartConditions.Provider>
  );
}

export function useCart() {
  const context = useContext(CartConditions);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}