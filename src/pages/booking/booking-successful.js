import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import * as actionType from "../../store/actions/actionType";

import SVGIcon from "../../components/svgIcons/svg";
import Header from "../../components/header/header";

const BookingSuccess = (props) => {
  const location = useHistory();

  useEffect(() => {
    return location.listen(() => {
      props.resetPaymentStatus();
    });
  }, [location, props]);

  if (!props.bookingSuccessful) return <Redirect to="/" />;

  return (
    <Fragment>
      <Helmet>
        <title>Booking Successful | GrandLane Chauffeur Services</title>
      </Helmet>
      <section className="forgotPassword">
        <Header />
      </section>

      <div className="resetPassword-success">
        <SVGIcon className="resetPassword-success__icon" name="rightCheck" />
        <h2 className="resetPassword-success__text">
          <span className="resetPassword-success__text--big">
            Booking Successful!
          </span>
          <span className="resetPassword-success__text--small">
            {props.isAuth
              ? "Check the orders tab for more details, and an e-mail was sent to you."
              : "Check your e-mail to see your order details"}
          </span>
        </h2>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    bookingSuccessful: state.payment.paymentSuccessful,
    isAuth: state.authentication.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetPaymentStatus: () => dispatch({ type: actionType.PAYMENT_PAGE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingSuccess);
