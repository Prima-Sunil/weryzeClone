"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/product/product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function Home() {
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
      name: 'RYZE Gums Flavored Pan 2mg',
      price: 379,
      originalPrice: 425,
      image: '/images/pan-gum.jpg',
      slug: 'ryze-gums-pan-masala-flavor-2mg',
      discount: 11,
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

  const trustData = [
    {
      title: "World's No. 1",
      description: "Crafted in Denmark by World's No. 1 suppliers of medicated chewing gum",
      image: "https://weryze.com/cdn/shop/files/icon1.png?v=1720186347",
    },
    {
      title: "30+ years of Research Legacy",
      description: "Through NRT Science Centre",
      image: "https://weryze.com/cdn/shop/files/icon3.png?v=1720186487",
    },
    {
      title: "200+ Granted Patents",
      description: "Leading scientists bringing the best quality for you",
      image: "https://weryze.com/cdn/shop/files/icon2.png?v=1720186581",
    },
    {
      title: "FDA & WHO approved Global Footprint",
      description: "Vejle (Denmark), Vancouver (Canada), Goa & Mumbai (India)",
      image: "https://weryze.com/cdn/shop/files/icon4.png?v=1720186603",
    },
  ];

  const ryzerData = [
    {
      name: "Nikhil",
      image: "https://weryze.com/cdn/shop/files/nikhil_de0fff52-d281-40b6-9b2a-9677655e9075.png?v=1740457581",
      quote: "I recently decided to quit, and I turned to Ryze Gums. Within a couple of weeks, I was able to reduce my consumption by half."
    },
    {
      name: "Pooja",
      image: "https://weryze.com/cdn/shop/files/Pooja_5214d8e6-b575-48b9-8a41-ae7e84e4b628.png?v=1739962472",
      quote: "Really good for people who want to quit, with regular use you will see visible change."
    },
    {
      name: "Ameya",
      image: "https://weryze.com/cdn/shop/files/amey_a86b2828-9a0f-4448-bd3c-8cff621bda3d.png?v=1739962472",
      quote: "I’ve tried other gums before, but Ryze is by far the best. It’s flavorful and doesn’t cause any throat irritation."
    },
    {
      name: "Avanee",
      image: "https://weryze.com/cdn/shop/files/avanee_0eac4cb5-eff3-4cbb-9d28-0c47a278b7f4.png?v=1739962472",
      quote: "I got these for my father who has been consuming for 25 years. His cravings reduced and it didn’t irritate his throat at all. Nice product."
    },
    {
      name: "Abhishek",
      image: "https://weryze.com/cdn/shop/files/abhishek_c29ec4d6-9b24-4bf0-b120-4dc379ca2ecf.png?v=1739962472",
      quote: "The gums surprised me with how quickly it curbed my urges and ultimately overcame my habit completely."
    },
    {
      name: "Prem",
      image: "https://weryze.com/cdn/shop/files/prem_b9167f50-330e-4ed2-845c-1b73e29bb7f6.png?v=1739962472",
      quote: "Useful product to quit as the release is smooth and good. Also, I loved the innovative saunf flavor."
    }
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const previewText = `
  Thinking of breaking free? We have the perfect solution for you! We understand the fact that quitting a habit is not an easy task. You have to navigate through a complex web of emotions, triggers, and behavior. On top of all this, withdrawal makes it even more difficult to quit. But you are not alone in this journey. We have created a perfect companion that will help in cessation. Ryze gums have been designed after years of thorough research. They are a type of NRT product that allows you to put a controlled amount of active ingredient in your body so that you can effectively manage your cravings and withdrawal symptoms.
    `;
  
  const additionalText = `
  When you chew on Ryze gums, they slowly release a controlled amount of active into your mouth that gets absorbed into the body through mouth membranes. This means that your body gets a certain amount of active and hence, does not experience severe withdrawal symptoms. This makes the quitting process manageable, giving you the freedom to focus on other behavioral adjustments that will further help in quitting.
    `;

  return (
    <div>
      {/* Hero Section - Responsive Carousel */}
      <section className="relative">
        <div className="aspect-[16/9] md:aspect-[21/9] w-full relative">
          <Carousel
            className="w-full"
            plugins={[
              Autoplay({
                delay: 7000,
                stopOnInteraction: false,
              }),
            ]}
            opts={{
              loop: true,
              align: "start",
              skipSnaps: false,
              duration: 20
            }}
          >
            <CarouselContent>
              {[
                "/images/hero-banner.jpg", 
                "/images/Why_nicotine_gum_banner.webp", 
                "/images/1366x546.webp"
              ].map((src, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-full aspect-[16/9] md:aspect-[21/9]">
                    <Image
                      src={src}
                      alt={`Ryze Gums Banner ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2" />
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              <div className="flex items-center justify-center gap-2">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-white opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100"
                    data-active={index === 0 ? "true" : "false"}
                  />
                ))}
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Counter Section - Responsive */}
      <section className="py-8 md:py-12 bg-white border-b">
        <div className="container-custom text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <span className="font-bold text-5xl sm:text-7xl md:text-8xl text-[#da0d21]">
              130925+
            </span>
            <span className="text-base sm:text-xl ml-0 sm:ml-4 mt-2 sm:mt-0">
              ryzers and counting...
            </span>
          </div>
        </div>
      </section>
     
      {/* meet Meet your fellow ryzers! */}
      <section className="py-12 bg-[#FDE9E9]">
      <div className="container-custom">
        {/* Meet Your Fellow Ryzers Section */}
        <h2 className="text-center text-5xl font-bold mb-6 text-black">Meet your fellow ryzers!</h2>
        <p className="text-center text-gray-600 mb-12">They aren't the 'invincibles', but real people who are finding their way out of dependence. We bring you their stories for all the motivation you’ll need.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ryzerData.map((ryzer, index) => (
            <div key={index} className={`relative ${index === 0 ? 'col-span-2 row-span-2' : 'col-span-1'}`}>
              <Image src={ryzer.image} alt={ryzer.name} className="w-full h-full object-cover rounded-lg"   width={500} 
                  height={500} />
              {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-b-lg">
                <h3 className="text-white font-bold text-xl">- {ryzer.name}</h3>
                <p className="text-white text-sm">{ryzer.quote}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Trust Badges Section - Responsive Grid */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-black">
            With you, in a bond of trust
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustData.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#fef2f2] rounded-lg p-6 flex items-start shadow-lg hover:scale-105 transition-transform"
              >
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={50} 
                  height={50} 
                  className="mr-4 flex-shrink-0" 
                />
                <div>
                  <h3 className="font-bold text-base text-[#da0d21] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Image Section - Responsive */}
      <section className="py-0">
        <div className="w-full px-4 sm:px-0">
          <Image
            src="https://weryze.com/cdn/shop/files/1366x546_51905f7d-63f5-4cf9-ab8f-e3500222debe.jpg?v=1739872895"
            alt="Ryze to a smarter choice"
            width={1366}
            height={546}
            className="w-full max-w-[1366px] h-auto mx-auto"
          />
        </div>
      </section>

      {/* Product Section - Responsive Grid */}
      <section className="py-12 bg-[#fef2f2]">
        <div className="container-custom">
          <div className="text-center relative mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold mb-4 sm:mb-0">
              Start Your Journey Now
            </h2>
            <Link 
              href="/collections/ryze-gums" 
              className="
                block sm:absolute right-0 top-1/2 sm:-translate-y-1/2 
                text-[#da0d21] hover:underline mt-4 sm:mt-0
              "
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Plan Section - Responsive */}
{/* Personalized Plan Section */}
<section className="py-12 text-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div>
              <Image 
                src="https://weryze.com/cdn/shop/files/Personalised.jpg?v=1720091033"
                alt="Personalized Plan"
                className="w-full rounded-lg"
                width={1366}
                height={546}
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4">Get Your Personalized Plan</h2>
              <p className="text-gray-600 mb-8">
                Arm yourself with tips, suggestions, and timebound goals to help you along. Just click below, answer a few questions, and you are set!
              </p>
              <Link href="/pages/contact">
                <Button className="bg-[#DA0D21] hover:bg-[#B00A1B] text-white">
                  Click Here
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Read More Section - Responsive */}
      <section className="py-12 px-4">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
            <strong>Meet Ryze gums: your tasty and reliable companion for cessation</strong>
          </h1>
          <p className="mb-4 text-sm sm:text-base font-bold text-[#1c1d1d]">{previewText}</p>
          {isExpanded && (
            <p className="mb-4 text-sm sm:text-base font-bold text-[#1c1d1d]">{additionalText}</p>
          )}

          <div className="text-center mt-4">
            <button 
              onClick={() => setIsExpanded(!isExpanded)} 
              className="text-[#da0d21] hover:underline"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}