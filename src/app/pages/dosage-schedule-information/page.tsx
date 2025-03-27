/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function DosageScheduleInformationPage() {
  // Leaflet images for the carousel
  const leafletImages = [
    {
      src: "https://weryze.com/cdn/shop/files/Ryze_Leaflet-Desktop-1440px_X_600px-01.jpg?v=1741089646&width=1500",
      alt: "Ryze Leaflet 1"
    },
    {
      src: "https://weryze.com/cdn/shop/files/Ryze_Leaflet-Desktop-1440px_X_600px-04.jpg?v=1741089645&width=1500",
      alt: "Ryze Leaflet 2"
    },
    {
      src: "https://weryze.com/cdn/shop/files/Ryze_Leaflet-Desktop-1440px_X_600px-03.jpg?v=1741089646&width=1500",
      alt: "Ryze Leaflet 3"
    },
    {
      src: "https://weryze.com/cdn/shop/files/Ryze_Leaflet-Desktop-1440px_X_600px-02.jpg?v=1741089645&width=1500",
      alt: "Ryze Leaflet 4"
    }
  ];

  // Expert videos
  const expertVideos = [
    {
      id: 1,
      title: "Expert Advice - Dr. Dutka",
      videoUrl: "https://drive.google.com/file/d/1_iLTbCkZdog5naN2jsssQdwdQFWq5qQ4/view?usp=drive_link",
      thumbnailUrl: "/exports/DUTKA_1.png",
      expertName: "Dr. Richa Tiwari",
      expertTitle: "MBBS, MD,DNB,DM/DrNB"
    },
    {
      id: 2,
      title: "Expert Advice - Nikotim Gum",
      videoUrl: "https://drive.google.com/file/d/1_wYKOWufVsZ3npsKZCSTUB7TH9fSSDyL/view?usp=drive_link",
      thumbnailUrl: "/exports/NIKOTIM_GUM_2.png",
      expertName: "Dr. Richa Tiwari",
      expertTitle: "MBBS, MD,DNB,DM/DrNB"
    },
    {
      id: 3,
      title: "Expert Advice - Test Nikotim Gum",
      videoUrl: "https://drive.google.com/file/d/1IDwVs6_3X_RhDKGuHMVneMbwMoPLHNNI/view?usp=drive_link",
      thumbnailUrl: "/exports/TESTNIKOTIMGUM_3.png",
      expertName: "Dr. Richa Tiwari",
      expertTitle: "MBBS, MD,DNB,DM/DrNB"
    },
    {
      id: 4,
      title: "Expert Advice 4",
      videoUrl: "https://drive.google.com/file/d/1VRgcYbuic9R6qvIxTncl5xx-i1ycQP4T/view?usp=drive_link",
      thumbnailUrl: "/exports/4.png",
      expertName: "Dr. Richa Tiwari",
      expertTitle: "MBBS, MD,DNB,DM/DrNB"
    }
  ];

  // Define the type for expert videos
  interface ExpertVideo {
    id: number;
    title: string;
    videoUrl: string;
    thumbnailUrl: string;
    expertName: string;
    expertTitle: string;
  }

  // State for active video
  const [activeVideo, setActiveVideo] = useState<ExpertVideo | null>(null);

  return (
    <div className="bg-white">
      
      <h1 className="text-4xl font-bold text-center mb-8 pt-8">Dosage Schedule & Information</h1>
      
      {/* Leaflet Carousel Section */}
<section className="mb-16">
  <div className="aspect-[16/9] md:aspect-auto w-full relative">
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
        }),
      ]}
      opts={{
        loop: true,
        align: "start",
        skipSnaps: false,
        duration: 20,
      }}
    >
      <CarouselContent>
        {leafletImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto max-w-full border-none block"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Previous and Next Navigation */}
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        <div className="flex items-center justify-center gap-2">
          {leafletImages.map((_, index) => (
            <div
              key={index}
              className="h-3 w-3 rounded-full bg-white opacity-50 transition-opacity duration-300 data-[active=true]:opacity-100"
              data-active={index === 0 ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </Carousel>
  </div>
</section>


      {/* Experts Advice Section */}
      <section className="py-12 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black"><strong>EXPERT'S</strong> ADVICE</h2>
          
          <Carousel
            className="w-full"
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
              }),
            ]}
            opts={{
              loop: true,
              align: "start",
              skipSnaps: false,
              duration: 20,
              startIndex: 0, // Start from the first item
            }}
          >
            <CarouselContent className="-ml-0"> {/* Remove default negative margin */}
              {expertVideos.map((video) => (
                <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3 pl-0 sm:pl-4"> {/* Larger size and no left padding on mobile */}
                  <div
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full transform hover:scale-105 hover:-translate-y-2 z-10 hover:z-20"
                    onClick={() => setActiveVideo(video)}
                  >
                    <div className="relative aspect-video cursor-pointer h-64"> {/* Increased height */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-20 transition-all duration-300">
                        <div className="w-16 h-16 rounded-full bg-[#ff0025] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{video.title}</h3>
                      <p className="text-gray-700">{video.expertName}</p>
                      <p className="text-gray-500 text-sm">{video.expertTitle}</p>
                    </div> */}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Previous and Next Navigation */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold text-lg">{activeVideo.title}</h3>
              <button 
                onClick={() => setActiveVideo(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <div className="aspect-video">
                <iframe
                  src={activeVideo.videoUrl.replace("view?usp=drive_link", "preview")}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}

    
      
      <div className="h-20"></div>
    </div>
  );
}