'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SearchIcon, ShoppingCartIcon, MenuIcon, X } from 'lucide-react';
import { LoginPopup } from '@/components/auth/login-popup';
import { useCart } from '@/contexts/cart-context';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();

  return (
    <header className="bg-white sticky top-[34px] z-40 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Ryze Logo"
                width={150}
                height={60}
                className="h-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/collections/ryze-gums" className="font-bold uppercase text-sm hover:text-[#da0d21]">
              SHOP RYZE
            </Link>
            <Link href="/pages/contact" className="font-bold uppercase text-sm hover:text-[#da0d21]">
              CONTACT US
            </Link>
          </nav> */}

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
          <Link href="/collections/ryze-gums" className="font-bold uppercase text-sm hover:text-[#da0d21]">
              SHOP RYZE
            </Link>
            <Link href="/pages/contact" className="font-bold uppercase text-sm hover:text-[#da0d21]">
              CONTACT US
            </Link>
            <button className="p-2 hover:text-[#da0d21]" aria-label="Search">
              <SearchIcon className="w-5 h-5" />
            </button>
            <LoginPopup />
            <div className="relative">
              <button
                className="p-2 hover:text-[#da0d21]"
                aria-label="Cart"
                onClick={toggleCart}
              >
                <ShoppingCartIcon className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#da0d21] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
            <button
              className="md:hidden p-2 hover:text-[#da0d21]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Yellow/Gold Bar */}
      {/* <div className="w-full h-2 bg-[#dfa43b]"></div> */}

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container-custom py-4">
            <div className="flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:text-[#da0d21]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 py-6">
              <Link
                href="/collections/ryze-gums"
                className="font-bold uppercase text-lg hover:text-[#da0d21]"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop Ryze
              </Link>
              <Link
                href="/pages/why-ryze"
                className="font-bold uppercase text-lg hover:text-[#da0d21]"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Ryze
              </Link>
              <Link
                href="/pages/dosage-schedule-information"
                className="font-bold uppercase text-lg hover:text-[#da0d21]"
                onClick={() => setIsMenuOpen(false)}
              >
                Dosage Information
              </Link>
              <Link
                href="/pages/contact"
                className="font-bold uppercase text-lg hover:text-[#da0d21]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/pages/who-we-are"
                className="font-bold uppercase text-lg hover:text-[#da0d21]"
                onClick={() => setIsMenuOpen(false)}
              >
                Who We Are
              </Link>
              <Link
                href="/pages/faqs"
                className="font-bold uppercase text-lg hover:text-[#da0d21]"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

