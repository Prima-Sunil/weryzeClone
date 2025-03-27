export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  isAnonymous?: boolean;
  productId?: string;
  date?: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Karabi Tripathi",
    rating: 5,
    comment: "Thanks Ryze! Bahut asani se chutkara dila diye buri aadato se. Highly recommended for anyone trying to quit.",
    date: "2024-12-15"
  },
  {
    id: 2,
    name: "Anonymous",
    rating: 5,
    comment: "I've tried many products before, but Ryze gums actually worked for me. The mint flavor is refreshing and helps with cravings.",
    isAnonymous: true,
    date: "2024-12-10"
  },
  {
    id: 3,
    name: "Anonymous",
    rating: 4,
    comment: "Why it is helpful to get the ryze gums? Because they actually work! The flavors are good and last long enough.",
    isAnonymous: true,
    date: "2024-11-28"
  },
  {
    id: 4,
    name: "Rahul Sharma",
    rating: 5,
    comment: "The Royal Paan flavor is amazing! Reminds me of the real thing without the harmful effects.",
    date: "2024-11-15"
  },
  {
    id: 5,
    name: "Priya Patel",
    rating: 4,
    comment: "Good product overall. Helped me reduce my consumption significantly in just a few weeks.",
    date: "2024-11-05"
  }
];

export const getReviewStats = () => {
  const totalReviews = reviews.length;
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / totalReviews;
  
  return {
    totalReviews,
    averageRating
  };
};

export const getReviewsByProductId = (productId: string) => {
  return reviews.filter(review => review.productId === productId);
};

export const getAllReviews = () => {
  return reviews;
};