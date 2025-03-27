'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, PackSize } from '@/lib/data';

export interface CartItem {
  product: Product;
  selectedPackSize: PackSize;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (product: Product, selectedPackSize: PackSize, quantity: number) => void;
  removeFromCart: (productId: string, packSizeTitle: string) => void;
  updateQuantity: (productId: string, packSizeTitle: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setItems(parsedCart);
      } catch (error) {
        console.error('Failed to parse cart from localStorage', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
    
    // Calculate total items and subtotal
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    const cartSubtotal = items.reduce(
      (total, item) => total + item.selectedPackSize.salePrice * item.quantity,
      0
    );
    
    setTotalItems(itemCount);
    setSubtotal(cartSubtotal);
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen(prev => !prev);

  const addToCart = (product: Product, selectedPackSize: PackSize, quantity: number) => {
    setItems(prevItems => {
      // Check if this product with the same pack size already exists in the cart
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id && item.selectedPackSize.title === selectedPackSize.title
      );

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // Add new item to cart
        return [...prevItems, { product, selectedPackSize, quantity }];
      }
    });
    
    // Open the cart when adding an item
    openCart();
  };

  const removeFromCart = (productId: string, packSizeTitle: string) => {
    setItems(prevItems => 
      prevItems.filter(
        item => !(item.product.id === productId && item.selectedPackSize.title === packSizeTitle)
      )
    );
  };

  const updateQuantity = (productId: string, packSizeTitle: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, packSizeTitle);
      return;
    }

    setItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId && item.selectedPackSize.title === packSizeTitle
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};