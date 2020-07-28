import React, { Fragment, Component } from "react";
import { Helmet } from "react-helmet";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import BookingForm from "../../components/form/bookingForm";

class Booking extends Component {
  onSubmit(event) {
    let hour;
    let service;

    if (document.querySelector("#hour")) {
      hour = document.getElementById("hour").value;
    } else {
      service = document.querySelector("#service").value;
    }

    let origin = document.querySelector(".origin").value;
    let destination = document.querySelector(".destination").value;
    let time = document.querySelector(".time").value;
    let date = document.querySelector(".date").value;

    this.props.submitLocation(event, {
      origin,
      destination,
      time,
      date,
      hour,
      service
    });
  }
  render() {
    const { sideDrawerToggle, isAuth, logoutHandler } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>New Reservation | GrandLane Chauffeur Services</title>
        </Helmet>
        <section className="booking">
          <Header
            drawerToggle={sideDrawerToggle}
            isAuth={isAuth}
            logoutHandler={logoutHandler}
          />
          <div className="booking-intro">
            <h2 className="booking-intro__heading">reservations</h2>
            <p className="booking-intro__text">we can't wait to serve you</p>
          </div>
        </section>

        <section className="booking-information">
          <h3 className="booking-information__heading">reserve now</h3>
          <BookingForm submitForm={e => this.onSubmit(e)} />
        </section>

        <Footer />
      </Fragment>
    );
  }
}

export default Booking;
