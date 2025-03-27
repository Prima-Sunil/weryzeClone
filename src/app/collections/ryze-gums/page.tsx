'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product/product-card';
import { FilterIcon, XIcon } from 'lucide-react';

export default function RyzeGums() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Mock data for products
  const products = [
    {
      id: 1,
      name: 'RYZE Gums Frosty Mint Flavour - 2mg',
      price: 379,
      originalPrice: 425,
      image: '/images/mint-gum.jpg',
      slug: 'ryze-gum-frost-mint-2mg',
      discount: 11,
    },
    {
      id: 2,
      name: 'RYZE Gums Flavored Pan 2mg',
      price: 379,
      originalPrice: 425,
      image: '/images/pan-gum.jpg',
      slug: 'ryze-gums-pan-masala-flavor-2mg',
      discount: 11,
    },
    {
      id: 3,
      name: 'RYZE Gums Royal Paan Flavor - 2mg',
      price: 379,
      originalPrice: 425,
      image: '/images/royal-paan-gum.jpg',
      slug: 'ryze-gum-royal-paan-2mg',
      discount: 11,
    },
    {
      id: 4,
      name: 'RYZE Gums Fruit Blast Flavor - 2mg',
      price: 379,
      originalPrice: 425,
      image: '/images/fruit-blast-gum.jpg',
      slug: 'ryze-gum-fruit-blast-2mg',
      discount: 11,
    },
  ];

  // Spinning wheel popup state
  const [showSpinWheel, setShowSpinWheel] = useState(true);

  return (
    <div className="container-custom py-8">
      {/* Breadcrumb navigation */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-[#da0d21]">Home</Link>
        <span>/</span>
        <Link href="/collections" className="hover:text-[#da0d21]">Collections</Link>
        <span>/</span>
        <span className="font-medium">Ryze Gums</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">Ryze Gums</h1>

      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 w-full"
          onClick={() => setIsFilterOpen(true)}
        >
          <FilterIcon size={18} />
          <span>Filter</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filter Section - Desktop */}
        <div className="hidden md:block col-span-1 space-y-6">
          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-bold text-lg mb-4">Filter</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="in-stock-desktop"
                  className="w-4 h-4 rounded-sm mr-2 accent-[#da0d21]"
                />
                <label htmlFor="in-stock-desktop" className="text-sm">
                  In stock (9)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="out-of-stock-desktop"
                  className="w-4 h-4 rounded-sm mr-2 accent-[#da0d21]"
                />
                <label htmlFor="out-of-stock-desktop" className="text-sm">
                  Out of stock (0)
                </label>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-bold text-lg mb-4">Price</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">₹0</span>
                <span className="text-sm">₹1,399</span>
              </div>
              <input
                type="range"
                min="0"
                max="1399"
                className="w-full accent-[#da0d21]"
              />
            </div>
          </div>
        </div>

        {/* Filter Section - Mobile */}
        {isFilterOpen && (
          <div className="fixed inset-0 bg-white z-50 p-4 md:hidden overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-xl">Filter</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-1"
              >
                <XIcon size={24} />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h4 className="font-bold text-lg mb-3">Availability</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="in-stock-mobile"
                      className="w-4 h-4 rounded-sm mr-2 accent-[#da0d21]"
                    />
                    <label htmlFor="in-stock-mobile" className="text-sm">
                      In stock (9)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="out-of-stock-mobile"
                      className="w-4 h-4 rounded-sm mr-2 accent-[#da0d21]"
                    />
                    <label htmlFor="out-of-stock-mobile" className="text-sm">
                      Out of stock (0)
                    </label>
                  </div>
                </div>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-bold text-lg mb-3">Price</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">₹0</span>
                    <span className="text-sm">₹1,399</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1399"
                    className="w-full accent-[#da0d21]"
                  />
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  className="w-full bg-[#da0d21] text-white py-3 rounded font-bold"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="col-span-1 md:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-500">
              {products.length} products
            </div>
            <div>
              <select className="border rounded py-1 px-2 text-sm">
                <option value="featured">Featured</option>
                <option value="price-asc">Price, low to high</option>
                <option value="price-desc">Price, high to low</option>
                <option value="name-asc">Name, A-Z</option>
                <option value="name-desc">Name, Z-A</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Spinning Wheel Popup */}
      {showSpinWheel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowSpinWheel(false)}
            >
              <XIcon size={20} />
            </button>
            
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold mb-2">Spin the Wheel & Win!</h3>
              <p className="text-gray-600">Try your luck to get exclusive offers</p>
            </div>
            
            <div className="relative w-64 h-64 mx-auto mb-4">
              <div className="w-full h-full rounded-full bg-red-600 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full absolute">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[16px] border-l-transparent border-r-transparent border-t-yellow-400 z-10"></div>
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-red-500 to-yellow-500 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                        <div className="w-1/2 h-1/2 rounded-full bg-yellow-400 flex items-center justify-center">
                          <span className="text-red-700 font-bold">SPIN</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button
              className="w-full bg-[#da0d21] text-white py-3 rounded-md font-bold"
              onClick={() => setShowSpinWheel(false)}
            >
              Spin Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
