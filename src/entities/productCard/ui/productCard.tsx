import EmptyHalfStarIcon from 'shared/assets/images/icons/empty-half-star.svg?react';
import FilledHalfStarIcon from 'shared/assets/images/icons/filled-half-star.svg?react';

import { Product } from 'shared/types/product';
import { Button } from 'shared/ui/button';
import './product-card.scss';

interface StarSvgProps {
  isRight?: boolean;
}

const EmptyStarSvg: React.FC<StarSvgProps> = ({ isRight }) => (
  <EmptyHalfStarIcon
    style={{
      color: '#FAC412',
      scale: isRight ? '-1 1' : 'none',
      marginRight: isRight ? '6px' : '0',
    }}
  />
);

const FilledStarSvg: React.FC<StarSvgProps> = ({ isRight }) => (
  <FilledHalfStarIcon
    style={{
      color: '#FAC412',
      scale: isRight ? '-1 1' : 'none',
      marginInline: isRight ? '0 6px' : '0',
    }}
  />
);

interface StarsProps {
  rating: number;
}

const Stars: React.FC<StarsProps> = ({ rating }) => {
  const starComponents = [];

  for (let i = 0; i < 10; i++) {
    if (rating) {
      starComponents.push(<FilledStarSvg key={i} isRight={i % 2 === 1} />);
      rating--;
    } else {
      starComponents.push(<EmptyStarSvg key={i} isRight={i % 2 === 1} />);
    }
  }

  return <>{starComponents}</>;
};

interface ProductCardProps {
  className?: string;
  item: Product;
  addToCart: (self: Product) => void;
  removeFromCart: (selfId: number) => void;
  isInCart: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  item,
  addToCart,
  className = '',
  removeFromCart,
  isInCart,
}) => {
  return (
    <div className={`product-card ${className}`}>
      <img
        src={item.image}
        width={144}
        height={144}
        alt=""
        className="product-card__image"
      />
      <div className="product-card__rating">
        <Stars rating={item.rating} />
      </div>
      <div className="product-card__title">{item.title}</div>
      <div className="product-card__price">${item.price.toFixed(2)}</div>
      {isInCart ? (
        <Button
          className="product-card__button product-card__button--selected"
          onClick={() => {
            removeFromCart(item.id);
          }}
        >
          Remove from cart
        </Button>
      ) : (
        <Button
          className="product-card__button"
          onClick={() => {
            addToCart(item);
          }}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
};
