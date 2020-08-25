import React from "react";
import { NavLink, Link } from "react-router-dom";

import SVGIcon from "../svgIcons/svg";

const navigation = {
  data: [
    { id: "home", text: "Home", link: "/" },
    { id: "about", text: "About", link: "/about" },
    { id: "services", text: "Services", link: "/services" },
    { id: "rates", text: "Service Rates", link: "/rates" },
    { id: "contact", text: "Contact", link: "/contact" },
  ],
};

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/" className="footer-logo">
        LOGO
      </Link>
      <div className="footer-contact">
        <p
          className="footer-text"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <span className="footer-text__icon">
            <SVGIcon name="location" className="footer-svg" />
          </span>
          <span className="footer-text__desc">
            airport drive, melbourne airport VIC, australia
          </span>
        </p>

        <p
          className="footer-text"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <span className="footer-text__icon">
            <SVGIcon name="phone" className="footer-svg" />
          </span>
          <span className="footer-text__desc">(1800)-222-333-4444</span>
        </p>

        <p
          className="footer-text"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <span className="footer-text__icon">
            <SVGIcon name="mail" className="footer-svg" />
          </span>
          <span className="footer-text__desc">
            booking&#64;grandlane.com.au
          </span>
        </p>

        <p
          className="footer-text"
          id="driver"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <a href="tel:+2348139544732">call now to become a driver</a>
        </p>
      </div>

      <div
        className="footer-social"
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay="500"
      >
        <Link to="facebook">
          <SVGIcon name="facebook" className="footer-svg" />
        </Link>
        <Link to="instagram">
          <SVGIcon name="instagram" className="footer-svg" />
        </Link>
      </div>

      <div className="footer-links">
        <ul className="footer-links__items">
          {navigation.data.map((items) => (
            <li key={items.id}>
              <NavLink to={items.link} exact>
                {items.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-base">
        <p className="footer-base__text">
          Copyright GrandLane Chauffeurs &#169;{new Date().getUTCFullYear()}.
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
