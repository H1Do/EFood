import { Product } from 'shared/types/product';
import { Button } from 'shared/ui/button';

interface StarSvgProps {
  isRight?: boolean;
}

const EmptyStarSvg: React.FC<StarSvgProps> = ({ isRight }) => (
  <svg
    width="10.000000"
    height="15.000000"
    viewBox="0 0 7.9 15"
    fill="none"
    style={{
      color: '#FAC412',
      scale: `${isRight ? '-1 1' : 'none'}`,
      marginRight: `${isRight ? '6px' : '0'}`,
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs />
    <path
      id="Fill 4"
      d="M9.24 12.73C9.06 12.74 8.88 12.78 8.72 12.86L4.56 14.77C4.05 14.98 3.44 14.82 3.15 14.39C3.05 14.21 3.01 14.01 3.05 13.82L3.88 9.76C3.93 9.46 3.82 9.16 3.58 8.95L0.18 6.06C-0.23 5.72 -0.23 5.15 0.16 4.79C0.17 4.79 0.17 4.78 0.18 4.78C0.34 4.64 0.55 4.55 0.77 4.52L5.46 3.91C5.8 3.87 6.1 3.69 6.25 3.42L8.29 -0.32C8.48 -0.63 8.85 -0.81 9.24 -0.79C9.24 -0.54 9.24 12.57 9.24 12.73Z"
      fill="#FAC412"
      fillOpacity="0.4"
      fillRule="nonzero"
    />
  </svg>
);

const FilledStarSvg: React.FC<StarSvgProps> = ({ isRight }) => (
  <svg
    width="10.000000"
    height="15.000000"
    viewBox="0 0 7.9 15"
    fill="none"
    style={{
      color: '#FAC412',
      scale: `${isRight ? '-1 1' : 'none'}`,
      marginInline: `${isRight ? '0 6px' : '0'}`,
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs />
    <path
      id="Fill 4"
      d="M9.24 12.73C9.06 12.74 8.88 12.78 8.72 12.86L4.56 14.77C4.05 14.98 3.44 14.82 3.15 14.39C3.05 14.21 3.01 14.01 3.05 13.82L3.88 9.76C3.93 9.46 3.82 9.16 3.58 8.95L0.18 6.06C-0.23 5.72 -0.23 5.15 0.16 4.79C0.17 4.79 0.17 4.78 0.18 4.78C0.34 4.64 0.55 4.55 0.77 4.52L5.46 3.91C5.8 3.87 6.1 3.69 6.25 3.42L8.29 -0.32C8.48 -0.63 8.85 -0.81 9.24 -0.79C9.24 -0.54 9.24 12.57 9.24 12.73Z"
      fill="#FAC412"
      fillOpacity="1.000000"
      fillRule="nonzero"
    />
  </svg>
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
  item: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div className="product-card">
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
      <div className="product-card__price">${item.price}.00</div>
      <Button className="product-card__button">Add to Cart</Button>
    </div>
  );
};
