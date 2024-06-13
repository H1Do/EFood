import { FC } from 'react';

import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';

import './subscribe.scss';
import TelegramIcon from 'shared/assets/images/icons/telegram-icon.svg?react';

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
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="subscribe__form-input"
          />
          <Button buttonType="submit" className="subscribe__form-button">
            <TelegramIcon />
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};
