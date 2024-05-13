import logoSvg from './images/logo.svg';
import introBg from './images/intro-bg.png';
import deliveryBg from './images/delivery-bg.png';
import advantageImg1 from './images/advantages/1.svg';
import advantageImg2 from './images/advantages/2.svg';
import advantageImg3 from './images/advantages/3.svg';
import restaurantImg1 from './images/restaurants/1.png';
import restaurantImg2 from './images/restaurants/2.png';
import restaurantImg3 from './images/restaurants/3.png';
import restaurantImg4 from './images/restaurants/4.png';
import restaurantImg5 from './images/restaurants/5.png';
import restaurantImg6 from './images/restaurants/6.png';
import clockIconSvg from './images/icons/clock-icon.svg';
import rightArrowSvg from './images/icons/right-arrow-icon.svg';
import appStoreSvg from './images/app-store.svg';
import googlePlaySvg from './images/google-play.svg';
import mobileAppImg1 from './images/mobile-app/1.png';
import mobileAppImg2 from './images/mobile-app/2.png';
import mobileAppImg3 from './images/mobile-app/3.png';
import reviewBg from './images/review-bg.png';

import Slider from './components/Slider';
import { useMemo } from 'react';
import { Product } from './models/Product';

function App() {
  const slides = useMemo<Product[]>(
    () => [
      {
        id: 1,
        title: 'Cheesburger With Salad',
        price: 18,
        rating: 10,
        image: '/src/images/products/1.png',
      },
      {
        id: 2,
        title: 'Cheesburger With Salad',
        price: 15,
        rating: 9,
        image: '/src/images/products/2.png',
      },
      {
        id: 3,
        title: 'Cheesburger With Salad',
        price: 16,
        rating: 10,
        image: '/src/images/products/3.png',
      },
      {
        id: 4,
        title: 'Cheesburger With Salad',
        price: 14,
        rating: 10,
        image: '/src/images/products/4.png',
      },
      {
        id: 5,
        title: 'Cheesburger With Salad',
        price: 15,
        rating: 10,
        image: '/src/images/products/5.png',
      },
      {
        id: 6,
        title: 'Cheesburger With Salad',
        price: 18,
        rating: 10,
        image: '/src/images/products/1.png',
      },
      {
        id: 7,
        title: 'Cheesburger With Salad',
        price: 15,
        rating: 9,
        image: '/src/images/products/2.png',
      },
      {
        id: 8,
        title: 'Cheesburger With Salad',
        price: 16,
        rating: 10,
        image: '/src/images/products/3.png',
      },
    ],
    [],
  );

  return (
    <>
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
              <button className="header__menu-button button button--svg">
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
              </button>
            </li>
            <li className="header__menu-item">
              <button className="header__menu-button button button--svg button--counter">
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
              </button>
            </li>
            <li className="header__menu-item">
              <a href="./" className="header__menu-button button">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="header__burger-button burger-button visible-mobile"
          type="button"
          onClick={() => {
            mobileOverlay.showModal();
          }}
        >
          <span className="visually-hidden">Open navigation menu</span>
        </button>
        <dialog className="mobile-overlay visible-mobile" id="mobileOverlay">
          <form
            method="dialog"
            className="mobile-overlay__close-button-wrapper"
          >
            <button
              type="submit"
              className="mobile-overlay__close-button cross-button"
            >
              <span className="visually-hidden">Close navigation menu</span>
            </button>
          </form>
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
                <button className="mobile-overlay__button button button--svg">
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
                </button>
              </li>
              <li className="mobile-overlay__item">
                <button className="mobile-overlay__button button button--svg button--counter">
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
                  <span className="visually-hidden">
                    Open the shopping cart
                  </span>
                </button>
              </li>
              <li className="mobile-overlay__item">
                <a href="./" className="header__menu-button button">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </dialog>
      </header>
      <main className="content">
        <section className="section container">
          <div className="section__body">
            <div className="intro">
              <div className="intro__body">
                <h1 className="intro__title">
                  Super Fast{' '}
                  <span className="marked">
                    Food <br /> Delivery
                  </span>{' '}
                  Service
                </h1>
                <div className="intro__description">
                  <p>
                    We provide super fast-delivery service. Let’s use our
                    services right now and get discounts of up to 50%
                  </p>
                  <p>
                    We provide super fast-delivery service. Let’s use our
                    services right now and get discounts of up to 50%
                  </p>
                </div>
                <div className="intro__links">
                  <a href="./" className="intro__button button">
                    Explore Food
                  </a>
                  <a href="./" className="intro__link">
                    Download App
                  </a>
                </div>
              </div>
              <div className="intro__illustration hidden-mobile">
                <img
                  src={introBg}
                  loading="lazy"
                  alt=""
                  width={771}
                  height={681}
                  className="intro__illustration-image"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section container">
          <h2 className="section__title">
            Our Popular <span className="marked">Category</span>
          </h2>
          <div className="section__body categories">
            <div className="categories__menu">
              <ul className="categories__menu-list">
                <li className="categories__menu-item">
                  <button
                    className="categories__menu-button button is-selected"
                    type="button"
                  >
                    <svg
                      width="44.000000"
                      height="39.000000"
                      viewBox="0 0 44 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Vector"
                        d="M44 19.33C44 17.64 42.91 16.2 41.39 15.68C41.16 10.44 39.2 6.41 35.57 3.71C32.25 1.25 27.68 0 22 0C16.31 0 11.74 1.25 8.42 3.71C4.79 6.41 2.83 10.44 2.6 15.68C1.08 16.2 0 17.64 0 19.33C0 20.32 0.37 21.22 0.98 21.91C0.37 22.59 0 23.5 0 24.49C0 26.19 1.1 27.63 2.62 28.15C3.18 34.04 8.18 38.67 14.26 38.67L29.73 38.67C35.81 38.67 40.81 34.04 41.37 28.15C42.89 27.63 44 26.19 44 24.49C44 23.5 43.62 22.59 43.01 21.91C43.62 21.22 44 20.32 44 19.33ZM22 2.57C29.39 2.57 38.15 4.85 38.8 15.46L5.19 15.46C5.84 4.85 14.6 2.57 22 2.57ZM3.86 18.04L40.13 18.04C40.84 18.04 41.42 18.62 41.42 19.33C41.42 20.04 40.84 20.62 40.13 20.62L3.86 20.62C3.15 20.62 2.57 20.04 2.57 19.33C2.57 18.62 3.15 18.04 3.86 18.04ZM29.73 36.09L14.26 36.09C9.68 36.09 5.88 32.72 5.24 28.35L6.44 28.35C7.3 28.35 7.57 28.65 8.12 29.23C8.78 29.95 9.7 30.93 11.68 30.93C13.68 30.93 14.57 29.94 15.22 29.21C15.73 28.64 15.99 28.35 16.84 28.35C17.69 28.35 17.94 28.64 18.46 29.21C19.11 29.94 20 30.93 22 30.93C23.99 30.93 24.88 29.94 25.53 29.21C26.05 28.64 26.3 28.35 27.15 28.35C28 28.35 28.26 28.64 28.77 29.21C29.42 29.94 30.31 30.93 32.31 30.93C34.31 30.93 35.2 29.94 35.85 29.21C36.36 28.64 36.62 28.35 37.46 28.35L38.75 28.35C38.11 32.72 34.31 36.09 29.73 36.09ZM40.13 25.78L37.46 25.78C35.46 25.78 34.57 26.77 33.93 27.49C33.41 28.07 33.16 28.35 32.31 28.35C31.46 28.35 31.2 28.07 30.69 27.49C30.04 26.77 29.15 25.78 27.15 25.78C25.15 25.78 24.26 26.77 23.61 27.49C23.1 28.07 22.84 28.35 22 28.35C21.15 28.35 20.89 28.07 20.38 27.49C19.73 26.77 18.84 25.78 16.84 25.78C14.84 25.78 13.95 26.77 13.3 27.49C12.79 28.07 12.53 28.35 11.68 28.35C10.82 28.35 10.55 28.06 10.01 27.48C9.34 26.76 8.43 25.78 6.44 25.78L3.86 25.78C3.15 25.78 2.57 25.2 2.57 24.49C2.57 23.78 3.15 23.2 3.86 23.2L40.13 23.2C40.84 23.2 41.42 23.78 41.42 24.49C41.42 25.2 40.84 25.78 40.13 25.78Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M15.55 11.6C15.55 12.31 14.97 12.89 14.26 12.89C13.55 12.89 12.97 12.31 12.97 11.6C12.97 10.88 13.55 10.31 14.26 10.31C14.97 10.31 15.55 10.88 15.55 11.6Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                      <path
                        id="Vector"
                        d="M31.02 11.6C31.02 12.31 30.44 12.89 29.73 12.89C29.02 12.89 28.44 12.31 28.44 11.6C28.44 10.88 29.02 10.31 29.73 10.31C30.44 10.31 31.02 10.88 31.02 11.6Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                      <path
                        id="Vector"
                        d="M25.86 9.02C25.86 9.73 25.29 10.31 24.57 10.31C23.86 10.31 23.28 9.73 23.28 9.02C23.28 8.31 23.86 7.73 24.57 7.73C25.29 7.73 25.86 8.31 25.86 9.02Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                      <path
                        id="Vector"
                        d="M20.71 6.44C20.71 7.15 20.13 7.73 19.42 7.73C18.7 7.73 18.13 7.15 18.13 6.44C18.13 5.73 18.7 5.15 19.42 5.15C20.13 5.15 20.71 5.73 20.71 6.44Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                    </svg>
                    Burger
                  </button>
                </li>
                <li className="categories__menu-item">
                  <button
                    className="categories__menu-button button"
                    type="button"
                  >
                    <svg
                      width="62.000000"
                      height="63.000000"
                      viewBox="0 0 62 63"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <clipPath id="clip0_172">
                          <rect
                            width="44.000000"
                            height="44.000000"
                            transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 30.1128 62.2253)"
                            fill="white"
                            fillOpacity="0"
                          />
                        </clipPath>
                      </defs>
                      <rect
                        width="44.000000"
                        height="44.000000"
                        transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 30.1128 62.2253)"
                        fill="#FFFFFF"
                        fillOpacity="0"
                      />
                      <g clipPath="url(#clip0_172)">
                        <path
                          d="M60.87 31.11C60.86 31.44 60.67 31.74 60.37 31.88L26.13 48.12C25.79 49.54 24.81 50.77 23.37 51.37C20.97 52.36 18.22 51.22 17.22 48.83C14.88 43.18 13.7 37.22 13.7 31.11C13.7 24.99 14.88 19.03 17.22 13.39C17.47 12.8 17.81 12.29 18.24 11.87C19.54 10.56 21.56 10.09 23.37 10.84C24.58 11.35 25.47 12.31 25.93 13.44L60.38 30.34C60.68 30.48 60.87 30.78 60.87 31.11ZM30.03 44.37L33.66 42.65C33.64 42 33.33 41.39 32.8 40.99C32.34 40.63 31.76 40.48 31.18 40.55C30.6 40.63 30.09 40.93 29.73 41.39C29.37 41.85 29.22 42.43 29.3 43.01C29.37 43.54 29.63 44.02 30.03 44.37ZM22.71 12.43C21.19 11.8 19.44 12.52 18.81 14.04C14.25 25.05 14.25 37.17 18.81 48.17C19.12 48.91 19.69 49.48 20.43 49.78C21.16 50.09 21.97 50.09 22.71 49.78C23.44 49.48 24.02 48.91 24.32 48.17C24.63 47.43 24.63 46.62 24.32 45.89C22.37 41.18 21.38 36.21 21.38 31.11C21.38 26.01 22.37 21.04 24.32 16.33C24.95 14.81 24.23 13.06 22.71 12.43ZM46.53 25.46C46.48 25.51 46.43 25.57 46.38 25.64C46.02 26.1 45.87 26.67 45.95 27.25C46.02 27.83 46.32 28.35 46.78 28.71C47.74 29.44 49.12 29.26 49.86 28.3C50.08 28.01 50.23 27.66 50.28 27.3L46.53 25.46ZM51.87 28.07C51.73 28.53 51.51 28.96 51.22 29.35C49.91 31.06 47.45 31.38 45.74 30.07C44.91 29.43 44.38 28.51 44.24 27.48C44.11 26.48 44.36 25.49 44.95 24.68L40.21 22.36L39.89 24.81C39.82 25.28 39.39 25.61 38.92 25.55C38.45 25.49 38.12 25.06 38.18 24.59L38.58 21.56L26.25 15.52C26.22 16.01 26.11 16.5 25.91 16.98C22.14 26.09 22.14 36.12 25.91 45.23C26.04 45.55 26.13 45.87 26.19 46.19L28.4 45.15C27.97 44.6 27.69 43.94 27.59 43.23C27.46 42.2 27.73 41.17 28.37 40.34C28.47 40.21 28.59 40.08 28.71 39.95C29.31 39.35 30.1 38.96 30.96 38.85C31.99 38.71 33.02 38.99 33.85 39.62C34.59 40.19 35.09 41 35.28 41.88L45.53 37.02L45.13 36.04C44.99 35.71 45.07 35.34 45.31 35.11C45.39 35.03 45.48 34.97 45.59 34.92C46.03 34.74 46.53 34.95 46.71 35.39L47.09 36.28L58.03 31.09L51.87 28.07Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                        <path
                          d="M20.37 39.36C20.37 39.36 20.37 39.37 20.37 39.38C20.47 39.84 20.16 40.29 19.7 40.39C19.23 40.48 18.78 40.18 18.69 39.72C18.63 39.42 18.72 39.13 18.92 38.93C19.03 38.82 19.18 38.73 19.35 38.7C19.81 38.6 20.27 38.89 20.37 39.36Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                        <path
                          d="M20.95 41.79C21.4 43.42 21.95 45.04 22.6 46.6C22.78 47.04 22.57 47.54 22.14 47.72C21.7 47.91 21.2 47.7 21.01 47.26C20.34 45.63 19.76 43.94 19.3 42.24C19.21 41.93 19.31 41.62 19.52 41.41C19.62 41.31 19.75 41.23 19.9 41.19C20.36 41.06 20.83 41.33 20.95 41.79Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                        <path
                          d="M41.35 35.43C41.24 35.56 41.13 35.69 41.01 35.81C39.63 37.2 37.42 37.34 35.87 36.15C34.16 34.84 33.83 32.38 35.14 30.67C35.25 30.53 35.36 30.4 35.48 30.28C36.86 28.9 39.07 28.76 40.62 29.95C42.33 31.26 42.66 33.72 41.35 35.43ZM39.58 31.31C38.71 30.64 37.47 30.72 36.7 31.5C36.63 31.56 36.57 31.64 36.51 31.71C35.77 32.67 35.95 34.05 36.91 34.79C37.78 35.45 39.02 35.37 39.79 34.6C39.86 34.53 39.92 34.46 39.98 34.38C40.72 33.42 40.54 32.04 39.58 31.31Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                        <path
                          d="M33.63 28.03C33.53 28.16 33.41 28.29 33.29 28.41C31.91 29.79 29.7 29.94 28.15 28.75C27.32 28.11 26.79 27.19 26.65 26.16C26.52 25.12 26.79 24.1 27.43 23.27C27.53 23.13 27.65 23 27.77 22.88C29.15 21.5 31.36 21.36 32.91 22.55C34.62 23.86 34.94 26.32 33.63 28.03ZM31.86 23.91C30.99 23.24 29.75 23.32 28.98 24.1C28.91 24.16 28.85 24.24 28.79 24.31C28.43 24.78 28.28 25.35 28.36 25.93C28.43 26.51 28.73 27.03 29.19 27.38C30.06 28.05 31.3 27.97 32.07 27.2C32.14 27.13 32.21 27.06 32.27 26.98C33 26.02 32.82 24.64 31.86 23.91Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                        <path
                          d="M32.14 34.55L30.52 36.67C30.23 37.04 29.69 37.11 29.31 36.82C28.94 36.54 28.86 36 29.15 35.62L30.78 33.51C30.8 33.48 30.82 33.45 30.85 33.42C31.15 33.12 31.63 33.08 31.98 33.35C32.36 33.64 32.43 34.18 32.14 34.55Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                        <path
                          d="M26.71 31.01L27.8 32.43C28.08 32.81 28.01 33.35 27.64 33.64C27.26 33.93 26.72 33.86 26.43 33.48L25.34 32.06C25.08 31.71 25.12 31.23 25.42 30.93C25.44 30.9 25.47 30.88 25.5 30.86C25.88 30.57 26.42 30.64 26.71 31.01Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                    tPizza
                  </button>
                </li>
                <li className="categories__menu-item">
                  <button
                    className="categories__menu-button button"
                    type="button"
                  >
                    <svg
                      width="45.000000"
                      height="44.000000"
                      viewBox="0 0 45 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Vector"
                        d="M41.79 6.59L40.33 6.59L40.33 5.13C40.33 3.91 39.34 2.93 38.13 2.93L36.38 2.93L35.32 0.81C35.07 0.31 34.56 -0.01 34.01 -0.01L32.99 -0.01C32.18 -0.01 31.53 0.65 31.53 1.46L31.53 2.93L23.46 2.93C22.25 2.93 21.26 3.91 21.26 5.13L21.26 6.59L19.79 6.59C18.58 6.59 17.59 7.58 17.59 8.79L17.59 10.26C17.59 11.07 18.25 11.73 19.06 11.73L19.14 11.73L20 19.31L16.46 18.47C16.29 18.2 16.1 17.93 15.89 17.66L14.64 12.3C14.56 11.96 14.27 11.73 13.93 11.73L9.71 11.73C7.73 9.98 5.38 9.18 3.6 9.71L2.53 8.53C2.12 8.09 1.48 7.94 0.92 8.17C0.36 8.38 -0.01 8.92 -5.35e-5 9.52L-5.35e-5 41.81C0 43.02 0.97 43.99 2.18 43.99L38.13 43.99C38.5 43.99 38.81 43.71 38.86 43.34L42.45 11.73L42.53 11.73C43.34 11.73 44 11.07 44 10.26L44 8.79C43.99 7.58 43.01 6.59 41.79 6.59ZM32.99 1.46L34.01 1.46L34.74 2.93L32.99 2.93L32.99 1.46ZM22.73 5.13C22.73 4.72 23.06 4.39 23.46 4.39L38.13 4.39C38.53 4.39 38.86 4.72 38.86 5.13L38.86 6.59L22.73 6.59L22.73 5.13ZM20.67 20.97L20.72 20.98L21.31 21.12L21.71 25.28C20.56 24.46 19.18 24.03 17.77 24.04C18.04 22.74 17.9 21.4 17.36 20.19L20.67 20.97ZM22.11 27.45L22.12 27.46C22.38 27.71 22.64 27.97 22.87 28.24C23.75 29.22 24.39 30.37 24.75 31.63C24.87 32.07 24.94 32.52 24.94 32.97L18.09 25.5C19.61 25.67 21.03 26.36 22.11 27.45ZM14.38 18.13L14.38 18.13C15.96 19.95 16.7 22.14 16.35 23.6L8.89 15.47C10.39 15.13 12.68 16.19 14.38 18.13ZM13.34 13.2L13.93 15.69C13.34 15.23 12.7 14.84 12.02 14.54C11.74 14.07 11.43 13.62 11.09 13.2L13.34 13.2ZM9.66 13.74L9.66 13.74C9.72 13.81 9.77 13.89 9.83 13.96C9.14 13.9 8.45 14.01 7.82 14.3L4.8 11.01C6.28 11.03 8.2 12.07 9.66 13.74ZM30.73 42.1C30.62 42.36 30.36 42.53 30.08 42.53L23.46 42.53L2.18 42.53C1.78 42.53 1.46 42.21 1.46 41.81L1.45 9.53L16.17 25.58L16.17 25.58L24.81 35L24.82 35.02L29.56 40.19C29.58 40.21 29.6 40.23 29.62 40.25L30.6 41.32C30.79 41.53 30.85 41.84 30.73 42.1ZM26.19 34.34C26.33 33.9 26.4 33.45 26.39 32.99C26.78 33.31 27.14 33.67 27.47 34.05C27.88 34.52 28.24 35.02 28.55 35.56C28.98 36.28 29.29 37.07 29.45 37.89L26.19 34.34ZM37.47 42.53L32.13 42.53C32.41 41.77 32.23 40.92 31.68 40.33L30.94 39.52C31.09 38.29 30.89 37.05 30.37 35.93L38.22 35.93L37.47 42.53ZM38.39 34.46L29.59 34.46C29.29 33.98 28.95 33.52 28.58 33.09C27.86 32.25 27.01 31.53 26.07 30.95C25.64 29.59 24.93 28.34 23.98 27.27C23.76 27.03 23.54 26.79 23.31 26.57L22.73 20.46C22.7 20.15 22.47 19.89 22.17 19.81L21.52 19.66L21.36 18.33L40.22 18.33L38.39 34.46ZM40.39 16.86L21.2 16.86L20.62 11.73L40.97 11.73L40.39 16.86ZM42.53 10.26L19.06 10.26L19.06 8.79C19.06 8.39 19.39 8.06 19.79 8.06L41.79 8.06C42.2 8.06 42.53 8.39 42.53 8.79L42.53 10.26Z"
                        fill="#363853"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M31.1 32.26C31.14 32.26 31.18 32.26 31.22 32.25C31.23 32.25 31.24 32.26 31.25 32.26C31.29 32.26 31.33 32.25 31.36 32.25C32.51 32.17 33.57 31.6 34.26 30.68C35.18 29.38 35.45 27.73 34.97 26.2C34.87 25.82 34.78 25.45 34.69 25.09C34.12 22.8 33.57 20.64 31.25 20.54C31.23 20.54 31.21 20.53 31.19 20.53C31.16 20.53 31.13 20.53 31.1 20.53C28.5 20.53 26.39 23.16 26.39 26.4C26.39 29.63 28.5 32.26 31.1 32.26ZM31.66 22.11C32.42 22.4 32.76 23.4 33.27 25.45C33.36 25.81 33.45 26.2 33.56 26.59C33.91 27.67 33.74 28.85 33.1 29.79C32.86 30.09 32.56 30.34 32.22 30.52C32.2 29.26 31.95 28.01 31.49 26.84C31.41 26.61 31.34 26.39 31.28 26.18C30.85 24.79 31.35 22.99 31.66 22.11ZM30.09 22.22C29.61 23.63 29.54 25.15 29.88 26.61C29.94 26.83 30.02 27.06 30.1 27.29C30.46 28.41 30.9 29.77 30.72 30.76C29.11 30.51 27.86 28.65 27.86 26.4C27.86 24.45 28.8 22.8 30.09 22.22Z"
                        fill="#363853"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M3.88 38.56L3.36 39.08C3.17 39.26 3.09 39.53 3.16 39.79C3.23 40.05 3.43 40.25 3.68 40.31C3.94 40.38 4.21 40.3 4.39 40.11L4.91 39.59C5.19 39.31 5.19 38.85 4.9 38.57C4.62 38.28 4.16 38.28 3.88 38.56Z"
                        fill="#363853"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M10.89 33.62C11.17 33.33 11.17 32.87 10.89 32.58C10.6 32.3 10.14 32.3 9.85 32.58L9.33 33.1C9.15 33.29 9.07 33.56 9.14 33.81C9.21 34.06 9.41 34.26 9.66 34.33C9.91 34.4 10.18 34.33 10.37 34.14L10.89 33.62Z"
                        fill="#363853"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M4.39 31.74L3.88 32.26C3.69 32.45 3.61 32.72 3.68 32.97C3.74 33.23 3.94 33.43 4.2 33.5C4.46 33.57 4.73 33.49 4.91 33.3L5.43 32.78C5.71 32.49 5.71 32.04 5.42 31.75C5.14 31.47 4.68 31.47 4.39 31.74Z"
                        fill="#363853"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M4.39 26.61L3.88 27.13C3.69 27.31 3.61 27.59 3.68 27.84C3.74 28.1 3.94 28.3 4.2 28.37C4.46 28.43 4.73 28.36 4.91 28.17L5.43 27.65C5.71 27.36 5.71 26.9 5.42 26.62C5.14 26.34 4.68 26.33 4.39 26.61Z"
                        fill="#363853"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M11 38.56L10.48 39.08C10.29 39.26 10.21 39.53 10.28 39.79C10.34 40.05 10.54 40.25 10.8 40.31C11.06 40.38 11.33 40.3 11.51 40.11L12.03 39.59C12.31 39.31 12.31 38.85 12.02 38.57C11.74 38.28 11.28 38.28 11 38.56Z"
                        fill="#363853"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M16.34 38.56L15.82 39.08C15.63 39.26 15.56 39.53 15.62 39.79C15.69 40.05 15.89 40.25 16.15 40.31C16.4 40.38 16.68 40.3 16.86 40.11L17.38 39.59C17.66 39.31 17.65 38.85 17.37 38.57C17.09 38.28 16.63 38.28 16.34 38.56Z"
                        fill="#363853"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </svg>
                    sandwich
                  </button>
                </li>
                <li className="categories__menu-item">
                  <button
                    className="categories__menu-button button"
                    type="button"
                  >
                    <svg
                      width="44.000000"
                      height="33.000000"
                      viewBox="0 0 44 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs />
                      <path
                        id="Vector"
                        d="M15.13 7.56L17.25 7.56C17.8 7.56 18.25 8.01 18.25 8.56L18.25 10.03C18.25 10.38 18.54 10.67 18.9 10.67C19.25 10.67 19.54 10.38 19.54 10.03L19.54 8.56C19.54 7.3 18.51 6.27 17.25 6.27L15.13 6.27C14.58 6.27 14.14 5.83 14.14 5.29C14.14 4.75 14.58 4.31 15.13 4.31L19.84 4.31C21.09 4.31 22.11 3.29 22.11 2.03C22.11 0.78 21.09 -0.24 19.84 -0.24L16.07 -0.24C15.71 -0.24 15.42 0.05 15.42 0.41C15.42 0.76 15.71 1.05 16.07 1.05L19.84 1.05C20.38 1.05 20.82 1.49 20.82 2.03C20.82 2.58 20.38 3.02 19.84 3.02L15.13 3.02C13.87 3.02 12.85 4.04 12.85 5.29C12.85 6.54 13.87 7.56 15.13 7.56Z"
                        fill="#363853"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M7.38 11.89L9.49 11.89C10.04 11.89 10.48 12.33 10.48 12.87L10.48 14.33C10.48 14.68 10.77 14.97 11.12 14.97C11.48 14.97 11.77 14.68 11.77 14.33L11.77 12.87C11.77 11.62 10.75 10.6 9.49 10.6L7.38 10.6C6.85 10.6 6.41 10.16 6.41 9.63C6.41 9.09 6.85 8.66 7.38 8.66L9.85 8.66C10.2 8.66 10.49 8.37 10.49 8.01C10.49 7.66 10.2 7.37 9.85 7.37L7.38 7.37C6.14 7.37 5.12 8.38 5.12 9.63C5.12 10.87 6.14 11.89 7.38 11.89Z"
                        fill="#363853"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M26.29 20.16C26.29 20.52 26 20.81 25.65 20.81C25.29 20.81 25 20.52 25 20.16C25 19.81 25.29 19.52 25.65 19.52C26 19.52 26.29 19.81 26.29 20.16Z"
                        fill="#363853"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                      <path
                        id="Vector"
                        d="M29.47 21.62C29.47 21.98 29.18 22.27 28.83 22.27C28.47 22.27 28.18 21.98 28.18 21.62C28.18 21.27 28.47 20.98 28.83 20.98C29.18 20.98 29.47 21.27 29.47 21.62Z"
                        fill="#363853"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                      <path
                        id="Vector"
                        d="M31.36 23.86C31.36 24.21 31.07 24.5 30.72 24.5C30.36 24.5 30.07 24.21 30.07 23.86C30.07 23.5 30.36 23.21 30.72 23.21C31.07 23.21 31.36 23.5 31.36 23.86Z"
                        fill="#363853"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                      <path
                        id="Vector"
                        d="M28.7 18.62C28.7 18.97 28.41 19.26 28.05 19.26C27.7 19.26 27.41 18.97 27.41 18.62C27.41 18.26 27.7 17.97 28.05 17.97C28.41 17.97 28.7 18.26 28.7 18.62Z"
                        fill="#363853"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                      <path
                        id="Vector"
                        d="M26.55 24.29C26.55 24.64 26.26 24.93 25.91 24.93C25.55 24.93 25.26 24.64 25.26 24.29C25.26 23.93 25.55 23.64 25.91 23.64C26.26 23.64 26.55 23.93 26.55 24.29Z"
                        fill="#363853"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                      <path
                        id="Vector"
                        d="M42.91 16.81L41.08 16.81L41.98 14.94C43.13 14.71 44 13.7 44 12.48C44 11.24 43.08 10.21 41.89 10.01C40.58 7.64 38.01 5.87 34.89 5.16L34.89 5.11C34.89 4.75 34.6 4.46 34.25 4.46C33.95 4.46 33.7 4.66 33.63 4.93C33.24 4.88 32.84 4.85 32.43 4.83C32.33 4.61 32.11 4.46 31.85 4.46C31.59 4.46 31.37 4.61 31.27 4.83C30.86 4.85 30.46 4.88 30.07 4.93C29.99 4.66 29.75 4.46 29.45 4.46C29.1 4.46 28.81 4.75 28.81 5.11L28.81 5.16C25.69 5.87 23.12 7.64 21.81 10.01C20.62 10.21 19.7 11.24 19.7 12.48C19.7 12.56 19.71 12.63 19.71 12.7C16.74 12.98 14.06 14.22 12.06 16.08L8.01 16.08C7.73 16.08 7.49 16.21 7.32 16.4L5.43 16.4C5.12 15.62 4.35 15.07 3.47 15.07C2.31 15.07 1.36 16.01 1.36 17.17C1.36 17.27 1.37 17.37 1.39 17.46C0.58 17.76 0 18.53 0 19.44C0 19.85 0.11 20.23 0.32 20.57C0.11 20.9 0 21.29 0 21.69C0 22.85 0.94 23.8 2.1 23.8C2.98 23.8 3.75 23.24 4.06 22.46L5.76 22.46C5.84 22.75 6.05 22.98 6.35 23.08L8.37 23.77C8.35 23.98 8.35 24.19 8.35 24.4C8.35 24.6 8.35 24.79 8.36 24.99C8.05 25.07 7.75 25.2 7.49 25.37C7.06 25.08 6.54 24.91 5.98 24.91C4.48 24.91 3.26 26.13 3.26 27.63C3.26 27.66 3.27 27.68 3.27 27.7L2.51 27.7C2.09 27.7 1.71 27.94 1.53 28.33C1.35 28.71 1.4 29.15 1.67 29.48L3.6 31.83C3.81 32.08 4.12 32.23 4.45 32.23L31.71 32.23C32.06 32.23 32.35 31.94 32.35 31.58C32.35 31.23 32.06 30.94 31.71 30.94L4.54 30.94L2.94 28.99L42.48 28.99L40.88 30.94L34.71 30.94C34.36 30.94 34.07 31.23 34.07 31.58C34.07 31.94 34.36 32.23 34.71 32.23L40.97 32.23C41.3 32.23 41.6 32.08 41.81 31.83L43.75 29.48C44.02 29.15 44.07 28.71 43.89 28.33C43.71 27.94 43.33 27.7 42.9 27.7L42.27 27.7C42.9 26.61 43.14 25.31 42.91 24.03C42.86 23.77 42.65 23.56 42.39 23.51C40.64 23.19 38.85 23.75 37.6 25.01C37.52 25.08 37.45 25.16 37.38 25.24C37.01 25.04 36.59 24.93 36.14 24.92L36.14 23.69L36.83 23.69C37.92 23.69 38.81 22.8 38.81 21.71L38.81 20.85L42.91 20.85C43.51 20.85 44 20.36 44 19.76L44 17.89C44 17.29 43.51 16.81 42.91 16.81ZM6.29 27.7L4.56 27.7C4.55 27.68 4.55 27.66 4.55 27.63C4.55 26.85 5.19 26.2 5.98 26.2C6.21 26.2 6.42 26.26 6.61 26.35C6.4 26.73 6.28 27.17 6.28 27.63C6.28 27.66 6.28 27.68 6.29 27.7ZM38.51 25.92C39.35 25.07 40.52 24.64 41.7 24.72C41.77 25.81 41.41 26.88 40.69 27.7L39.63 27.7L40.51 26.82C40.76 26.57 40.76 26.16 40.51 25.91C40.26 25.66 39.85 25.66 39.6 25.91L38.68 26.82C38.6 26.56 38.48 26.32 38.34 26.11C38.39 26.04 38.45 25.98 38.51 25.92ZM25.5 7.94C26.47 7.28 27.6 6.79 28.81 6.49L28.81 7.15C28.81 7.5 29.1 7.79 29.45 7.79C29.81 7.79 30.1 7.5 30.1 7.15L30.1 6.23C30.46 6.18 30.83 6.14 31.2 6.12L31.2 7.15C31.2 7.5 31.49 7.79 31.85 7.79C32.21 7.79 32.49 7.5 32.49 7.15L32.49 6.12C32.87 6.14 33.24 6.18 33.6 6.23L33.6 7.15C33.6 7.5 33.89 7.79 34.25 7.79C34.6 7.79 34.89 7.5 34.89 7.15L34.89 6.49C36.1 6.79 37.23 7.28 38.2 7.94C39.15 8.57 39.93 9.34 40.49 10.19C40.27 10.29 40.07 10.42 39.89 10.57C39.44 10.2 38.87 9.98 38.28 9.98C37.68 9.98 37.12 10.2 36.67 10.57C36.23 10.2 35.66 9.98 35.06 9.98C34.47 9.98 33.9 10.2 33.46 10.57C33.01 10.2 32.44 9.98 31.85 9.98C31.26 9.98 30.69 10.2 30.24 10.57C29.8 10.2 29.23 9.98 28.64 9.98C28.04 9.98 27.47 10.2 27.03 10.57C26.58 10.2 26.02 9.98 25.42 9.98C24.83 9.98 24.26 10.2 23.81 10.57C23.63 10.42 23.43 10.29 23.21 10.19C23.77 9.34 24.55 8.57 25.5 7.94ZM22.21 11.27C22.64 11.27 23.04 11.5 23.26 11.88C23.37 12.08 23.58 12.2 23.81 12.2C24.04 12.2 24.26 12.08 24.37 11.88C24.59 11.5 24.99 11.27 25.42 11.27C25.85 11.27 26.25 11.5 26.47 11.88C26.59 12.08 26.8 12.2 27.03 12.2C27.26 12.2 27.47 12.08 27.59 11.88C27.8 11.5 28.2 11.27 28.64 11.27C29.07 11.27 29.47 11.5 29.68 11.88C29.8 12.08 30.01 12.2 30.24 12.2C30.47 12.2 30.68 12.08 30.8 11.88C31.02 11.5 31.42 11.27 31.85 11.27C32.28 11.27 32.68 11.5 32.9 11.88C33.01 12.08 33.23 12.2 33.46 12.2C33.69 12.2 33.9 12.08 34.01 11.88C34.23 11.5 34.63 11.27 35.06 11.27C35.49 11.27 35.9 11.5 36.11 11.88C36.23 12.08 36.44 12.2 36.67 12.2C36.9 12.2 37.11 12.08 37.23 11.88C37.45 11.5 37.85 11.27 38.28 11.27C38.71 11.27 39.11 11.5 39.33 11.88C39.44 12.08 39.66 12.2 39.89 12.2C40.11 12.2 40.33 12.08 40.44 11.88C40.66 11.5 41.06 11.27 41.49 11.27C42.16 11.27 42.71 11.81 42.71 12.48C42.71 13.15 42.16 13.7 41.49 13.7C41.06 13.7 40.66 13.47 40.44 13.09C40.33 12.89 40.11 12.77 39.89 12.77C39.66 12.77 39.44 12.89 39.33 13.09C39.11 13.47 38.71 13.7 38.28 13.7C37.85 13.7 37.45 13.47 37.23 13.09C37.11 12.89 36.9 12.77 36.67 12.77C36.44 12.77 36.23 12.89 36.11 13.09C35.9 13.47 35.49 13.7 35.06 13.7C34.63 13.7 34.23 13.47 34.01 13.09C33.9 12.89 33.69 12.77 33.46 12.77C33.23 12.77 33.01 12.89 32.9 13.09C32.68 13.47 32.28 13.7 31.85 13.7C31.42 13.7 31.02 13.47 30.8 13.09C30.68 12.89 30.47 12.77 30.24 12.77C30.01 12.77 29.8 12.89 29.68 13.09C29.47 13.47 29.07 13.7 28.64 13.7C28.2 13.7 27.8 13.47 27.59 13.09C27.47 12.89 27.26 12.77 27.03 12.77C26.8 12.77 26.59 12.89 26.47 13.09C26.34 13.31 26.15 13.48 25.93 13.58C24.42 12.98 22.75 12.64 21 12.64C21 12.59 20.99 12.54 20.99 12.48C20.99 11.81 21.54 11.27 22.21 11.27ZM8.39 17.37L10.86 17.37C10.6 17.69 10.37 18.02 10.15 18.36L8.39 18.36L8.39 17.37ZM5.73 21.17L3.55 21.17C3.22 21.17 2.94 21.43 2.91 21.76C2.87 22.18 2.52 22.51 2.1 22.51C1.65 22.51 1.28 22.14 1.28 21.69C1.28 21.45 1.39 21.22 1.58 21.06C1.73 20.94 1.81 20.76 1.81 20.57C1.81 20.38 1.73 20.19 1.58 20.07C1.39 19.92 1.28 19.69 1.28 19.44C1.28 18.99 1.65 18.63 2.1 18.63C2.52 18.63 2.87 18.96 2.91 19.37C2.94 19.71 3.22 19.96 3.55 19.96L5.73 19.96L5.73 21.17L5.73 21.17ZM5.95 18.68L4.06 18.68C3.82 18.08 3.31 17.61 2.7 17.43C2.67 17.35 2.65 17.26 2.65 17.17C2.65 16.72 3.02 16.36 3.47 16.36C3.89 16.36 4.24 16.68 4.28 17.1C4.31 17.44 4.59 17.69 4.92 17.69L7.1 17.69L7.1 18.36L6.64 18.36C6.36 18.36 6.12 18.48 5.95 18.68ZM10.43 27.7L7.57 27.7C7.57 27.68 7.57 27.66 7.57 27.63C7.57 26.85 8.21 26.2 9 26.2C9.79 26.2 10.43 26.85 10.43 27.63C10.43 27.66 10.43 27.68 10.43 27.7ZM30.31 27.7L28.06 27.7C28.06 27.68 28.06 27.66 28.06 27.63C28.06 26.85 28.7 26.2 29.49 26.2C29.88 26.2 30.24 26.36 30.5 26.62C30.37 26.94 30.3 27.28 30.3 27.63C30.3 27.66 30.31 27.68 30.31 27.7ZM29.49 24.91C27.99 24.91 26.77 26.13 26.77 27.63C26.77 27.66 26.77 27.68 26.77 27.7L11.72 27.7C11.72 27.68 11.72 27.66 11.72 27.63C11.72 26.36 10.84 25.29 9.66 25C9.64 24.8 9.64 24.6 9.64 24.4C9.64 24.33 9.64 24.27 9.64 24.2L16.23 26.44C16.68 26.59 17.13 26.66 17.58 26.66C18.43 26.66 19.26 26.4 19.98 25.88C21.09 25.09 21.72 23.86 21.72 22.51C21.72 22.02 21.63 21.55 21.47 21.1C21.35 20.76 20.98 20.59 20.64 20.71C20.31 20.83 20.14 21.2 20.26 21.53C20.37 21.85 20.43 22.17 20.43 22.51C20.43 23.44 19.99 24.29 19.23 24.83C18.47 25.38 17.53 25.52 16.65 25.22L7.02 21.95L7.02 19.65L17.57 19.65C17.89 19.65 18.21 19.7 18.51 19.81C18.85 19.93 19.22 19.75 19.33 19.41C19.45 19.08 19.28 18.71 18.94 18.59C18.5 18.44 18.04 18.36 17.57 18.36L11.72 18.36C13.78 15.68 17.16 13.93 20.98 13.93C27.23 13.93 32.32 18.63 32.32 24.4C32.32 24.6 32.31 24.81 32.3 25.01C31.91 25.12 31.55 25.31 31.26 25.57C30.78 25.16 30.16 24.91 29.49 24.91ZM34.45 27.7L31.6 27.7C31.59 27.68 31.59 27.66 31.59 27.63C31.59 26.85 32.23 26.2 33.02 26.2C33.81 26.2 34.45 26.85 34.45 27.63C34.45 27.66 34.45 27.68 34.45 27.7ZM34.85 25.21C34.75 25.27 34.65 25.33 34.56 25.39C34.27 25.19 33.94 25.05 33.59 24.98C33.6 24.78 33.61 24.59 33.61 24.4C33.61 24.16 33.6 23.92 33.58 23.69L34.85 23.69L34.85 25.21ZM37.52 27.63C37.52 27.66 37.52 27.68 37.52 27.7L35.74 27.7C35.74 27.68 35.74 27.66 35.74 27.63C35.74 27.18 35.63 26.75 35.43 26.37C35.62 26.26 35.85 26.2 36.09 26.2C36.88 26.2 37.52 26.85 37.52 27.63ZM37.52 21.71C37.52 22.09 37.21 22.4 36.83 22.4L33.42 22.4C33.33 21.87 33.19 21.35 33.02 20.85L37.52 20.85L37.52 21.71ZM42.71 19.56L32.49 19.56C32.24 19.05 31.96 18.56 31.64 18.1L34.37 18.1C34.73 18.1 35.01 17.81 35.01 17.45C35.01 17.09 34.73 16.81 34.37 16.81L30.61 16.81C30 16.13 29.3 15.52 28.54 14.98C28.57 14.99 28.6 14.99 28.64 14.99C29.23 14.99 29.8 14.77 30.24 14.4C30.69 14.77 31.26 14.99 31.85 14.99C32.44 14.99 33.01 14.77 33.46 14.4C33.9 14.77 34.47 14.99 35.06 14.99C35.66 14.99 36.23 14.77 36.67 14.4C37.12 14.77 37.68 14.99 38.28 14.99C38.87 14.99 39.44 14.77 39.89 14.4C40.1 14.58 40.34 14.72 40.61 14.82L39.65 16.81L37.38 16.81C37.02 16.81 36.73 17.09 36.73 17.45C36.73 17.81 37.02 18.1 37.38 18.1L42.71 18.1L42.71 19.56Z"
                        fill="#363853"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </svg>
                    Asian Food
                  </button>
                </li>
                <li className="categories__menu-item">
                  <button
                    className="categories__menu-button button"
                    type="button"
                  >
                    <svg
                      width="44.000000"
                      height="44.000000"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <clipPath id="clip0_228">
                          <rect
                            id="dish 1"
                            width="44.000000"
                            height="43.489380"
                            transform="translate(0.000000 -0.126465)"
                            fill="white"
                            fillOpacity="0"
                          />
                        </clipPath>
                      </defs>
                      <rect
                        id="dish 1"
                        width="44.000000"
                        height="43.489380"
                        transform="translate(0.000000 -0.126465)"
                        fill="#FFFFFF"
                        fillOpacity="0"
                      />
                      <g clipPath="url(#clip0_228)">
                        <path
                          id="Vector"
                          d="M31.15 14.53L30.68 12.99C30.08 11.25 28.17 10.32 26.41 10.91C25.42 11.25 24.64 12.02 24.31 12.99L23.84 14.53C23.44 15.82 23.36 17.18 23.59 18.51C23.81 19.63 24.53 20.59 25.55 21.13L25.02 32.78C24.95 33.43 25.16 34.08 25.61 34.56C26.56 35.59 28.18 35.66 29.23 34.72C29.28 34.67 29.34 34.62 29.39 34.56C29.82 34.09 30.04 33.46 29.98 32.82L29.45 21.12C30.46 20.59 31.18 19.63 31.4 18.51C31.63 17.18 31.55 15.82 31.15 14.53ZM29.95 18.26C29.79 19.06 29.21 19.72 28.43 19.99C28.13 20.1 27.94 20.39 27.95 20.7L28.51 32.94C28.54 33.18 28.46 33.42 28.29 33.6C27.85 34.03 27.14 34.03 26.7 33.6C26.52 33.4 26.45 33.15 26.48 32.89L27.04 20.7C27.05 20.39 26.86 20.1 26.56 19.99C25.78 19.72 25.2 19.06 25.04 18.26C24.84 17.16 24.91 16.02 25.24 14.95L25.71 13.42C26.08 12.44 27.17 11.95 28.15 12.31C28.68 12.5 29.09 12.9 29.28 13.42L29.75 14.95C30.08 16.02 30.15 17.16 29.95 18.26Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                        <path
                          id="Vector"
                          d="M19.79 10.74C19.39 10.74 19.06 11.07 19.06 11.47L19.06 17.69L17.08 19.65C16.93 19.8 16.85 20 16.86 20.2L17.5 32.88C17.52 33.16 17.42 33.43 17.23 33.62C16.82 34.02 16.17 34.03 15.77 33.63C15.76 33.63 15.76 33.62 15.76 33.62C15.57 33.43 15.47 33.16 15.48 32.88L16.13 20.2C16.14 20 16.06 19.8 15.91 19.65L13.93 17.69L13.93 11.47C13.93 11.07 13.6 10.74 13.2 10.74C12.79 10.74 12.46 11.07 12.46 11.47L12.46 17.99C12.46 18.18 12.54 18.37 12.68 18.5L14.65 20.45L14.02 32.81C13.95 34.16 15.01 35.31 16.37 35.38C17.74 35.44 18.9 34.4 18.97 33.05C18.97 32.97 18.97 32.89 18.97 32.81L18.34 20.45L20.31 18.5C20.45 18.37 20.53 18.18 20.53 17.99L20.53 11.47C20.53 11.07 20.2 10.74 19.79 10.74Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                        <path
                          id="Vector"
                          d="M15.4 10.74C14.99 10.74 14.66 11.07 14.66 11.47L14.66 17.26C14.66 17.66 14.99 17.99 15.4 17.99C15.8 17.99 16.13 17.66 16.13 17.26L16.13 11.47C16.13 11.07 15.8 10.74 15.4 10.74Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                        <path
                          id="Vector"
                          d="M17.6 10.74C17.19 10.74 16.86 11.07 16.86 11.47L16.86 17.26C16.86 17.66 17.19 17.99 17.6 17.99C18 17.99 18.33 17.66 18.33 17.26L18.33 11.47C18.33 11.07 18 10.74 17.6 10.74Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                        <path
                          id="Vector"
                          d="M22 -0.13C9.84 -0.13 0 9.6 0 21.61C0 33.62 9.84 43.36 22 43.36C34.15 43.36 44 33.62 44 21.61C43.98 9.61 34.14 -0.12 22 -0.13ZM22 41.91C10.65 41.91 1.46 32.82 1.46 21.61C1.46 10.4 10.65 1.32 22 1.32C33.34 1.32 42.53 10.4 42.53 21.61C42.52 32.82 33.33 41.9 22 41.91Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                        <path
                          id="Vector"
                          d="M24.38 35.22C24.34 34.82 23.98 34.53 23.57 34.57C23.56 34.57 23.56 34.57 23.55 34.57L23.55 34.57C22.52 34.69 21.47 34.69 20.44 34.57C20.04 34.52 19.67 34.81 19.63 35.21C19.58 35.6 19.87 35.97 20.27 36.01C21.42 36.14 22.57 36.14 23.72 36.01C24.12 35.97 24.41 35.62 24.38 35.22Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                        <path
                          id="Vector"
                          d="M33.22 12.27C32.95 11.97 32.49 11.93 32.18 12.18C32.18 12.18 32.18 12.19 32.18 12.19C31.87 12.44 31.83 12.9 32.09 13.21C36.51 18.4 36.17 26.07 31.31 30.85C31.03 31.14 31.03 31.6 31.31 31.88C31.6 32.16 32.06 32.16 32.35 31.88C37.75 26.56 38.13 18.04 33.22 12.27Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                        <path
                          id="Vector"
                          d="M17.08 9.45C17.08 9.45 17.08 9.45 17.08 9.45C17.08 9.45 17.08 9.45 17.08 9.45L17.08 9.45Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                        <path
                          id="Vector"
                          d="M25.45 7.52C22.59 6.84 19.58 7.03 16.82 8.05C16.44 8.19 16.25 8.6 16.39 8.98C16.5 9.26 16.77 9.45 17.08 9.45C17.17 9.45 17.25 9.43 17.34 9.4C19.82 8.48 22.53 8.32 25.11 8.93C25.5 9.03 25.9 8.79 25.99 8.4C26.09 8.01 25.85 7.62 25.45 7.52Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                        <path
                          id="Vector"
                          d="M12.64 30.82C10.17 28.38 8.79 25.07 8.79 21.61C8.79 18.85 9.67 16.17 11.32 13.94C11.56 13.62 11.5 13.16 11.17 12.92C10.85 12.68 10.39 12.75 10.15 13.07C10.14 13.07 10.14 13.08 10.13 13.09C5.89 18.85 6.52 26.8 11.61 31.84C11.89 32.13 12.36 32.13 12.64 31.85C12.93 31.56 12.93 31.1 12.64 30.82Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                    Set Menu
                  </button>
                </li>
              </ul>
            </div>

            <div className="categories__products">
              <Slider slides={slides} />
            </div>
          </div>
        </section>
        <section className="section container">
          <div className="section__body delivery">
            <div className="delivery__inner">
              <div className="delivery__image-wrapper">
                <img
                  src={deliveryBg}
                  loading="lazy"
                  alt=""
                  width={626}
                  height={723}
                  className="delivery__image"
                />
              </div>
              <div className="delivery__body">
                <h2 className="delivery__title">
                  <span className="marked">Stay</span> at home, we will <br />
                  Provide <span className="marked"> good food</span>
                </h2>
                <div className="delivery__description">
                  <p>
                    We provide tasty food and superfast delivery at your home.
                    Let’s use our services right now and get discounts of up to
                    50%.
                  </p>
                </div>
                <div className="delivery__advantages">
                  <ul className="delivery__advantages-list">
                    <li className="delivery__advantages-item">
                      <img
                        src={advantageImg1}
                        loading="lazy"
                        alt=""
                        width={40}
                        height={34}
                        className="delivery__advantages-image"
                      />
                      <div className="delivery__advantages-description">
                        fasted delivery in 30 Minutes
                      </div>
                    </li>
                    <li className="delivery__advantages-item">
                      <img
                        src={advantageImg2}
                        loading="lazy"
                        alt=""
                        width={33}
                        height={33}
                        className="delivery__advantages-image"
                      />
                      <div className="delivery__advantages-description">
                        300+ delivery men
                      </div>
                    </li>
                    <li className="delivery__advantages-item">
                      <img
                        src={advantageImg3}
                        loading="lazy"
                        alt=""
                        width={33}
                        height={36}
                        className="delivery__advantages-image"
                      />
                      <div className="delivery__advantages-description">
                        500+ restaurant & cafe shop
                      </div>
                    </li>
                  </ul>
                </div>
                <a href="./" className="button button--link">
                  See more
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section container">
          <h2 className="section__title">
            top food <span className="marked">restaurant</span>
          </h2>
          <div className="section__body restaurants">
            <ul className="restaurants__list">
              <li className="restaurants__item">
                <img
                  src={restaurantImg1}
                  loading="lazy"
                  alt=""
                  width={361}
                  height={299}
                  className="restaurants__item-image"
                />
                <div className="restaurants__item-body">
                  <div className="restaurants__item-title">Blaze Pizza</div>
                  <div className="restaurants__item-schedule">
                    <img
                      src={clockIconSvg}
                      width={22}
                      height={22}
                      loading="lazy"
                      alt=""
                    />
                    <time dateTime="11:00-22:00">11.00 AM - 10.00 PM</time>
                  </div>
                  <a
                    href="./"
                    className="button button--link restaurants__item-link"
                  >
                    <img
                      src={rightArrowSvg}
                      width={14}
                      height={12}
                      loading="lazy"
                      alt=""
                    />
                    <span className="visually-hidden">Go to Blaze Pizza</span>
                  </a>
                </div>
              </li>
              <li className="restaurants__item">
                <img
                  src={restaurantImg2}
                  loading="lazy"
                  alt=""
                  width={361}
                  height={299}
                  className="restaurants__item-image"
                />
                <div className="restaurants__item-body">
                  <div className="restaurants__item-title">Pizza Ranch</div>
                  <div className="restaurants__item-schedule">
                    <img
                      src={clockIconSvg}
                      width={22}
                      height={22}
                      loading="lazy"
                      alt=""
                    />
                    <time dateTime="09:00-22:00">09.00 AM - 10.00 PM</time>
                  </div>
                  <a
                    href="./"
                    className="button button--link restaurants__item-link"
                  >
                    <img
                      src={rightArrowSvg}
                      width={14}
                      height={12}
                      loading="lazy"
                      alt=""
                    />
                    <span className="visually-hidden">Go to Pizza Ranch</span>
                  </a>
                </div>
              </li>
              <li className="restaurants__item">
                <img
                  src={restaurantImg3}
                  loading="lazy"
                  alt=""
                  width={361}
                  height={299}
                  className="restaurants__item-image"
                />
                <div className="restaurants__item-body">
                  <div className="restaurants__item-title">
                    Dion’s Pizza Hut
                  </div>
                  <div className="restaurants__item-schedule">
                    <img
                      src={clockIconSvg}
                      width={22}
                      height={22}
                      loading="lazy"
                      alt=""
                    />
                    <time dateTime="10:00-24:00">10.00 AM - 12.00 PM</time>
                  </div>
                  <a
                    href="./"
                    className="button button--link restaurants__item-link"
                  >
                    <img
                      src={rightArrowSvg}
                      width={14}
                      height={12}
                      loading="lazy"
                      alt=""
                    />
                    <span className="visually-hidden">
                      Go to Dion’s Pizza Hut
                    </span>
                  </a>
                </div>
              </li>
              <li className="restaurants__item">
                <img
                  src={restaurantImg4}
                  loading="lazy"
                  alt=""
                  width={361}
                  height={299}
                  className="restaurants__item-image"
                />
                <div className="restaurants__item-body">
                  <div className="restaurants__item-title">Royel Burger</div>
                  <div className="restaurants__item-schedule">
                    <img
                      src={clockIconSvg}
                      width={22}
                      height={22}
                      loading="lazy"
                      alt=""
                    />
                    <time dateTime="11:00-22:00">11.00 AM - 10.00 PM</time>
                  </div>
                  <a
                    href="./"
                    className="button button--link restaurants__item-link"
                  >
                    <img
                      src={rightArrowSvg}
                      width={14}
                      height={12}
                      loading="lazy"
                      alt=""
                    />
                    <span className="visually-hidden">Go to Royel Burger</span>
                  </a>
                </div>
              </li>
              <li className="restaurants__item">
                <img
                  src={restaurantImg5}
                  loading="lazy"
                  alt=""
                  width={361}
                  height={299}
                  className="restaurants__item-image"
                />
                <div className="restaurants__item-body">
                  <div className="restaurants__item-title">KFC Restaurant</div>
                  <div className="restaurants__item-schedule">
                    <img
                      src={clockIconSvg}
                      width={22}
                      height={22}
                      loading="lazy"
                      alt=""
                    />
                    <time dateTime="09:00-22:00">09.00 AM - 10.00 PM</time>
                  </div>
                  <a
                    href="./"
                    className="button button--link restaurants__item-link"
                  >
                    <img
                      src={rightArrowSvg}
                      width={14}
                      height={12}
                      loading="lazy"
                      alt=""
                    />
                    <span className="visually-hidden">
                      Go to KFC Restaurant
                    </span>
                  </a>
                </div>
              </li>
              <li className="restaurants__item">
                <img
                  src={restaurantImg6}
                  loading="lazy"
                  alt=""
                  width={361}
                  height={299}
                  className="restaurants__item-image"
                />
                <div className="restaurants__item-body">
                  <div className="restaurants__item-title">Star Food</div>
                  <div className="restaurants__item-schedule">
                    <img
                      src={clockIconSvg}
                      width={22}
                      height={22}
                      loading="lazy"
                      alt=""
                    />
                    <time dateTime="10:00-24:00">10.00 AM - 12.00 PM</time>
                  </div>
                  <a
                    href="./"
                    className="button button--link restaurants__item-link"
                  >
                    <img
                      src={rightArrowSvg}
                      width={14}
                      height={12}
                      loading="lazy"
                      alt=""
                    />
                    <span className="visually-hidden">Go to Star Food</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="section container">
          <div className="mobile-app">
            <div className="mobile-app__inner">
              <div className="mobile-app__body">
                <h2 className="mobile-app__title">
                  Download Our <span className="marked">Mobile App</span>
                </h2>
                <div className="mobile-app__description">
                  <p>
                    It's all at your fingertips -- the restaurants you love.
                    Find the right food to suit your mood, and make the first
                    bite last. Go ahead, download app and get 50% discount
                  </p>
                </div>
                <div className="mobile-app__links">
                  <a href="./" className="mobile-app__link">
                    <img
                      src={appStoreSvg}
                      width={120}
                      height={40}
                      loading="lazy"
                      alt="App Store"
                    />
                    <span className="visually-hidden">Go to App Store</span>
                  </a>
                  <a href="./" className="mobile-app__link">
                    <img
                      src={googlePlaySvg}
                      width={135}
                      height={40}
                      loading="lazy"
                      alt="App Store"
                    />
                    <span className="visually-hidden">Go to Google Play</span>
                  </a>
                </div>
              </div>
              <div className="mobile-app__images">
                <img
                  src={mobileAppImg1}
                  width={312}
                  height={480}
                  loading="lazy"
                  alt="Mobile app image"
                  className="mobile-app__image"
                />
                <img
                  src={mobileAppImg2}
                  loading="lazy"
                  alt="Mobile app image"
                  width={215}
                  height={464}
                  className="mobile-app__image"
                />
                <img
                  src={mobileAppImg3}
                  loading="lazy"
                  alt="Mobile app image"
                  width={312}
                  height={480}
                  className="mobile-app__image"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section container">
          <h2 className="section__title">
            What Our Client Are <span className="marked">Saying</span>
          </h2>
          <div className="section__body">
            <div className="review">
              <img
                src={reviewBg}
                width={433}
                height={519}
                loading="lazy"
                alt="Happy woman with burger"
                className="review__image"
              />
              <div className="review__body">
                <div className="review__text">
                  <p>
                    EFood has the most intriguing food order system in the
                    country. UI in both their app and web Is very simple and
                    easy to use, enhancing the UX. Their delivery men are also
                    quite professional and knows the neighborhood well. Till now
                    I never had to guide them to my address for delivery;
                  </p>
                </div>
                <div className="review__author">
                  <div className="review__author-name">Anglina Jole</div>
                  <div className="review__author-description">Food lover</div>
                </div>
                <div className="review__actions">
                  <button className="review__button review__button--prev">
                    <svg
                      width="24.000000"
                      height="20.008057"
                      viewBox="0 0 24 20.0081"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs />
                      <path
                        id="Vector"
                        d="M23 10L1 10"
                        stroke="#7B7B7B"
                        strokeOpacity="1.000000"
                        strokeWidth="2.000000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <path
                        id="Vector"
                        d="M10 1L1 10L10 19"
                        stroke="#7B7B7B"
                        strokeOpacity="1.000000"
                        strokeWidth="2.000000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="visually-hidden">
                      See previous preview
                    </span>
                  </button>
                  <button className="review__button review__button--next">
                    <svg
                      width="24.000000"
                      height="20.008057"
                      viewBox="0 0 24 20.0081"
                      fill="none"
                      style={{ scale: '-1' }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs />
                      <path
                        id="Vector"
                        d="M23 10L1 10"
                        stroke="#7B7B7B"
                        strokeOpacity="1.000000"
                        strokeWidth="2.000000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <path
                        id="Vector"
                        d="M10 1L1 10L10 19"
                        stroke="#7B7B7B"
                        strokeOpacity="1.000000"
                        strokeWidth="2.000000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="visually-hidden">See next preview</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section container">
          <div className="subscribe">
            <div className="subscribe__inner">
              <h2 className="subscribe__title">
                Subscribe to get the Latest Offer
              </h2>
              <div className="subscribe__description">
                Get our daily updates by subscribing to our newspaper, please
                drop your email below
              </div>
              <form className="subscribe__form">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="subscribe__form-input"
                />
                <button type="submit" className="subscribe__form-button button">
                  <svg
                    width="13.000000"
                    height="14.000000"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs />
                    <path
                      id="Vector"
                      d="M7.52 13.3C7.27 13.3 7.05 13.16 6.94 12.94L5.01 9.08C4.9 8.87 4.92 8.61 5.06 8.42L8.17 4.2L3.95 7.31C3.75 7.44 3.5 7.46 3.29 7.36L-0.57 5.43C-0.8 5.31 -0.94 5.07 -0.93 4.81C-0.92 4.55 -0.75 4.32 -0.5 4.24L11.85 -0.31C12.08 -0.4 12.35 -0.34 12.53 -0.16C12.71 0.01 12.77 0.28 12.68 0.52L8.13 12.87C8.04 13.11 7.81 13.28 7.56 13.29C7.54 13.29 7.53 13.3 7.52 13.3Z"
                      fill="#FFFFFF"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                  </svg>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer container">
        <h2 className="visually-hidden">
          Footer - Extra information and links
        </h2>
        <div className="footer__inner">
          <div className="footer__body">
            <div className="footer__main">
              <a href="./" className="footer__logo">
                <img
                  src={logoSvg}
                  width={106}
                  height={80}
                  loading="lazy"
                  alt="EFood logo"
                />
              </a>
              <ul className="footer__main-list">
                <li className="footer__main-item">
                  <a href="./" className="footer__main-link">
                    <svg
                      fill="currentColor"
                      width="24px"
                      height="24px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
                    </svg>
                    Dhaka, Bangladesh
                  </a>
                </li>
                <li className="footer__main-item">
                  <a href="tel:0943833399" className="footer__main-link">
                    <svg
                      width="24.000000"
                      height="24.000000"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs />
                      <rect
                        id="Iconly/Light/Calling"
                        width="24.000000"
                        height="24.000000"
                        fill="#FFFFFF"
                        fillOpacity="0"
                      />
                      <path
                        id="Stroke 1"
                        d="M14.35 2.5C18.05 2.91 20.97 5.83 21.39 9.53"
                        stroke="#363853"
                        strokeOpacity="1.000000"
                        strokeWidth="1.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <path
                        id="Stroke 3"
                        d="M14.35 6.04C16.12 6.38 17.5 7.77 17.85 9.54"
                        stroke="#363853"
                        stroke-opacity="1.000000"
                        stroke-width="1.500000"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      />
                      <path
                        id="Stroke 5"
                        d="M18.46 14.38C20.91 16.83 22.32 17.32 19.21 20.42C18.83 20.73 16.36 24.49 7.68 15.81C-1 7.14 2.76 4.67 3.07 4.28C6.18 1.17 6.66 2.58 9.11 5.03C11.65 7.57 7.04 8.48 11.03 12.47C15.02 16.46 15.92 11.84 18.46 14.38Z"
                        stroke="#363853"
                        stroke-opacity="1.000000"
                        stroke-width="1.500000"
                        stroke-linejoin="round"
                      />
                    </svg>
                    0943833399
                  </a>
                </li>
                <li className="footer__main-item">
                  <a
                    href="mailto:support@efood.com"
                    className="footer__main-link"
                  >
                    <svg
                      width="24.000000"
                      height="24.000000"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs />
                      <rect
                        id="Iconly/Light/Message"
                        width="24.000000"
                        height="24.000000"
                        fill="#FFFFFF"
                        fillOpacity="0"
                      />
                      <path
                        id="Stroke 1"
                        d="M17.9 8.85L13.45 12.46C12.61 13.13 11.43 13.13 10.59 12.46L6.11 8.85"
                        stroke="#363853"
                        strokeOpacity="1.000000"
                        strokeWidth="1.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <path
                        id="Stroke 3"
                        d="M22 15.43L22 8.57C22 5.49 19.95 3 16.9 3L7.09 3C4.04 3 2 5.49 2 8.57L2 15.43C2 18.5 4.04 21 7.09 21L16.9 21C19.95 21 22 18.5 22 15.43Z"
                        stroke="#363853"
                        strokeOpacity="1.000000"
                        strokeWidth="1.500000"
                        strokeLinejoin="round"
                      />
                    </svg>
                    support@efood.com
                  </a>
                </li>
              </ul>
              <div className="footer__soc1als">
                <ul className="footer__soc1als-list">
                  <li className="footer__soc1als-item">
                    <a href="./" className="footer__soc1als-link">
                      <span className="visually-hidden">Facebook</span>
                      <svg
                        width="10.000000"
                        height="20.000000"
                        viewBox="0 0 10 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs />
                        <path
                          id="ic-facebook"
                          d="M1.91 19.76L1.91 10.13L-0.64 10.13L-0.64 6.66L1.91 6.66L1.91 3.7C1.91 1.37 3.41 -0.77 6.88 -0.77C8.28 -0.77 9.32 -0.63 9.32 -0.63L9.24 2.6C9.24 2.6 8.18 2.59 7.03 2.59C5.78 2.59 5.58 3.17 5.58 4.13L5.58 6.66L9.34 6.66L9.18 10.13L5.58 10.13L5.58 19.76L1.91 19.76Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="footer__soc1als-item">
                    <a href="./" className="footer__soc1als-link">
                      <span className="visually-hidden">Twitter</span>
                      <svg
                        width="20.000000"
                        height="16.000000"
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs />
                        <path
                          id="ic-twitter"
                          d="M19.76 1.27C19 1.59 18.18 1.83 17.34 1.92C18.21 1.39 18.87 0.57 19.19 -0.4C18.36 0.09 17.46 0.43 16.52 0.61C16.12 0.19 15.65 -0.14 15.12 -0.37C14.59 -0.6 14.02 -0.72 13.44 -0.72C11.11 -0.72 9.24 1.17 9.24 3.49C9.24 3.82 9.28 4.14 9.34 4.46C5.85 4.28 2.74 2.61 0.67 0.05C0.29 0.7 0.09 1.43 0.1 2.18C0.1 3.64 0.84 4.93 1.97 5.68C1.3 5.66 0.65 5.47 0.07 5.15L0.07 5.2C0.07 7.25 1.51 8.94 3.44 9.33C3.08 9.42 2.71 9.47 2.33 9.47C2.06 9.47 1.8 9.45 1.54 9.41C2.07 11.08 3.62 12.29 5.47 12.33C4.02 13.46 2.21 14.12 0.25 14.12C-0.1 14.12 -0.43 14.11 -0.77 14.07C1.1 15.27 3.31 15.96 5.69 15.96C13.43 15.96 17.66 9.55 17.66 3.99C17.66 3.81 17.66 3.62 17.65 3.44C18.47 2.84 19.19 2.1 19.76 1.27Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="footer__soc1als-item">
                    <a href="./" className="footer__soc1als-link">
                      <span className="visually-hidden">Instagram</span>
                      <svg
                        width="19.000000"
                        height="19.000000"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs />
                        <path
                          id="ic-instagram"
                          d="M8.98 5.76C7.19 5.76 5.73 7.22 5.73 9.01C5.73 10.8 7.19 12.26 8.98 12.26C10.77 12.26 12.23 10.8 12.23 9.01C12.23 7.22 10.77 5.76 8.98 5.76ZM18.73 9.01C18.73 7.66 18.74 6.33 18.67 4.98C18.59 3.42 18.24 2.04 17.09 0.9C15.95 -0.25 14.57 -0.6 13.01 -0.68C11.66 -0.75 10.33 -0.74 8.98 -0.74C7.64 -0.74 6.3 -0.75 4.96 -0.68C3.4 -0.6 2.01 -0.25 0.87 0.9C-0.27 2.04 -0.63 3.42 -0.7 4.98C-0.78 6.33 -0.77 7.66 -0.77 9.01C-0.77 10.35 -0.78 11.69 -0.7 13.03C-0.63 14.59 -0.27 15.98 0.87 17.12C2.01 18.26 3.4 18.62 4.96 18.69C6.3 18.77 7.64 18.76 8.98 18.76C10.33 18.76 11.66 18.77 13.01 18.69C14.57 18.62 15.95 18.26 17.09 17.12C18.24 15.98 18.59 14.59 18.67 13.03C18.75 11.69 18.73 10.35 18.73 9.01ZM8.98 14.01C6.21 14.01 3.98 11.78 3.98 9.01C3.98 6.24 6.21 4.01 8.98 4.01C11.75 4.01 13.98 6.24 13.98 9.01C13.98 11.78 11.75 14.01 8.98 14.01ZM14.19 4.97C13.54 4.97 13.02 4.45 13.02 3.8C13.02 3.15 13.54 2.63 14.19 2.63C14.83 2.63 15.36 3.15 15.36 3.8C15.36 3.95 15.33 4.11 15.27 4.25C15.21 4.39 15.12 4.52 15.01 4.63C14.91 4.74 14.78 4.82 14.63 4.88C14.49 4.94 14.34 4.97 14.19 4.97Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="footer__soc1als-item">
                    <a href="./" className="footer__soc1als-link">
                      <span className="visually-hidden">Pinterset</span>
                      <svg
                        width="16.000000"
                        height="20.000000"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs />
                        <path
                          id="ic-pinterset"
                          d="M-0.72 6.59C-0.72 5.71 -0.56 4.87 -0.25 4.09C0.04 3.33 0.47 2.63 1.02 2.03C1.58 1.44 2.21 0.93 2.9 0.52C3.61 0.09 4.38 -0.24 5.18 -0.45C6 -0.66 6.83 -0.77 7.68 -0.77C8.97 -0.77 10.18 -0.49 11.3 0.05C12.41 0.59 13.35 1.42 14.03 2.44C14.73 3.49 15.08 4.67 15.08 5.98C15.08 6.77 15 7.55 14.84 8.3C14.69 9.05 14.44 9.79 14.11 10.48C13.79 11.15 13.37 11.78 12.87 12.33C12.37 12.87 11.76 13.3 11.08 13.6C10.35 13.92 9.55 14.08 8.75 14.07C8.19 14.07 7.64 13.94 7.09 13.68C6.54 13.42 6.14 13.06 5.91 12.59C5.82 12.91 5.71 13.38 5.56 13.98C5.41 14.59 5.31 14.98 5.27 15.15C5.22 15.33 5.14 15.62 5.02 16.03C4.93 16.33 4.83 16.62 4.7 16.91L4.3 17.68C4.13 18.01 3.94 18.32 3.74 18.63C3.53 18.93 3.27 19.29 2.97 19.7L2.8 19.76L2.69 19.63C2.56 18.34 2.5 17.57 2.5 17.31C2.5 16.56 2.59 15.71 2.77 14.77C2.94 13.83 3.22 12.64 3.59 11.22C3.96 9.8 4.17 8.96 4.23 8.72C3.97 8.18 3.84 7.49 3.84 6.63C3.84 5.95 4.05 5.31 4.48 4.71C4.91 4.11 5.45 3.81 6.11 3.81C6.61 3.81 7 3.97 7.28 4.31C7.56 4.64 7.7 5.06 7.7 5.57C7.7 6.11 7.52 6.9 7.15 7.93C6.79 8.96 6.61 9.72 6.61 10.23C6.61 10.75 6.79 11.18 7.16 11.52C7.53 11.86 8.01 12.05 8.51 12.03C8.96 12.03 9.38 11.93 9.77 11.73C10.15 11.53 10.48 11.24 10.74 10.89C11.29 10.13 11.68 9.27 11.9 8.35C12.01 7.87 12.09 7.41 12.14 6.98C12.2 6.55 12.22 6.14 12.22 5.75C12.22 4.33 11.77 3.22 10.87 2.43C9.97 1.64 8.8 1.24 7.35 1.24C5.71 1.24 4.33 1.77 3.23 2.84C2.13 3.9 1.58 5.25 1.58 6.89C1.58 7.25 1.63 7.6 1.73 7.94C1.84 8.28 1.95 8.55 2.07 8.74C2.19 8.94 2.3 9.13 2.4 9.31C2.5 9.48 2.55 9.61 2.55 9.68C2.55 9.91 2.49 10.21 2.37 10.58C2.25 10.95 2.1 11.14 1.92 11.14C1.9 11.14 1.83 11.13 1.71 11.1C1.28 10.97 0.89 10.73 0.59 10.41C0.26 10.07 0.01 9.68 -0.16 9.24C-0.34 8.81 -0.47 8.37 -0.56 7.91C-0.67 7.48 -0.72 7.04 -0.72 6.59Z"
                          fill="#363853"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__links">
              <h3 className="footer__links-title">Service</h3>
              <ul className="footer__links-list">
                <li className="footer__links-item">
                  <a href="./" className="footer__links-link">
                    How it works
                  </a>
                </li>
                <li className="footer__links-item">
                  <a href="./" className="footer__links-link">
                    Home delivery
                  </a>
                </li>
                <li className="footer__links-item">
                  <a href="./" className="footer__links-link">
                    Products
                  </a>
                </li>
                <li className="footer__links-item">
                  <a href="./" className="footer__links-link">
                    Menu
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__links">
              <h3 className="footer__links-title">Company</h3>
              <ul className="footer__links-list">
                <li className="footer__links-item">
                  <a href="./" className="footer__links-link">
                    About Us
                  </a>
                </li>
                <li className="footer__links-item">
                  <a href="./" className="footer__links-link">
                    News
                  </a>
                </li>
                <li className="footer__links-item">
                  <a href="./" className="footer__links-link">
                    Our trusted partner
                  </a>
                </li>
                <li className="footer__links-item">
                  <a href="./" className="footer__links-link">
                    New users FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__links">
              <h3 className="footer__links-title">Supports</h3>
              <ul className="footer__links-list">
                <li className="footer__links-item">
                  <a href="./" className="footer__links-link">
                    Help center
                  </a>
                </li>
                <li className="footer__links-item">
                  <a href="./" className="footer__links-link">
                    Feedback
                  </a>
                </li>
                <li className="footer__links-item">
                  <a href="./" className="footer__links-link">
                    Contact us
                  </a>
                </li>
                <li className="footer__links-item">
                  <a href="./" className="footer__links-link">
                    Terms conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__links">
              <h3 className="footer__links-title">Resources</h3>
              <ul className="footer__links-list">
                <li className="footer__links-item">
                  <a href="./" className="footer__links-link">
                    Download app
                  </a>
                </li>
                <li className="footer__links-item">
                  <a href="./" className="footer__links-link">
                    Blog
                  </a>
                </li>
                <li className="footer__links-item">
                  <a href="./" className="footer__links-link">
                    What's new
                  </a>
                </li>
                <li className="footer__links-item">
                  <a href="./" className="footer__links-link">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__extra">
            <div className="footer__copyrights">
              © 2021 EFood - All rights reserved.
            </div>
            <ul className="footer__extra-list">
              <li className="footer__extra-item">
                <a href="./" className="footer__extra-link">
                  Privacy
                </a>
              </li>
              <li className="footer__extra-item">
                <a href="./" className="footer__extra-link">
                  Security
                </a>
              </li>
              <li className="footer__extra-item">
                <a href="./" className="footer__extra-link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
