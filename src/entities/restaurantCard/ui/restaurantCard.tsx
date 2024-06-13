import { FC } from 'react';

import clockIconSvg from 'shared/assets/images/icons/clock-icon.svg';
import rightArrowSvg from 'shared/assets/images/icons/right-arrow-icon.svg';
import { Button } from 'shared/ui/button';
import './restaurant-card.scss';

interface RestaurantCardProps {
  imgSrc: string;
  title: string;
  schedule: string;
  datetime?: string;
  linkTo?: string;
  className?: string;
}

export const RestaurantCard: FC<RestaurantCardProps> = ({
  imgSrc,
  title,
  schedule,
  datetime = '',
  linkTo = './',
  className = '',
}) => {
  return (
    <div className={`restaurant-card ${className}`}>
      <img
        src={imgSrc}
        loading="lazy"
        alt=""
        width={361}
        height={299}
        className="restaurant-card__image"
      />
      <div className="restaurant-card__body">
        <div className="restaurant-card__title">{title}</div>
        <div className="restaurant-card__schedule">
          <img
            src={clockIconSvg}
            width={22}
            height={22}
            loading="lazy"
            alt=""
          />
          <time dateTime={datetime}>{schedule}</time>
        </div>
        <Button
          isLink={true}
          isLinkLike={true}
          href={linkTo}
          className="restaurant-card__link"
        >
          <img
            src={rightArrowSvg}
            width={14}
            height={12}
            loading="lazy"
            alt=""
          />
          <span className="visually-hidden">{`Go to ${title}`}</span>
        </Button>
      </div>
    </div>
  );
};
