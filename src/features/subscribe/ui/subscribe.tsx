import { FC } from 'react';
import { Button } from 'shared/ui/button';

interface SubscribeProps {
  className?: string;
}

export const Subscribe: FC<SubscribeProps> = ({ className }) => {
  return (
    <div className={`subscribe ${className}`}>
      <div className="subscribe__inner">
        <h2 className="subscribe__title">Subscribe to get the Latest Offer</h2>
        <div className="subscribe__description">
          Get our daily updates by subscribing to our newspaper, please drop
          your email below
        </div>
        <form className="subscribe__form">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="subscribe__form-input"
          />
          <Button buttonType="submit" className="subscribe__form-button">
            <svg
              width="13.000000"
              height="14.000000"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs />
              <path
                id="Vector"
                d="M7.52 13.3C7.27 13.3 7.05 13.16 6.94 12.94L5.01 9.08C4.9 8.87 4.92 8.61 5.06 8.42L8.17 4.2L3.95 7.31C3.75 7.44 3.5 7.46 3.29 7.36L-0.57 5.43C-0.8 5.31 -0.94 5.07 -0.93 4.81C-0.92 4.55 -0.75 4.32 -0.5 4.24L11.85 -0.31C12.08 -0.4 12.35 -0.34 12.53 -0.16C12.71 0.01 12.77 0.28 12.68 0.52L8.13 12.87C8.04 13.11 7.81 13.28 7.56 13.29C7.54 13.29 7.53 13.3 7.52 13.3Z"
                fill="#FFFFFF"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};
