import logoSvg from 'shared/assets/images/logo.svg';
import { Button } from './../../../shared/ui/button/button';
import MobileOverlay from './../../../shared/ui/mobileOverlay/mobileOverlay';

export const Header = () => {
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
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  id="Iconly/Light/Search"
                  width="24.000000"
                  height="23.721458"
                  fill="#FFFFFF"
                  fillOpacity="0"
                />
                <ellipse
                  id="Ellipse_739"
                  cx="11.766632"
                  cy="11.630127"
                  rx="8.988559"
                  ry="8.884238"
                  stroke="#363853"
                  strokeOpacity="1.000000"
                  strokeWidth="1.500000"
                  strokeLinejoin="round"
                />
                <path
                  id="Line_181"
                  d="M18.01 18.27L21.54 21.74"
                  stroke="#363853"
                  strokeOpacity="1.000000"
                  strokeWidth="1.500000"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
              <span className="visually-hidden">Open the search box</span>
            </Button>
          </li>
          <li className="header__menu-item">
            <Button
              className="header__menu-button button--counter"
              isSvg={true}
            >
              <svg
                width="20.000000"
                height="19.000000"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Stroke 1"
                  d="M0 0.15L2.08 0.5L3.04 11.84C3.12 12.77 3.9 13.48 4.84 13.48L15.75 13.48C16.64 13.48 17.41 12.83 17.53 11.95L18.48 5.47C18.59 4.74 18.08 4.07 17.35 3.96C17.28 3.96 2.41 3.95 2.41 3.95"
                  stroke="#363853"
                  strokeOpacity="1.000000"
                  strokeWidth="1.500000"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  id="Stroke 3"
                  d="M10.37 7.42L13.14 7.42"
                  stroke="#363853"
                  strokeOpacity="1.000000"
                  strokeWidth="1.500000"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  id="Stroke 5"
                  d="M3.4 16.72C3.7 16.72 3.94 16.96 3.94 17.25C3.94 17.55 3.7 17.79 3.4 17.79C3.1 17.79 2.86 17.55 2.86 17.25C2.86 16.96 3.1 16.72 3.4 16.72Z"
                  fill="#363853"
                  fillOpacity="1.000000"
                  fillRule="evenodd"
                />
                <path
                  id="Stroke 5"
                  d="M3.94 17.25C3.94 17.55 3.7 17.79 3.4 17.79C3.1 17.79 2.86 17.55 2.86 17.25C2.86 16.96 3.1 16.72 3.4 16.72C3.7 16.72 3.94 16.96 3.94 17.25Z"
                  stroke="#363853"
                  strokeOpacity="1.000000"
                  strokeWidth="1.500000"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 7"
                  d="M14.68 16.72C14.98 16.72 15.22 16.96 15.22 17.25C15.22 17.55 14.98 17.79 14.68 17.79C14.38 17.79 14.14 17.55 14.14 17.25C14.14 16.96 14.38 16.72 14.68 16.72Z"
                  fill="#363853"
                  fillOpacity="1.000000"
                  fillRule="evenodd"
                />
                <path
                  id="Stroke 7"
                  d="M15.22 17.25C15.22 17.55 14.98 17.79 14.68 17.79C14.38 17.79 14.14 17.55 14.14 17.25C14.14 16.96 14.38 16.72 14.68 16.72C14.98 16.72 15.22 16.96 15.22 17.25Z"
                  stroke="#363853"
                  strokeOpacity="1.000000"
                  strokeWidth="1.500000"
                  strokeLinejoin="round"
                />
              </svg>
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
      <Button
        className="header__burger-button burger-button visible-mobile"
        isSvg={true}
        onClick={() => {
          mobileOverlay.showModal();
        }}
      >
        <span className="visually-hidden">Open navigation menu</span>
      </Button>
      <MobileOverlay>
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
                <svg
                  width="24.000000"
                  height="24.000000"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    id="Iconly/Light/Search"
                    width="24.000000"
                    height="23.721458"
                    fill="#FFFFFF"
                    fillOpacity="0"
                  />
                  <ellipse
                    id="Ellipse_739"
                    cx="11.766632"
                    cy="11.630127"
                    rx="8.988559"
                    ry="8.884238"
                    stroke="#363853"
                    strokeOpacity="1.000000"
                    strokeWidth="1.500000"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Line_181"
                    d="M18.01 18.27L21.54 21.74"
                    stroke="#363853"
                    strokeOpacity="1.000000"
                    strokeWidth="1.500000"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="visually-hidden">Open the search box</span>
              </Button>
            </li>
            <li className="mobile-overlay__item">
              <Button
                className="header__menu-button button--counter"
                isSvg={true}
              >
                <svg
                  width="20.000000"
                  height="19.000000"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Stroke 1"
                    d="M0 0.15L2.08 0.5L3.04 11.84C3.12 12.77 3.9 13.48 4.84 13.48L15.75 13.48C16.64 13.48 17.41 12.83 17.53 11.95L18.48 5.47C18.59 4.74 18.08 4.07 17.35 3.96C17.28 3.96 2.41 3.95 2.41 3.95"
                    stroke="#363853"
                    strokeOpacity="1.000000"
                    strokeWidth="1.500000"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <path
                    id="Stroke 3"
                    d="M10.37 7.42L13.14 7.42"
                    stroke="#363853"
                    strokeOpacity="1.000000"
                    strokeWidth="1.500000"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <path
                    id="Stroke 5"
                    d="M3.4 16.72C3.7 16.72 3.94 16.96 3.94 17.25C3.94 17.55 3.7 17.79 3.4 17.79C3.1 17.79 2.86 17.55 2.86 17.25C2.86 16.96 3.1 16.72 3.4 16.72Z"
                    fill="#363853"
                    fillOpacity="1.000000"
                    fillRule="evenodd"
                  />
                  <path
                    id="Stroke 5"
                    d="M3.94 17.25C3.94 17.55 3.7 17.79 3.4 17.79C3.1 17.79 2.86 17.55 2.86 17.25C2.86 16.96 3.1 16.72 3.4 16.72C3.7 16.72 3.94 16.96 3.94 17.25Z"
                    stroke="#363853"
                    strokeOpacity="1.000000"
                    strokeWidth="1.500000"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Stroke 7"
                    d="M14.68 16.72C14.98 16.72 15.22 16.96 15.22 17.25C15.22 17.55 14.98 17.79 14.68 17.79C14.38 17.79 14.14 17.55 14.14 17.25C14.14 16.96 14.38 16.72 14.68 16.72Z"
                    fill="#363853"
                    fillOpacity="1.000000"
                    fillRule="evenodd"
                  />
                  <path
                    id="Stroke 7"
                    d="M15.22 17.25C15.22 17.55 14.98 17.79 14.68 17.79C14.38 17.79 14.14 17.55 14.14 17.25C14.14 16.96 14.38 16.72 14.68 16.72C14.98 16.72 15.22 16.96 15.22 17.25Z"
                    stroke="#363853"
                    strokeOpacity="1.000000"
                    strokeWidth="1.500000"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="visually-hidden">Open the shopping cart</span>
              </Button>
            </li>
            <li className="mobile-overlay__item">
              <Button isLink={true} href="./" className="header__menu-button">
                Sign Up
              </Button>
            </li>
          </ul>
        </div>
      </MobileOverlay>
    </header>
  );
};
