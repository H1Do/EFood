import { FC, useState } from 'react';
import SearchIcon from 'shared/assets/images/icons/search-icon.svg?react';
import CloseIcon from 'shared/assets/images/icons/close-icon.svg?react';

import { Button } from 'shared/ui/button';
import './nav-menu.scss';

interface NavMenuProps {
  className?: string;
  setIsSearchOpened: (arg: boolean) => void;
  SearchBox: FC<{ className?: string }>;
  cartModal: React.ReactNode;
}

export const NavMenu: FC<NavMenuProps> = ({
  className = '',
  setIsSearchOpened,
  SearchBox,
  cartModal,
}) => {
  const [isSearchBoxOpened, setIsSearchBoxOpened] = useState(false);

  return (
    <nav className={`nav-menu ${className}`}>
      <ul className="nav-menu__list">
        {isSearchBoxOpened ? (
          <>
            <SearchBox className="nav-menu__search-box" />
            <Button
              className="nav-menu__search-button"
              onClick={() => {
                setIsSearchBoxOpened(false);
                setIsSearchOpened(false);
              }}
              isSvg={true}
            >
              <CloseIcon />
            </Button>
          </>
        ) : (
          <>
            <li className="nav-menu__item">
              <a href="./" className="nav-menu__link is-selected">
                Home
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="./" className="nav-menu__link">
                Service
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="./" className="nav-menu__link">
                Top cities
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="./" className="nav-menu__link">
                Contract
              </a>
            </li>
            <li className="nav-menu__item">
              <Button
                className="nav-menu__button"
                isSvg={true}
                onClick={() => {
                  setIsSearchBoxOpened(true);
                }}
              >
                <SearchIcon />
                <span className="visually-hidden">Open the search box</span>
              </Button>
            </li>
          </>
        )}
        <li className="nav-menu__item">{cartModal}</li>
        <li className="nav-menu__item">
          <Button isLink={true} href="./" className="nav-menu__button">
            Sign Up
          </Button>
        </li>
      </ul>
    </nav>
  );
};
