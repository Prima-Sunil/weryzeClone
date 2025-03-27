import React from 'react';

export default function WhoWeArePage() {
  return (
    <div className="bg-white">
         <h1 className="text-4xl font-bold text-center mb-8">Who we are</h1>
      <div className="container mx-auto px-4 py-8">
        {/* <h1 className="text-4xl font-bold text-center mb-8">Who we are</h1> */}
        
        <div className="bg-[#FFF0F1] p-8 rounded-lg">
          <p className="text-center text-lg mb-6">
            Fertin Pharma A/S is the world's largest Contract Development and Manufacturing Organization for NRT gum, building on more than 25+ 
            years of experience developing and manufacturing NRT products.
          </p>
          
          <div className="text-center mb-6">
            <p className="font-medium">READ MORE AT: <span className="font-bold uppercase">FERTIN PHARMA A/S</span></p>
          </div>
          
          <p className="text-center text-lg mb-6">
            The mission of Fertin Pharma A/S: "We help leading global brands create pharmaceutical and nutraceutical products to support 
            healthier living. We develop and manufacture innovative oral delivery systems that enhance the efficacy of your active and functional 
            ingredients – without compromising on taste-masking, texture and the consumer experience."
          </p>
          
          <p className="text-center text-lg mb-6">
            Fertin India Pvt. Ltd. was established by Fertin Pharma A/S to support the global approach with a GMP manufacturing facility located in 
            Goa and a Research & Development Centre in Mumbai.
          </p>
          
          <p className="text-center text-lg mb-6">
            Vectura Fertin Pharma Pvt. Ltd. is the marketing and distribution arm of Fertin India Pvt. Ltd. rethinking how users can be helped towards 
            a healthier future.
          </p>
          
          <p className="text-center text-lg">
            Vectura Fertin Pharma Pvt. Ltd. and its manufacturing partner Fertin India Pvt. Ltd. are subsidiaries of Fertin Pharma A/S, Denmark.
          </p>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
}