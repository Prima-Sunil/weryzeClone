/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product/product-card';

export default function WhyRyzePage() {
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
      name: 'RYZE गम्स कौन्चो पैक - 6 फ्लेवर',
      price: 449,
      originalPrice: 510,
      image: '/images/pan-gum.jpg',
      slug: 'ryze-gums-pan-masala-flavor-2mg',
      discount: 12,
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
  return (
    <div className="bg-white">
      {/* Logo and Try Now Section */}
      {/* <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <img
              src="https://weryze.com/cdn/shop/files/ryze_black_logo_f8b4aa79-7cb9-41bc-a8c8-4f8d3b91b89f.png?v=1723627555"
              alt="Ryze Logo"
              className="h-12"
            />
          </div>
          <div>
            <Link href="/collections/ryze-gums">
              <Button className="bg-[#ff0025] hover:bg-[#da0021] text-white rounded-full px-6">
                TRY NOW ▶
              </Button>
            </Link>
          </div>
        </div>
      </div> */}
      
      {/* <h1 className="text-4xl font-bold text-center mb-8 pt-8">Why Ryze</h1> */}
      
      {/* Banner Section - Full Width */}
      <section className="mb-16">
        <img
          src="https://weryze.com/cdn/shop/files/Banner.jpg?v=1740474733"
          alt="Why Ryze Banner"
          className="w-full h-auto"
        />
      </section>

     {/* Delightful Flavours Section */}
     <section className="mb-16">
        <div className="container mx-auto px-4">
          <img
            src="https://weryze.com/cdn/shop/files/Check_out_our_Delightful_Flavours_11d14d89-2e69-4c61-a465-f1e0bec1c3f4.png?v=1723629371"
            alt="Delightful Flavours"
            className="max-w-[60%] h-auto mb-12 mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section - Full Width */}
      <section className="mb-16">
        <img
          src="https://weryze.com/cdn/shop/files/How_to_use.jpg?v=1740477262"
          alt="How to Use Ryze"
          className="w-full h-auto"
        />
      </section>
      
      <div className="container mx-auto px-4 py-4">
        {/* Help You Manage Section */}
        <section className="mb-16">
          <div className="w-full">
            <img
              src="https://weryze.com/cdn/shop/files/help_you_to_manage.jpg?v=1740477336"
              alt="Help You Manage"
              className="max-w-[60%] h-auto rounded-lg mx-auto"
            />
          </div>
        </section>

        
      </div>

      {/* Tried Ryze Section */}
      <div className="bg-[#da0d21] py-8 text-white text-center">
        <h2 className="text-5xl font-bold mb-2">Tried Ryze? Tell us about it ▶</h2>
      </div>
      
      <div className="h-20"></div>
    </div>
  );
}