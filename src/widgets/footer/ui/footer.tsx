import logoSvg from 'shared/assets/images/logo.svg';

export const Footer = () => {
  return (
    <footer className="footer container">
      <h2 className="visually-hidden">Footer - Extra information and links</h2>
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
                      strokeOpacity="1.000000"
                      strokeWidth="1.500000"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    <path
                      id="Stroke 5"
                      d="M18.46 14.38C20.91 16.83 22.32 17.32 19.21 20.42C18.83 20.73 16.36 24.49 7.68 15.81C-1 7.14 2.76 4.67 3.07 4.28C6.18 1.17 6.66 2.58 9.11 5.03C11.65 7.57 7.04 8.48 11.03 12.47C15.02 16.46 15.92 11.84 18.46 14.38Z"
                      stroke="#363853"
                      strokeOpacity="1.000000"
                      strokeWidth="1.500000"
                      strokeLinejoin="round"
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
  );
};
