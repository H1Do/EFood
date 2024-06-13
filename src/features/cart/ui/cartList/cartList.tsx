import { FC } from 'react';

import { Button } from 'shared/ui/button';

import { useTypedSelector } from '../../model/useTypedSelector';
import { useAction } from '../../model/useAction';

import './cartList.scss';
import { CartItem } from './../cartItem/cartItem';

interface CartListProps {
  className?: string;
}

export const CartList: FC<CartListProps> = ({ className = '' }) => {
  const { cart } = useTypedSelector((state) => state.cart);
  const { removeProductAction } = useAction();

  return (
    <div className="cart-list">
      <ul className={`cart-list__list ${className}`}>
        {cart.length
          ? cart.map((item) => (
              <li className="cart-list__item" key={item.id}>
                <CartItem item={item} removeFromCart={removeProductAction} />
              </li>
            ))
          : 'Cart is empty'}
      </ul>
      <div className="cart-list__footer">
        <span className="cart-list__total">{`Total: ${cart.reduce((acc, product) => acc + product.price, 0).toFixed(2)}$`}</span>
        <Button className="cart-list__button">Go to order</Button>
      </div>
    </div>
  );
};
