"use client";

import { Product } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/contexts/cart-context";
import { cn } from "@/lib/utils";
import { FAQSection } from "@/components/faq/faq-section";
import { faqData } from "@/lib/faq-data";
import { CustomerReviews } from '@/components/reviews/customer-reviews';
import { getAllReviews, getReviewStats } from '@/lib/review-data';

interface ProductClientProps {
  product: Product;
}

export default function ProductClient({ product }: ProductClientProps) {
  const reviews = getAllReviews();
    const { totalReviews, averageRating } = getReviewStats();
  const [selectedPackSizeIndex, setSelectedPackSizeIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, product.packSizes[selectedPackSizeIndex], 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-sm mb-6">
        <Link href="/" className="text-gray-500 hover:text-black">
          Home
        </Link>
        <span className="text-gray-500">/</span>
        <Link href="/collections" className="text-gray-500 hover:text-black">
          Collections
        </Link>
        <span className="text-gray-500">/</span>
        <Link
          href="/collections/ryze-gums"
          className="text-gray-500 hover:text-black"
        >
          Shop Ryze Gums
        </Link>
        <span className="text-gray-500">/</span>
        <span className="font-medium">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-md">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-5 gap-2">
            {product.images.slice(0, 5).map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-md border cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`${product.title} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

          {/* Ratings */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <span className="ml-2 text-sm text-gray-500">4.8/5</span>
          </div>

          {/* Pricing */}
          <div className="flex items-center mb-6">
            <span className="text-xl font-semibold">
              Rs. {product.salePrice}
            </span>
            {product.discount > 0 && (
              <span className="ml-2 text-gray-500 line-through">
                Rs. {product.regularPrice}
              </span>
            )}
            {product.discount > 0 && (
              <span className="ml-2 text-sm text-red-500">
                {product.discount}% OFF
              </span>
            )}
            <span className="ml-2 text-xs text-gray-500">
              /(Inclusive of all Taxes)
            </span>
          </div>

          {/* Flavor Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Choose Flavour</h3>
            <div className="grid grid-cols-5 gap-2">
              <div className="relative aspect-square overflow-hidden rounded-md border-2 border-black">
                <Image
                  src={product.thumbnailImage}
                  alt={product.flavour}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Other flavor options would go here */}
            </div>
          </div>

          {/* Pack Size Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Pack Size</h3>
            <div className="grid grid-cols-1 gap-2">
              {product.packSizes.map((size, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-3 border rounded-md cursor-pointer ${
                    index === selectedPackSizeIndex ? "border-black" : ""
                  }`}
                  onClick={() => setSelectedPackSizeIndex(index)}
                >
                  <div>
                    <h4 className="font-medium">{size.title}</h4>
                    <p className="text-sm text-gray-500">{size.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Rs. {size.salePrice}</p>
                    <p className="text-sm text-gray-500 line-through">
                      Rs. {size.regularPrice}
                    </p>
                    <p className="text-sm text-red-500">{size.discount}% off</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Product Information Tabs */}
      <div className="mt-12">
        <h2 className="text-2xl text-center font-bold mb-4">Product Information</h2>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {[
                "Product Details",
                "Dosage",
                "Precautions",
                "Side Effects",
                "Consult a doctor",
                "Overdose Management",
                "Additional information",
              ].map((tab, index) => (
                <button
                  key={tab}
                  className={cn(
                    "py-3 px-4 text-xl font-bold  font-medium whitespace-nowrap" ,
                    selectedTab === index
                      ? "border-b-2 border-red-500 text-red-500"
                      : "text-gray-600 hover:text-gray-800"
                  )}
                  onClick={() => setSelectedTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="py-6 bg-gray-50 px-6">
            {selectedTab === 0 && (
              <div>
                {/* <p className="mb-4">{product.description}</p> */}

                <div className="space-y-4">
                  <div>
                    <p
                      className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                      style={{ fontSize: "18px" }}
                    >
                      <b> A Wise Choice:</b> Ryze Gum reduces dependency. It
                      helps to end cravings in a smooth, safe and flavorful way.
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                      style={{ fontSize: "18px" }}
                    >
                      <b>100 Years of Innovation and Trust: </b>Created by
                      Fertin Pharma A/S, a global leader in NRT products.
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                      style={{ fontSize: "18px" }}
                    >
                      <b>Throat-Friendly: </b>Within 5 minutes of chewing, you
                      will feel a smooth and gentle release that ends cravings.
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                      style={{ fontSize: "18px" }}
                    >
                      <b> Brighter Smile:</b>If your teeth are stained, don’t
                      worry – Teeth whitening properties of Ryze Gums will help
                      bring back your natural shade.
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                      style={{ fontSize: "18px" }}
                    >
                      <b> No Jaw Strain: </b>Even after a 30-minute chew, Ryze
                      gum remains delightfully soft.
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                      style={{ fontSize: "18px" }}
                    >
                      <b> Sugar-Free: </b>Tastes amazing without adding to your
                      calorie count..
                    </p>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 1 && (
              <div className="space-y-4">
                <div>
                  <p
                    className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                    style={{ fontSize: "18px" }}
                  >
                    <b> Consumption:-</b> 8-12 pieces a day. Not more than 24
                    pieces of gums a day.
                  </p>
                </div>

                <div>
                  <p
                    className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Reduction:- </b> After 3 months, users should gradually
                    reduce the number of gums consumed each day until only 1-2
                    daily gums are required, by when use of gum should be
                    stopped.
                  </p>
                </div>
                <div>
                  <p
                    className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Duration:- </b>This process may take 6 months from the
                    start of treatment.
                  </p>
                </div>

                <div>
                  <p
                    className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Consultation:-</b> Counselling may help to quit. Those
                    using NRT for more than 9 months should seek advice from a
                    health professional.
                  </p>
                </div>

                
              </div>
            )}

            {selectedTab === 2 && (
              <div>
                <p
                  className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                  style={{ fontSize: "18px" }}
                >
                  Using acidic beverages, such as coffee or soft drinks,
                  together with Ryze gums may interfere with the buccal
                  absorption. Acidic beverages should be avoided 15 minutes
                  prior to chewing RYZE gums. Also, avoid eating or use
                  removeable dentures while chewing RYZE.
                </p>
              </div>
            )}

            {selectedTab === 3 && (
              <div>
                <p
                  className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                  style={{ fontSize: "18px" }}
                >
                  RYZE may have some side effects. The side effects are usually
                  dose-dependent and may not be experienced by all users. Common
                  side effects, especially during the first few weeks are :
                  headache, nausea , vomiting, hiccups, throat irritation, jaw
                  muscle ache, and sore throat or mouth.
                </p>
              </div>
            )}

            {selectedTab === 4 && (
              <div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#1c1d1d" }}
                >
                  Consult your Doctor prior to use.
                </h3>
                {/* <br></br> */}
                <p
                  className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                  style={{ fontSize: "17px" }}
                >
                  <b>1. If you are pregnant, breast feeding </b>
                </p>
                <p
                  className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                  style={{ fontSize: "17px" }}
                >
                  <b>
                    2. If you are taking any medicines containing Theophylline,
                    Clozapine, Tacrine, Ropinirole.{" "}
                  </b>
                </p>
                <p
                  className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                  style={{ fontSize: "17px" }}
                >
                  <b>
                    3.If you have had previous reactions to gums or other
                    nicotine-containing products.
                  </b>
                </p>
                <p
                  className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                  style={{ fontSize: "17px" }}
                >
                  <b>
                    4. If you have any medical condition including uncontrolled
                    blood pressure, stomach ulcer, diabetes, thyroid problems,
                    allergies, severe throat or inflammation of the mouth, or
                    disorders of the adrenal gland.{" "}
                  </b>
                </p>
              </div>
            )}

            {selectedTab === 5 && (
              <div>
                <p
                  className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                  style={{ fontSize: "18px" }}
                >
                  Incase you have exceeded the recommended dosage or a child has
                  ingested RYZE, please contact a doctor immediately. Overdose
                  symptoms include headache, sickness, diarrhea and stomach
                  pain.
                </p>
              </div>
            )}

            {selectedTab === 6 && (
              <div className="space-y-4">
                <div>
                  <p
                    className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                    style={{ fontSize: "18px" }}
                  >
                    <b> Pack Quantity:</b> Each Pack contains 9 gums.
                  </p>
                </div>

                <div>
                  <p
                    className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Manufactured by: </b> Fertin India Pvt. Ltd. Plot no.
                    L-10 & L-11, Cuncolim Industrial Estate, Cuncolim Salcette,
                    Goa-403703, India. Mfg. Lic. No.: 931
                  </p>
                </div>
                <div>
                  <p
                    className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Marketed & Distributed by: </b>Vectura Fertin Pharma Pvt.
                    Ltd. Plot no. L-10 & L-11, Cuncolim Industrial Estate,
                    Cuncolim Salcette, Goa-403703, India.
                  </p>
                </div>

                <div>
                  <p
                    className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Country of Origin:</b> India
                  </p>
                </div>

                <div>
                  <p
                    className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                    style={{ fontSize: "18px" }}
                  >
                    <b> Best Before: </b> 24 months.
                  </p>
                </div>

                <div>
                  <p
                    className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                    style={{ fontSize: "18px" }}
                  >
                    <b> Caution: </b>Do not consume the product if found
                    cracked/melted/damaged.
                  </p>
                </div>
                <div>
                  <p
                    className="text-[#1C1D1D] text-xl leading-relaxed mb-4"
                    style={{ fontSize: "18px" }}
                  >
                    <b> Storage: </b>Store in a cool & dry place. Protect from
                    direct sunlight. Keep out of sight and reach of children.
                    Shelf Life 24 Months. Check expiry date before consuming.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Here's how Weryze works section */}
      <div className="mt-16 mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Here's how Weryze works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Step 1: Craving */}
          <div className="flex flex-col">
            <div className="relative aspect-square overflow-hidden rounded-md mb-2">
              <Image
                src="https://weryze.com/cdn/shop/files/craving.jpg?v=1723189799"
                alt="Craving"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-red-600 text-white text-center py-3 font-bold text-xl">
              Craving
            </div>
          </div>
          
          {/* Step 2: Chewing */}
          <div className="flex flex-col">
            <div className="relative aspect-square overflow-hidden rounded-md mb-2">
              <Image
                src="https://weryze.com/cdn/shop/files/chewing.jpg?v=1723189798"
                alt="Chewing"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-red-600 text-white text-center py-3 font-bold text-xl">
              Chewing
            </div>
          </div>
          
          {/* Step 3: Decision */}
          <div className="flex flex-col">
            <div className="relative aspect-square overflow-hidden rounded-md mb-2">
              <Image
                src="https://weryze.com/cdn/shop/files/decision_1.jpg?v=1739963040"
                alt="Decision"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-red-600 text-white text-center py-3 font-bold text-xl">
              Decision
            </div>
          </div>
          
          {/* Step 4: Freedom */}
          <div className="flex flex-col">
            <div className="relative aspect-square overflow-hidden rounded-md mb-2">
              <Image
                src="https://weryze.com/cdn/shop/files/freedon.jpg?v=1723189799"
                alt="Freedom"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-red-600 text-white text-center py-3 font-bold text-xl">
              Freedom
            </div>
          </div>
        </div>
      </div>

      {/* We set the bar for quality section */}
      <div className="mt-16 mb-16 w-full">
        <div className="flex flex-col md:flex-row">
          {/* Left content */}
          <div className="w-full md:w-2/3 pr-0 md:pr-8">
            <h2 className="text-5xl font-bold mb-6">We set the bar for quality — and keep raising it</h2>
            <p className="text-xl mb-10 leading-relaxed">
              Ryze is held to the highest quality standards. From our research, to sourcing, to manufacturing and testing, we go above and beyond industry standards to bring you a safe and effective product.
            </p>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <h3 className="text-6xl font-bold text-red-600 mb-2">1</h3>
                <p className="font-bold text-xl mb-1">Obsessively curated product</p>
              </div>
              
              <div>
                <h3 className="text-6xl font-bold text-red-600 mb-2">30+</h3>
                <p className="font-bold text-xl mb-1">Years of research legacy</p>
              </div>
              
              <div>
                <h3 className="text-6xl font-bold text-red-600 mb-2">200+</h3>
                <p className="font-bold text-xl mb-1">Granted patents</p>
              </div>
              
              <div>
                <h3 className="text-6xl font-bold text-red-600 mb-2">6</h3>
                <p className="font-bold text-xl mb-1">Exciting Indian flavours</p>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="w-full md:w-1/3 mt-10 md:mt-0">
            <div className="relative h-[500px] w-[500]">
              <Image
                src="https://weryze.com/cdn/shop/files/image_54.png?v=1714562266"
                alt="Ryze Gum Quality"
                fill
                className="object-contain md:object-cover rounded-md"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Customer Reviews Section - Full Width Background */}
      <div className="w-full  py-8 -mx-4 mt-16">
        <div className="container mx-auto px-4">
          <CustomerReviews
            reviews={reviews}
            totalReviews={totalReviews}
            averageRating={averageRating}
          />
        </div>
      </div>
      
      {/* FAQ Section - Full Width Background */}
      <div className="w-full bg-[#FCEBEB] py-8 -mx-4">
        <div className="container mx-auto px-4">
          <FAQSection
            faqs={faqData}
            title="FAQs"
          />
        </div>
      </div>
      
      {/* Product Images Section - Full Width */}
      <div className="mt-16 mb-16 w-full">
        <div className="flex flex-col md:flex-row">
          {/* Left Image */}
          <div className="w-full md:w-1/2 relative overflow-hidden group">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="https://weryze.com/cdn/shop/files/mint_5309c641-dee5-40a3-840f-ee03deda905f.jpg?v=1704952221&width=1200"
                alt="Ryze Mint Gum"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-90"
              />
              <div className="absolute bottom-10 left-10">
                <Link href="/collections/ryze-gums" className="text-white text-2xl font-bold flex items-center">
                  <span className="mr-2">Back to Ryze Gums</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-180">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/2 relative overflow-hidden group">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="https://weryze.com/cdn/shop/files/royalpaan_1.jpg?v=1704962020&width=1200"
                alt="Ryze Royal Paan Gum"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-90"
              />
              <div className="absolute bottom-10 right-10">
                <Link href="/collections/ryze-gums/products/ryze-gum-royal-paan-2mg" className="text-white text-2xl font-bold flex items-center">
                  <span className="mr-2">Next: RYZE Gums Royal Paan Flavor - 2mg</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
