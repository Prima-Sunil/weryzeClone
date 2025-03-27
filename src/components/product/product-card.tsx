'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCartIcon } from 'lucide-react';

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    image: string;
    slug: string;
    discount: number;
  };
}

export default function ProductCard({ product }: ProductProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/collections/ryze-gums/products/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-[#f8f8f8]">
          {product.discount > 0 && (
            <div className="absolute top-2 right-2 z-10 bg-[#da0d21] text-white text-xs font-bold px-2 py-1 rounded-sm">
              {product.discount}% OFF
            </div>
          )}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-3 md:p-4">
          <h3 className="font-medium text-sm md:text-base line-clamp-2 mb-2 min-h-[40px]">{product.name}</h3>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#da0d21]">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
      
      {/* Quick add to cart button */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-[#da0d21] text-white py-2 text-center text-sm font-bold transition-all duration-300 ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <button className="w-full h-full flex items-center justify-center gap-2">
          <ShoppingCartIcon size={16} />
          <span>ADD TO CART</span>
        </button>
      </div>
    </div>
  );
}
