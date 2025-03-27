'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-[#7B1E1E] text-white py-12" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15.81px' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/pages/why-ryze" className="hover:text-[#FFD700] text-sm">
                  Why RYZE
                </Link>
              </li>
              <li>
                <Link href="/pages/who-we-are" className="hover:text-[#FFD700] text-sm">
                  Who we are
                </Link>
              </li>
              <li>
                <Link href="/pages/faqs" className="hover:text-[#FFD700] text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/pages/dosage-schedule-information" className="hover:text-[#FFD700] text-sm">
                  Dosage Schedule & Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-bold text-lg mb-4">CUSTOMER CARE</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/policies/shipping-policy" className="hover:text-[#FFD700] text-sm">
                  Shipping & Tracking Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/refund-policy" className="hover:text-[#FFD700] text-sm">
                  Return & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/privacy-policy" className="hover:text-[#FFD700] text-sm">
                  Privacy Notice
                </Link>
              </li>
              <li>
                <Link href="/pages/terms-conditions" className="hover:text-[#FFD700] text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/policies/terms-of-service" className="hover:text-[#FFD700] text-sm">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Menu */}
          <div>
            <h3 className="font-bold text-lg mb-4">FOOTER MENU</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/search" className="hover:text-[#FFD700] text-sm">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/policies/terms-of-service" className="hover:text-[#FFD700] text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/policies/refund-policy" className="hover:text-[#FFD700] text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Main Menu */}
          <div>
            <h3 className="font-bold text-lg mb-4">MAIN MENU</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/shop" className="hover:text-[#FFD700] text-sm">
                  SHOP RYZE
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFD700] text-sm">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">SIGN UP AND SAVE</h3>
            <p className="mb-4 text-sm">Join Our Newsletter</p>
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black w-full pr-12"
              />
              <Button
                className="absolute right-0 top-0 h-full bg-transparent hover:bg-transparent text-black px-3"
                aria-label="Subscribe"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        {/* Horizontal divider */}
        <div className="border-t border-white mb-12"></div>

        {/* Disclaimer */}
        <div className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px' }}>
  <div className="flex flex-col md:flex-row gap-8">
    {/* Centered Logo */}
    <div className="md:w-1/6 mt-15 flex justify-center items-center">
      <Image
        src="/logo.png"
        alt="Ryze Logo"
        width={200}
        height={100}
      />
    </div>

    <div className="md:w-5/6">
      <div className="bg-[#C00000] p-4 mb-4 rounded">
        <p>
          These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.
        </p>
      </div>
      
      <div className="mb-4">
        <p>
          Information on this site is provided for informational purposes only. It is not meant to substitute for medical advice from your physician or other medical professional. You should not use the information contained herein for diagnosing or treating a health problem or disease, or prescribing any medication. Carefully read all product documentation. If you have or suspect that you have a medical problem, promptly contact your regular health care provider.
        </p>
      </div>
      <br />

      <p className="mb-4">
        Your privacy is our priority. Learn more: 
        <Link href="/policies/privacy-policy" className="underline hover:text-yellow-300">Your Privacy Choices</Link>
      </p>
      <br />

      <div className="text-sm">
        © 2025 Weryze • 
        <Link href="https://www.shopify.com" className="hover:text-yellow-300">Powered by Shopify</Link> • 
        <Link href="https://techwishes.com/" className="hover:text-yellow-300">Built by TechWishes</Link>
      </div>
    </div>
  </div>
</div>

      </div>
    </footer>
  );
}