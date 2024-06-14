import { FC } from 'react';

import { RestaurantCard } from 'entities/restaurantCard';
import restaurantImg1 from 'shared/assets/images/restaurants/1.png';
import restaurantImg2 from 'shared/assets/images/restaurants/2.png';
import restaurantImg3 from 'shared/assets/images/restaurants/3.png';
import restaurantImg4 from 'shared/assets/images/restaurants/4.png';
import restaurantImg5 from 'shared/assets/images/restaurants/5.png';
import restaurantImg6 from 'shared/assets/images/restaurants/6.png';
import './restaurants.scss';

interface RestaurantsProps {
  className?: string;
}

export const Restaurants: FC<RestaurantsProps> = ({ className = '' }) => {
  return (
    <div className={`restaurants ${className}`}>
      <ul className="restaurants__list">
        <li className="restaurants__item">
          <RestaurantCard
            imgSrc={restaurantImg1}
            title="Blaze Pizza"
            schedule="11.00 AM - 10.00 PM"
            datetime="11:00-22:00"
            className="restaurant__item-inner"
          />
        </li>
        <li className="restaurants__item">
          <RestaurantCard
            imgSrc={restaurantImg2}
            title="Pizza Ranch"
            schedule="09.00 AM - 10.00 PM"
            datetime="09:00-22:00"
            className="restaurant__item-inner"
          />
        </li>
        <li className="restaurants__item">
          <RestaurantCard
            imgSrc={restaurantImg3}
            title="Dion’s Pizza Hut"
            schedule="10.00 AM - 12.00 PM"
            datetime="10:00-24:00"
            className="restaurant__item-inner"
          />
        </li>
        <li className="restaurants__item">
          <RestaurantCard
            imgSrc={restaurantImg4}
            title="Royel Burger"
            schedule="11.00 AM - 10.00 PM"
            datetime="11:00-22:00"
            className="restaurant__item-inner"
          />
        </li>
        <li className="restaurants__item">
          <RestaurantCard
            imgSrc={restaurantImg5}
            title="KFC Restaurant"
            schedule="09.00 AM - 10.00 PM"
            datetime="09:00-22:00"
            className="restaurant__item-inner"
          />
        </li>
        <li className="restaurants__item">
          <RestaurantCard
            imgSrc={restaurantImg6}
            title="Star Food"
            schedule="10.00 AM - 12.00 PM"
            datetime="10:00-24:00"
            className="restaurant__item-inner"
          />
        </li>
      </ul>
    </div>
  );
};
