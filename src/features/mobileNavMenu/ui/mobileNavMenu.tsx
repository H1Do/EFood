import { FC, ReactNode, useState } from 'react';
import SearchIcon from 'shared/assets/images/icons/search-icon.svg?react';
import CloseIcon from 'shared/assets/images/icons/close-icon.svg?react';

import { BurgerButton } from 'shared/ui/burgerButton';
import { MobileOverlay } from 'shared/ui/mobileOverlay';
import { Button } from 'shared/ui/button';
import './mobileNavMenu.scss';

interface MobileNavMenuProps {
  className?: string;
  setIsSearchOpened: (arg: boolean) => void;
  SearchBox: React.FC<{ className?: string }>;
  SearchList: ReactNode;
  CartList: ReactNode;
  CartButton: React.FC<{
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }>;
}

export const MobileNavMenu: FC<MobileNavMenuProps> = ({
  className,
  setIsSearchOpened,
  SearchBox,
  SearchList,
  CartList,
  CartButton,
}) => {
  const [mobileOverlay, setMobileOverlay] = useState<HTMLDialogElement | null>(
    null,
  );

  const [isSearchBoxOpened, setIsSearchBoxOpened] = useState(false);
  const [isCartOpened, setIsCartOpened] = useState(false);

  return (
    <div className={className}>
      <BurgerButton
        className="header__burger-button visible-mobile"
        onClick={() => {
          mobileOverlay!.showModal();
        }}
      >
        <span className="visually-hidden">Open navigation menu</span>
      </BurgerButton>
      <MobileOverlay
        setDialog={setMobileOverlay}
        onClose={() => {
          setIsSearchBoxOpened(false);
          setIsCartOpened(false);
        }}
        className="mobile-nav-menu"
      >
        <div className="mobile-nav-menu__body">
          <ul className="mobile-nav-menu__list">
            {isCartOpened ? (
              <li className="mobile-nav-menu__item mobile-nav-menu__item--thick mobile-nav-menu__item--top">
                <div className="mobile-nav-menu__cart">
                  <div className="mobile-nav-menu__cart-header">
                    <h2 className="mobile-nav-menu__cart-title">Cart</h2>
                    <Button
                      className="mobile-nav-menu__cart-close-button"
                      onClick={() => {
                        setIsCartOpened(false);
                      }}
                      isSvg={true}
                    >
                      <CloseIcon />
                    </Button>
                  </div>
                  <div className="mobile-nav-menu__cart-content">
                    {CartList}
                  </div>
                </div>
              </li>
            ) : isSearchBoxOpened ? (
              <>
                <li className="mobile-nav-menu__item mobile-nav-menu__item--thick">
                  <div className="mobile-nav-menu__search-box-wrapper">
                    <SearchBox className="mobile-nav-menu__search-box" />
                    <Button
                      className="mobile-nav-menu__search-box-close-button"
                      onClick={() => {
                        setIsSearchBoxOpened(false);
                        setIsSearchOpened(false);
                      }}
                      isSvg={true}
                    >
                      <CloseIcon />
                    </Button>
                  </div>
                </li>
                <li className="mobile-nav-menu__item mobile-nav-menu__item--top">
                  {SearchList}
                </li>
              </>
            ) : (
              <>
                <li className="mobile-nav-menu__item">
                  <a href="./" className="mobile-nav-menu__link is-selected">
                    Home
                  </a>
                </li>
                <li className="mobile-nav-menu__item">
                  <a href="./" className="mobile-nav-menu__link">
                    Service
                  </a>
                </li>
                <li className="mobile-nav-menu__item">
                  <a href="./" className="mobile-nav-menu__link">
                    Top cities
                  </a>
                </li>
                <li className="mobile-nav-menu__item">
                  <a href="./" className="mobile-nav-menu__link">
                    Contract
                  </a>
                </li>
                <li className="mobile-nav-menu__item">
                  <Button
                    className="header__menu-button"
                    isSvg={true}
                    onClick={() => {
                      setIsSearchBoxOpened(true);
                    }}
                  >
                    <SearchIcon />
                    <span className="visually-hidden">Open the search box</span>
                  </Button>
                </li>
                <li className="mobile-nav-menu__item">
                  <CartButton
                    onClick={() => {
                      setIsCartOpened(true);
                    }}
                  />
                </li>
                <li className="mobile-nav-menu__item">
                  <Button
                    isLink={true}
                    href="./"
                    className="mobile-nav-menu__button"
                  >
                    Sign Up
                  </Button>
                </li>
              </>
            )}
            {}
          </ul>
        </div>
      </MobileOverlay>
    </div>
  );
};
