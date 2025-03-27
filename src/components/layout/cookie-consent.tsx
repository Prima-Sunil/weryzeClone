'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CookieIcon, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent') === 'accepted';

    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-0 z-50 w-full px-4">
      <div className="max-w-3xl mx-auto bg-white border rounded-md p-4 shadow-lg flex items-center gap-3">
        <CookieIcon className="w-5 h-5 text-gray-500" />
        <p className="text-sm flex-1">
          This website uses cookies to make sure you get the best experience with us.
          <Link href="/policies/privacy-policy" className="text-[#da0d21] ml-1 hover:underline">
            Learn more
          </Link>
        </p>
        <div className="flex gap-2">
          <Button
            className="bg-[#0ab06d] hover:bg-[#099258] text-white text-xs"
            onClick={acceptCookies}
          >
            Got it!
          </Button>
          <Button
            variant="outline"
            className="text-gray-500 text-xs border-gray-300"
            onClick={declineCookies}
          >
            Decline
          </Button>
        </div>
        <button
          onClick={declineCookies}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
