
import React from 'react';
import { Review } from '../types';

interface ReviewSectionProps {
  reviews: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  if (reviews.length === 0) {
    return (
      <div className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        <p className="text-muted-foreground">No reviews yet. Be the first to review!</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-b-0">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                {review.userName.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="font-medium">{review.userName}</p>
                <div className="flex items-center">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`text-${i < review.rating ? 'yellow-500' : 'gray-400'}`}>★</span>
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-muted-foreground">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-foreground/90 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
