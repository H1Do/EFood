import { Slider } from 'shared/ui/slider';
import { FC, useEffect, useMemo, useState } from 'react';
import { Product } from 'shared/types/product';
import { Button } from 'shared/ui/button';
import { ProductCard } from 'entities/productCard';
import { ProductCategories } from 'shared/types/productCategories';

import BurgerIcon from 'shared/assets/images/icons/burder-icon.svg?react';
import PizzaIcon from 'shared/assets/images/icons/pizza-icon.svg?react';
import SandwichIcon from 'shared/assets/images/icons/sandwich-icon.svg?react';
import AsianFoodIcon from 'shared/assets/images/icons/asian-food-icon.svg?react';
import SetMenuIcon from 'shared/assets/images/icons/set-menu-icon.svg?react';
import './categories.scss';
import { getProducts } from 'shared/api/product/product';

interface CategoriesProps {
  className?: string;
}

export const Categories: FC<CategoriesProps> = ({ className }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategories>(
    ProductCategories.Burger,
  );

  const [slidesProducts, setSlidesProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts(selectedCategory)
      .then((data) => setSlidesProducts(data))
      .catch((err) => console.log(err));
  }, [selectedCategory]);

  const slidesElements = useMemo<JSX.Element[]>(
    () =>
      slidesProducts.map((slideProduct) => <ProductCard item={slideProduct} />),
    [slidesProducts],
  );

  return (
    <div className={`section__body ${className}`}>
      <div className="categories__menu">
        <ul className="categories__menu-list">
          <li className="categories__menu-item">
            <Button
              className={`categories__menu-button ${selectedCategory === ProductCategories.Burger ? 'is-selected' : ''}`}
              onClick={() => setSelectedCategory(ProductCategories.Burger)}
            >
              <BurgerIcon />
              Burger
            </Button>
          </li>
          <li className="categories__menu-item">
            <Button
              className={`categories__menu-button ${selectedCategory === ProductCategories.Pizza ? 'is-selected' : ''}`}
              onClick={() => setSelectedCategory(ProductCategories.Pizza)}
            >
              <PizzaIcon />
              tPizza
            </Button>
          </li>
          <li className="categories__menu-item">
            <Button
              className={`categories__menu-button ${selectedCategory === ProductCategories.Sandwich ? 'is-selected' : ''}`}
              onClick={() => setSelectedCategory(ProductCategories.Sandwich)}
            >
              <SandwichIcon />
              sandwich
            </Button>
          </li>
          <li className="categories__menu-item">
            <Button
              className={`categories__menu-button ${selectedCategory === ProductCategories.AsianFood ? 'is-selected' : ''}`}
              onClick={() => setSelectedCategory(ProductCategories.AsianFood)}
            >
              <AsianFoodIcon />
              Asian Food
            </Button>
          </li>
          <li className="categories__menu-item">
            <Button
              className={`categories__menu-button ${selectedCategory === ProductCategories.SetMenu ? 'is-selected' : ''}`}
              onClick={() => setSelectedCategory(ProductCategories.SetMenu)}
            >
              <SetMenuIcon />
              Set Menu
            </Button>
          </li>
        </ul>
      </div>
      <div className="categories__products">
        {slidesElements.length ? (
          <Slider slides={slidesElements} />
        ) : (
          'There is no one ' + selectedCategory
        )}
      </div>
    </div>
  );
};
