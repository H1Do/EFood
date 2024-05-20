import { FC } from 'react';
import introBg from 'shared/assets/images/intro-bg.png';

interface IntroProps {
  className?: string;
}

export const Intro: FC<IntroProps> = ({ className }) => {
  return (
    <div className={`intro ${className}`}>
      <div className="intro__body">
        <h1 className="intro__title">
          Super Fast{' '}
          <span className="marked">
            Food <br /> Delivery
          </span>{' '}
          Service
        </h1>
        <div className="intro__description">
          <p>
            We provide super fast-delivery service. Let’s use our services right
            now and get discounts of up to 50%
          </p>
          <p>
            We provide super fast-delivery service. Let’s use our services right
            now and get discounts of up to 50%
          </p>
        </div>
        <div className="intro__links">
          <a href="./" className="intro__button button">
            Explore Food
          </a>
          <a href="./" className="intro__link">
            Download App
          </a>
        </div>
      </div>
      <div className="intro__illustration hidden-mobile">
        <img
          src={introBg}
          loading="lazy"
          alt=""
          width={771}
          height={681}
          className="intro__illustration-image"
        />
      </div>
    </div>
  );
};
