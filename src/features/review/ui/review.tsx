import { FC } from 'react';
import ReviewArrowIcon from 'shared/assets/images/icons/review-arrow.svg?react';

import { Button } from 'shared/ui/button';
import reviewBg from 'shared/assets/images/review-bg.png';
import './review.scss';

interface ReviewProps {
  className?: string;
}

export const Review: FC<ReviewProps> = ({ className = '' }) => {
  return (
    <div className={`review ${className}`}>
      <img
        src={reviewBg}
        width={433}
        height={519}
        loading="lazy"
        alt="Happy woman with burger"
        className="review__image"
      />
      <div className="review__body">
        <div className="review__text">
          <p>
            EFood has the most intriguing food order system in the country. UI
            in both their app and web Is very simple and easy to use, enhancing
            the UX. Their delivery men are also quite professional and knows the
            neighborhood well. Till now I never had to guide them to my address
            for delivery;
          </p>
        </div>
        <div className="review__author">
          <div className="review__author-name">Anglina Jole</div>
          <div className="review__author-description">Food lover</div>
        </div>
        <div className="review__actions">
          <Button
            isSvg={true}
            className="review__button review__button--disabled"
          >
            <ReviewArrowIcon />
            <span className="visually-hidden">See previous preview</span>
          </Button>
          <Button
            isSvg={true}
            className="review__button review__button--active"
          >
            <ReviewArrowIcon style={{ scale: '-1' }} />
            <span className="visually-hidden">See next preview</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
