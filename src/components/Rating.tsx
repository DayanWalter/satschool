// React
import React from "react";

// Icons
import Icon from "@mdi/react";
import { mdiStarOutline } from "@mdi/js";
import { mdiStarHalfFull } from "@mdi/js";
import { mdiStar } from "@mdi/js";

const Rating = ({ rating }: { rating: number }) => {
  const renderStars = () => {
    // Start with an empty array
    const stars = [];
    // Count all FULL stars
    const fullStars = Math.floor(rating);
    //Has the rating a half star? true or false
    const hasHalfStar = rating % 1 !== 0;

    // Push for every full star one Icon with a full star into the stars-array
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Icon key={i} className="text-primary" path={mdiStar} size={1} />,
      );
    }

    // If the rating has a half star, push this star icon into the stars array
    if (hasHalfStar) {
      stars.push(
        <Icon
          key="half"
          className="text-primary"
          path={mdiStarHalfFull}
          size={1}
        />,
      );
    }

    // Calculate the remaining stars and push them into the array(empty stars)
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Icon
          key={i + fullStars + (hasHalfStar ? 1 : 0)}
          className="text-primary"
          path={mdiStarOutline}
          size={1}
        />,
      );
    }
    // Return the array of stars
    return stars;
  };

  return <>{renderStars()}</>;
};
export default Rating;
