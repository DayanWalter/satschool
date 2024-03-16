import React from "react";
import Icon from "@mdi/react";
import { mdiStarOutline } from "@mdi/js";
import { mdiStarHalfFull } from "@mdi/js";
import { mdiStar } from "@mdi/js";

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const renderStars = (): JSX.Element[] => {
    const stars: JSX.Element[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Icon key={i} className='text-primary' path={mdiStar} size={1} />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Icon
          key='half'
          className='text-primary'
          path={mdiStarHalfFull}
          size={1}
        />
      );
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Icon
          key={i + fullStars + (hasHalfStar ? 1 : 0)}
          className='text-primary'
          path={mdiStarOutline}
          size={1}
        />
      );
    }

    return stars;
  };

  return <>{renderStars()}</>;
};
export default Rating;
