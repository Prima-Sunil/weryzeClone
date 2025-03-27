'use client';

import React from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/contexts/cart-context';

export const CartDrawer: React.FC = () => {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    subtotal,
    totalItems
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={closeCart}
      />
      
      {/* Cart drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-6 border-b">
              <h2 className="text-xl font-bold flex items-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                CART
              </h2>
              <button 
                onClick={closeCart}
                className="text-gray-400 hover:text-gray-500"
                aria-label="Close cart"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 px-4 py-6 sm:px-6 overflow-auto">
              {items.length === 0 ? (
                <div className="text-center py-10">
                  <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Start shopping to add items to your cart.
                  </p>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {items.map((item, index) => (
                    <li key={`${item.product.id}-${item.selectedPackSize.title}-${index}`} className="py-6">
                      <div className="flex items-center">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <Image
                            src={item.product.thumbnailImage}
                            alt={item.product.title}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-sm font-medium text-gray-900">
                              {item.product.title}
                            </h3>
                            <button
                              type="button"
                              className="text-sm font-medium text-red-600 hover:text-red-500"
                              onClick={() => removeFromCart(item.product.id, item.selectedPackSize.title)}
                            >
                              Remove
                            </button>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            Pack Size: {item.selectedPackSize.title} - {item.selectedPackSize.description}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-sm font-medium text-gray-900">
                              Rs. {item.selectedPackSize.salePrice}
                            </p>
                            <div className="flex items-center border rounded-md">
                              <button
                                className="p-1 px-2"
                                onClick={() => updateQuantity(
                                  item.product.id, 
                                  item.selectedPackSize.title, 
                                  item.quantity - 1
                                )}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-2">{item.quantity}</span>
                              <button
                                className="p-1 px-2"
                                onClick={() => updateQuantity(
                                  item.product.id, 
                                  item.selectedPackSize.title, 
                                  item.quantity + 1
                                )}
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
                  <p>Subtotal</p>
                  <p>Rs. {subtotal.toFixed(2)}</p>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Shipping, taxes, and discount codes calculated at checkout.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800"
                  >
                    Checkout
                  </a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{' '}
                    <button
                      type="button"
                      className="font-medium text-black hover:text-gray-800"
                      onClick={closeCart}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};