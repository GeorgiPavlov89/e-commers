import React from "react";

const Rating = ({ rating }) => {
  const roundedRating = Math.round(rating);
  const maxStars = 5;
  console.log(rating);

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
      if (i <= roundedRating) {
        stars.push(<i key={i} className="fas fa-star filled-star"></i>);
      } else {
        stars.push(<i key={i} className="fas fa-star"></i>);
      }
    }

    return stars;
  };

  return <div className="rating">{renderStars()}</div>;
};

export default Rating;
