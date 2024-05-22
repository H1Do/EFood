import { Button } from 'shared/ui/button';
import { MobileOverlay } from 'shared/ui/mobileOverlay';
import { BurgerButton } from 'shared/ui/burgerButton';
import { useState } from 'react';
import logoSvg from 'shared/assets/images/logo.svg';
import SearchIcon from 'shared/assets/images/icons/search-icon.svg?react';
import CartIcon from 'shared/assets/images/icons/cart-icon.svg?react';
import './header.scss';

export const Header = () => {
  const [mobileOverlay, setMobileOverlay] = useState<HTMLDialogElement | null>(
    null,
  );

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
      <nav className="header__menu hidden-mobile">
        <ul className="header__menu-list">
          <li className="header__menu-item">
            <a href="./" className="header__menu-link is-selected">
              Home
            </a>
          </li>
          <li className="header__menu-item">
            <a href="./" className="header__menu-link">
              Service
            </a>
          </li>
          <li className="header__menu-item">
            <a href="./" className="header__menu-link">
              Top cities
            </a>
          </li>
          <li className="header__menu-item">
            <a href="./" className="header__menu-link">
              Contract
            </a>
          </li>
          <li className="header__menu-item">
            <Button className="header__menu-button" isSvg={true}>
              <SearchIcon />
              <span className="visually-hidden">Open the search box</span>
            </Button>
          </li>
          <li className="header__menu-item">
            <Button
              className="header__menu-button button--counter"
              isSvg={true}
            >
              <CartIcon />
              <span className="visually-hidden">Open the shopping cart</span>
            </Button>
          </li>
          <li className="header__menu-item">
            <Button isLink={true} href="./" className="header__menu-button">
              Sign Up
            </Button>
          </li>
        </ul>
      </nav>
      <BurgerButton
        className="header__burger-button visible-mobile"
        onClick={() => {
          mobileOverlay!.showModal();
        }}
      >
        <span className="visually-hidden">Open navigation menu</span>
      </BurgerButton>
      <MobileOverlay setDialog={setMobileOverlay}>
        <div className="mobile-overlay__body">
          <ul className="mobile-overlay__list">
            <li className="mobile-overlay__item">
              <a href="./" className="mobile-overlay__link is-selected">
                Home
              </a>
            </li>
            <li className="mobile-overlay__item">
              <a href="./" className="mobile-overlay__link">
                Service
              </a>
            </li>
            <li className="mobile-overlay__item">
              <a href="./" className="mobile-overlay__link">
                Top cities
              </a>
            </li>
            <li className="mobile-overlay__item">
              <a href="./" className="mobile-overlay__link">
                Contract
              </a>
            </li>
            <li className="mobile-overlay__item">
              <Button className="header__menu-button" isSvg={true}>
                <SearchIcon />
                <span className="visually-hidden">Open the search box</span>
              </Button>
            </li>
            <li className="mobile-overlay__item">
              <Button
                className="header__menu-button button--counter"
                isSvg={true}
              >
                <CartIcon />
                <span className="visually-hidden">Open the shopping cart</span>
              </Button>
            </li>
            <li className="mobile-overlay__item">
              <Button
                isLink={true}
                href="./"
                className="mobile-overlay__button"
              >
                Sign Up
              </Button>
            </li>
          </ul>
        </div>
      </MobileOverlay>
    </header>
  );
};
