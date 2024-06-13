import { FC } from 'react';

import deliveryBg from 'shared/assets/images/delivery-bg.png';
import advantageImg1 from 'shared/assets/images/advantages/1.svg';
import advantageImg2 from 'shared/assets/images/advantages/2.svg';
import advantageImg3 from 'shared/assets/images/advantages/3.svg';


interface DeliveryProps {
  className?: string;
}

export const Delivery: FC<DeliveryProps> = ({ className }) => {
  return (
    <div className={`delivery ${className}`}>
      <div className="delivery__inner">
        <div className="delivery__image-wrapper">
          <img
            src={deliveryBg}
            loading="lazy"
            alt=""
            width={626}
            height={723}
            className="delivery__image"
          />
        </div>
        <div className="delivery__body">
          <h2 className="delivery__title">
            <span className="marked">Stay</span> at home, we will <br />
            Provide <span className="marked"> good food</span>
          </h2>
          <div className="delivery__description">
            <p>
              We provide tasty food and superfast delivery at your home. Let’s
              use our services right now and get discounts of up to 50%.
            </p>
          </div>
          <div className="delivery__advantages">
            <ul className="delivery__advantages-list">
              <li className="delivery__advantages-item">
                <img
                  src={advantageImg1}
                  loading="lazy"
                  alt=""
                  width={40}
                  height={34}
                  className="delivery__advantages-image"
                />
                <div className="delivery__advantages-description">
                  fasted delivery in 30 Minutes
                </div>
              </li>
              <li className="delivery__advantages-item">
                <img
                  src={advantageImg2}
                  loading="lazy"
                  alt=""
                  width={33}
                  height={33}
                  className="delivery__advantages-image"
                />
                <div className="delivery__advantages-description">
                  300+ delivery men
                </div>
              </li>
              <li className="delivery__advantages-item">
                <img
                  src={advantageImg3}
                  loading="lazy"
                  alt=""
                  width={33}
                  height={36}
                  className="delivery__advantages-image"
                />
                <div className="delivery__advantages-description">
                  500+ restaurant & cafe shop
                </div>
              </li>
            </ul>
          </div>
          <a href="./" className="button button--link">
            See more
          </a>
        </div>
      </div>
    </div>
  );
};
