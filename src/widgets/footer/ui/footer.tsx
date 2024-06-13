import LocationIcon from 'shared/assets/images/icons/location-icon.svg?react';
import PhoneIcon from 'shared/assets/images/icons/phone-icon.svg?react';
import MailIcon from 'shared/assets/images/icons/mail-icon.svg?react';
import FacebookIcon from 'shared/assets/images/icons/facebook-icon.svg?react';
import TwitterIcon from 'shared/assets/images/icons/twitter-icon.svg?react';
import InstagramIcon from 'shared/assets/images/icons/instagram-icon.svg?react';
import PintersetIcon from 'shared/assets/images/icons/pinterset-icon.svg?react';

import logoSvg from 'shared/assets/images/logo.svg';
import './footer.scss';

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
                  <LocationIcon />
                  Dhaka, Bangladesh
                </a>
              </li>
              <li className="footer__main-item">
                <a href="tel:0943833399" className="footer__main-link">
                  <PhoneIcon />
                  0943833399
                </a>
              </li>
              <li className="footer__main-item">
                <a
                  href="mailto:support@efood.com"
                  className="footer__main-link"
                >
                  <MailIcon />
                  support@efood.com
                </a>
              </li>
            </ul>
            <div className="footer__soc1als">
              <ul className="footer__soc1als-list">
                <li className="footer__soc1als-item">
                  <a href="./" className="footer__soc1als-link">
                    <span className="visually-hidden">Facebook</span>
                    <FacebookIcon />
                  </a>
                </li>
                <li className="footer__soc1als-item">
                  <a href="./" className="footer__soc1als-link">
                    <span className="visually-hidden">Twitter</span>
                    <TwitterIcon />
                  </a>
                </li>
                <li className="footer__soc1als-item">
                  <a href="./" className="footer__soc1als-link">
                    <span className="visually-hidden">Instagram</span>
                    <InstagramIcon />
                  </a>
                </li>
                <li className="footer__soc1als-item">
                  <a href="./" className="footer__soc1als-link">
                    <span className="visually-hidden">Pinterset</span>
                    <PintersetIcon />
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
