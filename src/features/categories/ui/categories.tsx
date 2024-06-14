import { FC, useMemo, useState } from 'react';
import BurgerIcon from 'shared/assets/images/icons/burder-icon.svg?react';
import PizzaIcon from 'shared/assets/images/icons/pizza-icon.svg?react';
import SandwichIcon from 'shared/assets/images/icons/sandwich-icon.svg?react';
import AsianFoodIcon from 'shared/assets/images/icons/asian-food-icon.svg?react';
import SetMenuIcon from 'shared/assets/images/icons/set-menu-icon.svg?react';

import { Slider } from 'shared/ui/slider';
import { Product } from 'shared/types/product';
import { Button } from 'shared/ui/button';
import { ProductCard } from 'entities/productCard';
import { ProductCategories } from 'shared/types/productCategories';
import { getProducts } from 'shared/api/product/product';
import { useFetching } from 'shared/hooks/useFetching';
import { Loader } from 'shared/ui/loader';

import './categories.scss';

interface CategoriesProps {
  className?: string;
  cart: Product[];
  addToCart: (self: Product) => void;
  removeFromCart: (selfId: number) => void;
}

export const Categories: FC<CategoriesProps> = ({
  className = '',
  addToCart,
  removeFromCart,
  cart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategories>(
    ProductCategories.Burger,
  );

  const [data, isLoading, error] = useFetching<
    [string | null, Product[]],
    [ProductCategories]
  >(getProducts, selectedCategory);

  const products = data ? data[1] : [];

  const slidesElements = useMemo<JSX.Element[]>(() => {
    if (!Array.isArray(products)) {
      return [];
    }
    return products.map((product) => (
      <ProductCard
        key={product.id}
        item={product}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        isInCart={!!cart.find((item) => item.id === product.id)}
      />
    ));
  }, [products, cart]);

  return (
    <div className={`section__body ${className}`}>
      <div className="categories__menu">
        <ul className="categories__menu-list">
          <li className="categories__menu-item">
            <Button
              className={`categories__menu-button ${selectedCategory === ProductCategories.Burger ? 'is-selected' : ''}`}
              onClick={() => {
                setSelectedCategory(ProductCategories.Burger);
              }}
            >
              <BurgerIcon />
              Burger
            </Button>
          </li>
          <li className="categories__menu-item">
            <Button
              className={`categories__menu-button ${selectedCategory === ProductCategories.Pizza ? 'is-selected' : ''}`}
              onClick={() => {
                setSelectedCategory(ProductCategories.Pizza);
              }}
            >
              <PizzaIcon />
              tPizza
            </Button>
          </li>
          <li className="categories__menu-item">
            <Button
              className={`categories__menu-button ${selectedCategory === ProductCategories.Sandwich ? 'is-selected' : ''}`}
              onClick={() => {
                setSelectedCategory(ProductCategories.Sandwich);
              }}
            >
              <SandwichIcon />
              sandwich
            </Button>
          </li>
          <li className="categories__menu-item">
            <Button
              className={`categories__menu-button ${selectedCategory === ProductCategories.AsianFood ? 'is-selected' : ''}`}
              onClick={() => {
                setSelectedCategory(ProductCategories.AsianFood);
              }}
            >
              <AsianFoodIcon />
              Asian Food
            </Button>
          </li>
          <li className="categories__menu-item">
            <Button
              className={`categories__menu-button ${selectedCategory === ProductCategories.SetMenu ? 'is-selected' : ''}`}
              onClick={() => {
                setSelectedCategory(ProductCategories.SetMenu);
              }}
            >
              <SetMenuIcon />
              Set Menu
            </Button>
          </li>
        </ul>
      </div>
      <div className="categories__products">
        {isLoading ? (
          <Loader size={200} />
        ) : error ? (
          error
        ) : slidesElements.length ? (
          <Slider slides={slidesElements} />
        ) : (
          'There is no one ' + selectedCategory
        )}
      </div>
    </div>
  );
};
