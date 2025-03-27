'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Upload } from 'lucide-react';

interface ReviewData {
  rating: number;
  title: string;
  comment: string;
  name: string;
  email: string;
}

interface ReviewFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reviewData: ReviewData) => void;
}

export function ReviewForm({ isOpen, onClose, onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      rating,
      title,
      comment,
      name,
      email,
    });
    resetForm();
  };

  const resetForm = () => {
    setRating(0);
    setTitle('');
    setComment('');
    setName('');
    setEmail('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <div className={isOpen ? 'block' : 'hidden'}>
      <div className="bg-[#FFF5F5] p-8 rounded-lg max-w-3xl mx-auto mt-4">
        <h2 className="text-2xl font-bold text-center mb-6">Write a review</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-center uppercase text-sm font-medium mb-2">Rating</label>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  <svg 
                    className={`w-8 h-8 ${star <= rating ? 'text-red-500' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block uppercase text-sm font-medium mb-2 text-center">Review Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your review a title"
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-6">
            <label className="block uppercase text-sm font-medium mb-2 text-center">Review</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comments here"
              rows={5}
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block uppercase text-sm font-medium mb-2 text-center">Picture/Video (Optional)</label>
            <div className="border border-gray-200 rounded-md p-6 flex justify-center items-center cursor-pointer hover:bg-gray-50">
              <Upload className="h-10 w-10 text-gray-400" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-center">
              NAME (DISPLAYED PUBLICLY LIKE <span className="text-red-500">John Smith</span> )
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name (public)"
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-6">
            <label className="block uppercase text-sm font-medium mb-2 text-center">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email (private)"
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="text-xs text-center mb-6">
            How we use your data: We'll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me's terms, privacy and content policies.
          </div>

          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-3 border border-red-500 text-red-500 rounded-md font-medium hover:bg-red-50 transition-colors"
            >
              Cancel review
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}