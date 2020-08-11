import React from "react";
import { Helmet } from "react-helmet";

import Header from "../../components/header/header";
import SVGIcon from "../../components/svgIcons/svg";
import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import Action from "../../components/footer/action";

import AirportTransfer from "../../images/transfer-medium.jpg";
import CorporateTransfer from "../../images/testimonial-1-medium.jpg";
import WineryTour from "../../images/winery-2-medium.jpg";
import Event from "../../images/events-2-medium.jpg";
import Tour from "../../images/testimonial-2-medium.jpg";
import WeddingTransfer from "../../images/events-medium.jpg";

const home = (props) => {
  return (
    <div className="home">
      <Helmet>
        <title>Home - GrandLane Services</title>
      </Helmet>
      <section className="intro">
        <Header
          drawerToggle={props.sideDrawerToggle}
          isAuth={props.isAuth}
          logoutHandler={props.logoutHandler}
        />
        <div className="intro-items">
          <h1 className="intro-heading">
            <span className="intro-heading__brand">GrandLane Chauffeurs</span>
            <span className="intro-heading__desc2">
              experience the drive of your life
            </span>
          </h1>
          <Button
            btnName="Book Now"
            theme="primary"
            link="/reservation"
          ></Button>
        </div>
      </section>

      <section className="desc">
        <h2 className="desc-heading">why us</h2>
        <p className="desc-text">
          GrandLane Chauffeurs is Melbourne’s most trusted and professional
          chauffeur service offering chauffeured luxury cars for all occasions
          and airport transfer services. We pride our self on our ability to
          provide a professional, reliable, discreet and friendly service and
          will cater to all your requirements. Our highly trained chauffeurs are
          dedicated to delivering you safely to your desired destination.
        </p>
        <div className="desc-mark">
          <p className="desc-mark__text">
            <span>
              <SVGIcon name="rightCheck" className="desc-svg" />
            </span>
            <span>guaranted quality</span>
          </p>
          <p className="desc-mark__text">
            <span>
              <SVGIcon name="dollarSign" className="desc-svg" />
            </span>
            <span>Affordable Pricing</span>
          </p>
        </div>
        <Button btnName="Learn More" theme="secondary" link="/about"></Button>
      </section>

      <section className="services">
        <h2 className="services-header">our services</h2>
        <div className="services-content">
          <div className="services-image">
            <p className="services-image__text">Airport Transfer</p>
            <img src={AirportTransfer} alt="Airport Transfer Service" />
          </div>

          <div className="services-image">
            <p className="services-image__text">Corporate Transfer</p>
            <img src={CorporateTransfer} alt="Corporate Transfer Service" />
          </div>

          <div className="services-image">
            <p className="services-image__text">Winery Tours</p>
            <img src={WineryTour} alt="Winery Tours" />
          </div>

          <div className="services-image">
            <p className="services-image__text">Daily Tour</p>
            <img src={Tour} alt="Daily Chauffeur Service" />
          </div>

          <div className="services-image">
            <p className="services-image__text">Special Occasions</p>
            <img src={Event} alt="Touring Melbourne" />
          </div>

          <div className="services-image">
            <p className="services-image__text">Wedding Car Hire</p>
            <img src={WeddingTransfer} alt="A Wedding Event" />
          </div>
        </div>

        <Button
          theme="secondary"
          btnName="Learn More"
          link="/services"
        ></Button>
      </section>
      <Action />
      <Footer />
    </div>
  );
};

export default home;
