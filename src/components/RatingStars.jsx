// RatingStars.js
import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} style={{ color: 'orange'}}/>);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key={stars.length} style={{ color: 'orange'}} />);
  }

  return (
    <div>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default RatingStars;
