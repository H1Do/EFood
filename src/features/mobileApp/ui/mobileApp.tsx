import { FC } from 'react';
import mobileAppImg1 from 'shared/assets/images/mobile-app/1.png';
import mobileAppImg2 from 'shared/assets/images/mobile-app/2.png';
import mobileAppImg3 from 'shared/assets/images/mobile-app/3.png';
import appStoreSvg from 'shared/assets/images/app-store.svg';
import googlePlaySvg from 'shared/assets/images/google-play.svg';
import './mobile-app.scss';

interface MobileAppProps {
  className?: string;
}

export const MobileApp: FC<MobileAppProps> = ({ className }) => {
  return (
    <div className={`mobile-app ${className}`}>
      <div className="mobile-app__inner">
        <div className="mobile-app__body">
          <h2 className="mobile-app__title">
            Download Our <span className="marked">Mobile App</span>
          </h2>
          <div className="mobile-app__description">
            <p>
              It's all at your fingertips -- the restaurants you love. Find the
              right food to suit your mood, and make the first bite last. Go
              ahead, download app and get 50% discount
            </p>
          </div>
          <div className="mobile-app__links">
            <a href="./" className="mobile-app__link">
              <img
                src={appStoreSvg}
                width={120}
                height={40}
                loading="lazy"
                alt="App Store"
              />
              <span className="visually-hidden">Go to App Store</span>
            </a>
            <a href="./" className="mobile-app__link">
              <img
                src={googlePlaySvg}
                width={135}
                height={40}
                loading="lazy"
                alt="App Store"
              />
              <span className="visually-hidden">Go to Google Play</span>
            </a>
          </div>
        </div>
        <div className="mobile-app__images">
          <img
            src={mobileAppImg1}
            width={312}
            height={480}
            loading="lazy"
            alt="Mobile app image"
            className="mobile-app__image"
          />
          <img
            src={mobileAppImg2}
            loading="lazy"
            alt="Mobile app image"
            width={215}
            height={464}
            className="mobile-app__image"
          />
          <img
            src={mobileAppImg3}
            loading="lazy"
            alt="Mobile app image"
            width={312}
            height={480}
            className="mobile-app__image"
          />
        </div>
      </div>
    </div>
  );
};
