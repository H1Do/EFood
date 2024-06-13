import { FC } from 'react';

import logoSvg from 'shared/assets/images/logo.svg';
import { NavMenu } from 'features/navMenu';
import { MobileNavMenu } from 'features/mobileNavMenu';
import { useSearchAction, SearchBox, SearchList } from 'features/search';
import {
  CartButton,
  CartList,
  useCartAction,
  useCartSelector,
} from 'features/cart';
import './header.scss';
import { Modal } from 'shared/ui/modal';

export const Header = () => {
  const { setIsOpened } = useSearchAction();
  const { addProductAction, removeProductAction } = useCartAction();
  const { cart } = useCartSelector((state) => state.cart);

  return (
    <header className="container header">
      <a href="./" className="header__logo">
        <img
          src={logoSvg}
          width={106}
          height={38}
          loading="lazy"
          alt=""
          className="header__logo"
        />
      </a>
      <NavMenu
        className="hidden-mobile"
        setIsSearchOpened={setIsOpened}
        SearchBox={SearchBox}
        cartModal={
          <Modal title="Cart" content={<CartList />}>
            <CartButton />
          </Modal>
        }
      />
      <MobileNavMenu
        className="visible-mobile"
        setIsSearchOpened={setIsOpened}
        SearchBox={SearchBox}
        SearchList={
          <SearchList
            mobileColumns={true}
            cart={cart}
            addToCart={addProductAction}
            removeFromCart={removeProductAction}
          />
        }
        CartList={<CartList />}
        CartButton={
          CartButton as FC<{
            onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
          }>
        }
      />
    </header>
  );
};
