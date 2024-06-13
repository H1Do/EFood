import { FC } from 'react';

import { Product } from 'shared/types/product';
import { Button } from 'shared/ui/button';
import './cartItem.scss';

interface CartItemProps {
  item: Product;
  removeFromCart: (id: number) => void;
}

export const CartItem: FC<CartItemProps> = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__title">{item.title}</div>
      <div className="cart-item__price">{`${item.price.toFixed(2)}$`}</div>
      <Button
        className="cart-item__button"
        onClick={() => {
          removeFromCart(item.id);
        }}
      >
        Remove
      </Button>
    </div>
  );
};
