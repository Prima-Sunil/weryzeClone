'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ReviewForm } from './review-form';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  isAnonymous?: boolean;
}

interface CustomerReviewsProps {
  title?: string;
  reviews: Review[];
  totalReviews: number;
  averageRating: number;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-red-500' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const RatingBar = ({ rating, count, total }: { rating: number; count: number; total: number }) => {
  const percentage = total > 0 ? (count / total) * 100 : 0;
  
  return (
    <div className="flex items-center mb-1">
      <div className="flex items-center mr-2">
        <span className="text-sm">{rating}</span>
        <svg className="w-4 h-4 text-red-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-red-500 h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-sm ml-2">{count}</span>
    </div>
  );
};

export function CustomerReviews({ title = "Customer Reviews", reviews, totalReviews, averageRating }: CustomerReviewsProps) {
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  
  // Calculate rating counts
  const ratingCounts = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length,
  };

  // Featured reviews (show top 3)
  const featuredReviews = reviews.slice(0, 3);

  const toggleReviewForm = () => {
    setIsReviewFormOpen(!isReviewFormOpen);
  };

  interface ReviewData {
    rating: number;
    title: string;
    comment: string;
    name: string;
    email: string;
  }

  const handleSubmitReview = (reviewData: ReviewData) => {
    // In a real application, you would send this data to your backend
    console.log('Review submitted:', reviewData);
    
    // Close the form after submission
    setIsReviewFormOpen(false);
    
    // You might want to add the new review to the list and update stats
    // This would typically be handled by refetching data from the server
    alert('Thank you for your review!');
  };

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Let customers speak for us</h2>
          <div className="flex justify-center mb-1">
            <StarRating rating={Math.round(averageRating)} />
          </div>
          <p className="text-gray-600">from {totalReviews} reviews</p>
        </div>

        {/* Featured Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredReviews.map((review) => (
            <div key={review.id} className="text-center p-6 border border-gray-100 rounded-lg shadow-sm">
              <div className="flex justify-center mb-2">
                <StarRating rating={review.rating} />
              </div>
              <h3 className="font-bold text-lg mb-2">
                {review.rating >= 4 ? "Thanks Ryze" : review.rating === 3 ? "I will try it" : "Needs improvement"}
              </h3>
              <p className="text-gray-600 mb-4">{review.comment}</p>
              <p className="text-gray-500 text-sm">{review.isAnonymous ? "Anonymous" : review.name}</p>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="flex flex-col md:flex-row justify-between items-start max-w-4xl mx-auto">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="flex items-center mb-1">
              <StarRating rating={Math.round(averageRating)} />
              <span className="ml-2 font-bold">{averageRating.toFixed(2)} out of 5</span>
            </div>
            <p className="text-gray-600">Based on {totalReviews} reviews</p>
          </div>

          <div className="w-full md:w-1/2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <RatingBar 
                key={rating} 
                rating={rating} 
                count={ratingCounts[rating as keyof typeof ratingCounts]} 
                total={totalReviews} 
              />
            ))}
          </div>

          <div>
            <button
              onClick={toggleReviewForm}
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
            >
              {isReviewFormOpen ? "Cancel review" : "Write a review"}
            </button>
          </div>
        </div>
        
        {/* Review Form - Positioned below the customer review section */}
        <div className="container mx-auto px-4 mb-12">
          <ReviewForm
            isOpen={isReviewFormOpen}
            onClose={() => setIsReviewFormOpen(false)}
            onSubmit={handleSubmitReview}
          />
        </div>
      </div>
    </div>
  );
}