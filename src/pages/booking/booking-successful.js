import React, { Fragment } from "react";
// import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import SVGIcon from "../../components/svgIcons/svg";
import Header from "../../components/header/header";

const BookingSuccess = ({ sideDrawerToggle, isAuth, logoutHandler }) => {
  // let details = JSON.parse(localStorage.getItem("distance"));

  // if (!details) {
  //   return <Redirect to="/" />;
  // }

  return (
    <Fragment>
      <Helmet>
        <title>Booking Successful | GrandLane Chauffeur Services</title>
      </Helmet>
      <section className="forgotPassword">
        <Header
          drawerToggle={sideDrawerToggle}
          isAuth={isAuth}
          logoutHandler={logoutHandler}
        />
      </section>

      <div className="resetPassword-success">
        <SVGIcon className="resetPassword-success__icon" name="rightCheck" />
        <h2 className="resetPassword-success__text">
          <span className="resetPassword-success__text--big">
            Booking Successful!
          </span>
          <span className="resetPassword-success__text--small">
            {isAuth
              ? "Check the orders tab for more details, and an e-mail was sent to you."
              : "Check your e-mail to see your order details"}
          </span>
        </h2>
      </div>
    </Fragment>
  );
};

export default BookingSuccess;
