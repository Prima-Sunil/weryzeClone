'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ShippingPolicy() {
  return (
    <div className="bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
     
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#1c1d1d' }}>Shipping policy</h1>
        <h2 className="text-xl md:text-2xl font-bold text-center mb-8" style={{ color: '#1c1d1d' }}>SHIPPING & TRACKING POLICY</h2>
        <p className=" text-gray-800 text-xl mb-6">Updated 01 January 2024</p>

        <div className="space-y-6">
          <p className="text-[#1c1d1d] text-xl leading-relaxed">
            This Shipping & Refunds and Cancellation Policy (Policy) applies to the services provided by VLPCPL ECOMMERCE PVT LTD (VLPCPL or we or our or us or Company) on its website www.weryze.com (Website). We may change this Policy, anytime by posting the changes on the Website and you agree that it shall be your responsibility to view the changes to this Policy, by reviewing the revised Policy. We will not be responsible for your failure to remain informed about such changes.
          </p>

          <h3 className="text-xl text-center font-bold mb-2" style={{ color: 'black' }}>SHIPPING & TRACKING POLICY</h3>
          <p className="text-[#1c1d1d] text-xl leading-relaxed">
            Once we have accepted your order on www.weryze.com, you will receive an order confirmation email and SMS.
          </p>

          <p className="text-[#1c1d1d] text-xl leading-relaxed">
            Orders will be shipped within 24 hours from the date of acceptance of your order from our registered warehouse except for Sundays, public holidays and circumstances outside our control (such as weather conditions). Once your order is dispatched, you will receive an order dispatched email and SMS along with a tracking link. Click on the link to get live updates.
          </p>

          <p className="text-[#1c1d1d] text-xl leading-relaxed">
            VLPCPL has tied up with well-known delivery partners for swift and appropriate deliveries of the products. The list of delivery partners is provided below and will be updated from time to time. The orders will be delivered in fully sealed packages for the proper protection of the goods.
          </p>

          <p className="text-[#1c1d1d] text-xl leading-relaxed">
            Orders will be delivered within 2-6 business days from the date of confirmation. Delivery time may vary depending upon the shipping address. If your order is delayed, we will update you with a new estimated arrival time. If the estimated delivery date for your product has passed and the tracking link does not present updated information, allow an additional day or two for the products to be delivered.
          </p>

          <p className="text-[#1c1d1d] text-xl leading-relaxed">
            For any divergence or discrepancy in order delivery, please contact us on <a href="mailto:hello@weryze.com" className="text-[#ff0025] hover:underline">hello@weryze.com</a> within 24 hours from the date of receipt of delivery. Please refer to our Policy on Cancellation if you wish to cancel your order. If you have any complaints regarding shipping or tracking, please refer to the Ryze Gum Terms and Conditions.
          </p>

          <h3 className="text-xl font-bold mb-2" style={{ color: '#1c1d1d' }}>List of Delivery Partners:</h3>
          <ul className="list-disc pl-6 text-xl text-[#1c1d1d] space-y-1 leading-relaxed">
            <li>BlueDart</li>
            <li>Delhivery</li>
          </ul>

          <h3 className="text-xl font-bold mb-2 mt-6" style={{ color: '#1c1d1d' }}>Terms & Conditions</h3>
          <ul className="list-disc pl-6 text-xl text-[#1c1d1d] space-y-1 leading-relaxed">
            <li>Cash on Delivery is not available on orders above Rs. 2000</li>
            <li>Shipping Charges on orders below 100 is 99/-</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
