'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AgeVerification() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already verified age
    const hasVerified = localStorage.getItem('ageVerified') === 'true';

    if (!hasVerified) {
      setIsOpen(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('ageVerified', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md p-0 overflow-hidden rounded-md">
        <div className="bg-[#da0d21] text-white p-6 text-center">
          <DialogHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative h-8 w-32">
                <Image
                  src="/logo-white.png"
                  alt="Ryze Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <DialogTitle className="text-2xl font-bold">
              Are you above 18+?
            </DialogTitle>
            <DialogDescription className="text-white">
              Please tick before proceeding
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-center mt-8">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="age-check"
                className="w-5 h-5 rounded-sm"
                onChange={(e) => {
                  if (e.target.checked) {
                    handleVerify();
                  }
                }}
              />
              <label htmlFor="age-check" className="ml-2 text-white">
                I confirm I am over 18 years old
              </label>
            </div>
          </div>

          <Button
            className="mt-6 bg-white text-[#da0d21] hover:bg-gray-100"
            onClick={handleVerify}
          >
            Proceed
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
