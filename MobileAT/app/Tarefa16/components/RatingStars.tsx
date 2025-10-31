// src/components/RatingStars.tsx
import React from "react";

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const maxStars = 5;

  return (
    <div className="rating-stars">
      {[...Array(maxStars)].map((_, i) => (
        <span key={i} className={i < Math.round(rating) ? "filled" : ""}>
          ★
        </span>
      ))}
      <span className="rating-value">{rating.toFixed(1)}</span>
    </div>
  );
};

export default RatingStars;
