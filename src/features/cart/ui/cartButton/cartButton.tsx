import { FC } from 'react';
import CartIcon from 'shared/assets/images/icons/cart-icon.svg?react';

import { Button } from 'shared/ui/button';

import { useTypedSelector } from '../../model/useTypedSelector';
import './cartButton.scss';

interface CartButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CartButton: FC<CartButtonProps> = ({
  className = '',
  onClick,
}) => {
  const { cart } = useTypedSelector((state) => state.cart);

  return (
    <Button
      className={`cart-button ${cart.length ? 'cart-button--counter' : ''} ${className}`}
      isSvg={true}
      data-count={cart.length}
      onClick={onClick}
    >
      <CartIcon />
      <span className="visually-hidden">Open the shopping cart</span>
    </Button>
  );
};
