import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-[#FFF0F1]  p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

        <p className="mb-4 text-xl">We are always looking forward to hearing back from you. To contact a customer service representative:</p>

        <ul className="list-disc pl-5 mb-4">
          <li >Call us - 01141169451 or email us - hello@weryze.com</li>
          <li>Our customer service agent will get back to you in 24-48 business hours.</li>
          <li>We're available 10:00 AM - 6:00 PM, Monday to Friday.</li>
        </ul>

        <p className="mb-4 text-xl">For any Order related queries email us at hello@weryze.com</p>

        <div className="mt-8">
          <h2 className="font-bold text-4xl mb-4">Marketed & Distributed By:</h2>
          <p className='text-1/2xl'>
            VLPCPL ECOMMERCE PVT LTD. 5th Floor, Gulf Adiba, Plot Number 272, Udyog Vihar, Phase – II,<br />
            Gurugram, Haryana – 122008
          </p>
        </div>
      </div>
      <div className="bg-white h-20 mt-10"></div>
    </div>
  );
}