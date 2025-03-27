'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { User2Icon, PencilIcon } from 'lucide-react';

export function LoginPopup() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [showVerification, setShowVerification] = useState(false);

  const handleSubmit = () => {
    if (mobileNumber.trim().length > 0) {
      setShowVerification(true);
    }
  };

  const handleEdit = () => {
    setShowVerification(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-2 hover:text-[#da0d21]" aria-label="Account">
          <User2Icon className="w-5 h-5" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] w-full p-0 overflow-hidden rounded-md">
        <div className="flex w-full flex-col md:flex-row">
          {/* Left side - Teal background with logo and features */}
          <div className="md:w-1/2 bg-[#2A9D8F] text-white p-6 hidden md:flex flex-col justify-center items-center">
            <div className="flex justify-center mb-6">
              <Image 
                src="/logo.png" 
                alt="Ryze Logo" 
                width={120} 
                height={40}
                className="h-auto"
              />
              <div className="text-xs ml-1 mt-3 text-white">
                Powered by
                <span className="font-bold block">KwikPass</span>
              </div>
            </div>
            
            <h3 className="text-center text-lg font-medium mb-4">
              Start your freedom journey with our gums.
              <br />Try Toh Kar!
            </h3>
            
            <div className="grid grid-cols-1 gap-3 mt-6">
              <div className="bg-[#259387] p-3 rounded-md">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-300 text-xl mr-2">✨</span>
                  <h4 className="font-medium">World's No. 1</h4>
                </div>
                <p className="text-sm">Certified trademark by the world's top medicated gum suppliers</p>
              </div>
              
              <div className="bg-[#259387] p-3 rounded-md">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-300 text-xl mr-2">✨</span>
                  <h4 className="font-medium">Delightful Indian flavours</h4>
                </div>
                <p className="text-sm">RYZE gum, that's also yum</p>
              </div>
              
              <div className="bg-[#259387] p-3 rounded-md">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-300 text-xl mr-2">✨</span>
                  <h4 className="font-medium">Soft chew & easy on throat</h4>
                </div>
                <p className="text-sm">No jaw strain, delivered smoothly</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Login form or Verification form */}
          <div className="md:w-1/2 p-5 flex flex-col justify-center">
            {!showVerification ? (
              // Initial Login Form
              <>
                <DialogTitle className="text-center text-xl font-bold mb-4">
                  Unlock<br />Maximum Savings
                </DialogTitle>
                
                <div className="mb-3">
                  <p className="text-sm text-center mb-2">Enter Mobile Number</p>
                  <Input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="h-10 text-center border-gray-300"
                  />
                </div>
                
                <Button
                  className="w-full h-10 bg-[#da0d21] hover:bg-[#b00a1b] text-white"
                  onClick={handleSubmit}
                >
                  Continue
                </Button>
                
                <div className="flex items-center my-4">
                  <div className="flex-grow h-px bg-gray-300"></div>
                  <span className="px-4 text-sm text-gray-500">OR</span>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </div>
                
                <Button
                  className="w-full h-10 bg-[#25D366] hover:bg-[#20BD5C] text-white flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Whatsapp Login
                </Button>
              </>
            ) : (
              // Verification Form
              <>
                <DialogTitle className="text-center text-xl font-bold mb-4">
                  Unlock<br />Maximum Savings
                </DialogTitle>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm">Enter Mobile Number</p>
                    <button 
                      onClick={handleEdit}
                      className="text-blue-600 flex items-center text-xs"
                    >
                      <PencilIcon className="w-3 h-3 mr-1" />
                      Edit
                    </button>
                  </div>
                  <div className="border border-gray-300 rounded-md p-3 bg-gray-50">
                    {mobileNumber}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm mb-2">Enter OTP</p>
                  <div className="flex gap-2 justify-between">
                    {[1, 2, 3, 4].map((i) => (
                      <Input
                        key={i}
                        type="text"
                        maxLength={1}
                        className="h-10 w-10 text-center text-lg font-bold"
                      />
                    ))}
                  </div>
                  <div className="text-center mt-3">
                    <button className="text-blue-600 text-sm">Resend OTP</button>
                  </div>
                </div>
                
                <Button
                  className="w-full h-10 bg-[#da0d21] hover:bg-[#b00a1b] text-white"
                >
                  Verify & Continue
                </Button>
              </>
            )}
            
            <div className="mt-4 text-center text-xs text-gray-500">
              By logging in, you're agreeing to our
              <div className="flex justify-center gap-1">
                <Link href="/policies/terms-of-service" className="text-blue-600 hover:underline">Privacy Policy</Link>
                <span>&</span>
                <Link href="/policies/terms-of-service" className="text-blue-600 hover:underline">Terms of Service</Link>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <Link href="#" className="text-xs text-gray-500 hover:underline">
                Trouble logging in?
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}