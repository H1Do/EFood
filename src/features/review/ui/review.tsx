import { FC } from 'react';

import reviewBg from 'shared/assets/images/review-bg.png';
import { Button } from 'shared/ui/button';

interface ReviewProps {
  className?: string;
}

export const Review: FC<ReviewProps> = ({ className }) => {
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
            <svg
              width="24.000000"
              height="20.008057"
              viewBox="0 0 24 20.0081"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs />
              <path
                id="Vector"
                d="M23 10L1 10"
                stroke="#7B7B7B"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                id="Vector"
                d="M10 1L1 10L10 19"
                stroke="#7B7B7B"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            <span className="visually-hidden">See previous preview</span>
          </Button>
          <Button
            isSvg={true}
            className="review__button review__button--active"
          >
            <svg
              width="24.000000"
              height="20.008057"
              viewBox="0 0 24 20.0081"
              fill="none"
              style={{ scale: '-1' }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs />
              <path
                id="Vector"
                d="M23 10L1 10"
                stroke="#7B7B7B"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                id="Vector"
                d="M10 1L1 10L10 19"
                stroke="#7B7B7B"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            <span className="visually-hidden">See next preview</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
