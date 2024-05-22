import { Slider } from 'shared/ui/slider';
import { FC, useMemo, useState } from 'react';
import { Product } from 'shared/types/product';
import { Button } from 'shared/ui/button';
import { ProductCard } from 'entities/productCard';
import productImage1 from 'shared/assets/images/products/1.png';
import productImage2 from 'shared/assets/images/products/2.png';
import productImage3 from 'shared/assets/images/products/3.png';
import productImage4 from 'shared/assets/images/products/4.png';
import productImage5 from 'shared/assets/images/products/5.png';
import BurgerIcon from 'shared/assets/images/icons/burder-icon.svg?react';
import PizzaIcon from 'shared/assets/images/icons/pizza-icon.svg?react';
import SandwichIcon from 'shared/assets/images/icons/sandwich-icon.svg?react';
import AsianFoodIcon from 'shared/assets/images/icons/asian-food-icon.svg?react';
import SetMenuIcon from 'shared/assets/images/icons/set-menu-icon.svg?react';
import './categories.scss';

interface CategoriesProps {
  className?: string;
}

enum categoryNames {
  Burger = 'burger',
  Pizza = 'pizza',
  Sandwich = 'sandwich',
  AsianFood = 'asian-food',
  SetMenu = 'set-menu',
}

export const Categories: FC<CategoriesProps> = ({ className }) => {
  const slidesInfo = useMemo<Product[]>(
    () => [
      {
        id: 1,
        title: 'Cheesburger With Salad',
        price: 18,
        rating: 10,
        image: productImage1,
      },
      {
        id: 2,
        title: 'Beef Burger',
        price: 15,
        rating: 9,
        image: productImage2,
      },
      {
        id: 3,
        title: 'Royel Cheeseburger',
        price: 16,
        rating: 10,
        image: productImage3,
      },
      {
        id: 4,
        title: 'Black Gambugrer',
        price: 14,
        rating: 10,
        image: productImage4,
      },
      {
        id: 5,
        title: 'Chicken Burger',
        price: 15,
        rating: 10,
        image: productImage5,
      },
      {
        id: 6,
        title: 'Cheesburger With Salad',
        price: 18,
        rating: 10,
        image: productImage1,
      },
      {
        id: 7,
        title: 'Beef Burger',
        price: 15,
        rating: 9,
        image: productImage2,
      },
      {
        id: 8,
        title: 'Royel Cheeseburger',
        price: 16,
        rating: 10,
        image: productImage3,
      },
    ],
    [],
  );

  const slidesElements = useMemo<JSX.Element[]>(
    () => slidesInfo.map((slideInfo) => <ProductCard item={slideInfo} />),
    [slidesInfo],
  );

  const [selectedCategory, setSelectedCategory] = useState<categoryNames>(
    categoryNames.Burger,
  );

  return (
    <div className={`section__body ${className}`}>
      <div className="categories__menu">
        <ul className="categories__menu-list">
          <li className="categories__menu-item">
            <Button
              className={`categories__menu-button ${selectedCategory === categoryNames.Burger ? 'is-selected' : ''}`}
              onClick={() => setSelectedCategory(categoryNames.Burger)}
            >
              <BurgerIcon />
              Burger
            </Button>
          </li>
          <li className="categories__menu-item">
            <Button
              className={`categories__menu-button ${selectedCategory === categoryNames.Pizza ? 'is-selected' : ''}`}
              onClick={() => setSelectedCategory(categoryNames.Pizza)}
            >
              <PizzaIcon />
              tPizza
            </Button>
          </li>
          <li className="categories__menu-item">
            <Button
              className={`categories__menu-button ${selectedCategory === categoryNames.Sandwich ? 'is-selected' : ''}`}
              onClick={() => setSelectedCategory(categoryNames.Sandwich)}
            >
              <SandwichIcon />
              sandwich
            </Button>
          </li>
          <li className="categories__menu-item">
            <Button
              className={`categories__menu-button ${selectedCategory === categoryNames.AsianFood ? 'is-selected' : ''}`}
              onClick={() => setSelectedCategory(categoryNames.AsianFood)}
            >
              <AsianFoodIcon />
              Asian Food
            </Button>
          </li>
          <li className="categories__menu-item">
            <Button
              className={`categories__menu-button ${selectedCategory === categoryNames.SetMenu ? 'is-selected' : ''}`}
              onClick={() => setSelectedCategory(categoryNames.SetMenu)}
            >
              <SetMenuIcon />
              Set Menu
            </Button>
          </li>
        </ul>
      </div>
      <div className="categories__products">
        <Slider slides={slidesElements} />
      </div>
    </div>
  );
};
