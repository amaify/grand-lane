import React, { Fragment, Component } from "react";
import { Redirect, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import BookingInfo from "../../components/form/booking-info";

import SvgIcon from "../../components/svgIcons/svg";

import SedanImage from "../../images/business-sedan-4.jpg";
import VanImage from "../../images/business-van.png";

class SelectVehicle extends Component {
  state = {
    price: 0,
    selectedVehicle: "",
  };

  onSubmitHandlerOne() {
    let priceValue = document.getElementById("sedan-value").innerHTML;
    this.setState(
      {
        price: Number(priceValue),
        selectedVehicle: "Business Sedan",
      },
      () => {
        localStorage.setItem("vehicle", this.state.selectedVehicle);
        localStorage.setItem("price", this.state.price);
        this.props.history.push("/reservation/options");
      }
    );
  }

  onSubmitHandlerTwo() {
    let priceValue = document.getElementById("van-value").innerHTML;
    this.setState(
      {
        price: Number(priceValue),
        selectedVehicle: "Business Van/SUV",
      },
      () => {
        localStorage.setItem("vehicle", this.state.selectedVehicle);
        localStorage.setItem("price", this.state.price);
        this.props.history.push("/reservation/options");
      }
    );
  }

  render() {
    const { sideDrawerToggle, isAuth, logoutHandler } = this.props;
    let details = JSON.parse(localStorage.getItem("distance"));
    let hours = localStorage.getItem("hours");

    let sedanPrice, vanPrice;

    if (!hours) {
      sedanPrice = localStorage.getItem("sedanPrice");
      vanPrice = localStorage.getItem("vanPrice");
    } else {
      sedanPrice = localStorage.getItem("sedanHour") * hours;
      vanPrice = localStorage.getItem("vanHour") * hours;
    }

    let selectVehicle = (
      <Fragment>
        <Helmet>
          <title>Select a Ride - GrandLane Services</title>
        </Helmet>
        <BookingInfo />

        <section className="booking-details">
          <div className="booking-details__contents">
            <div className="booking-details__content">
              <h3 className="booking-details__content--heading">
                business class
              </h3>
              <div className="booking-details__content--elements">
                <p className="booking-details__content--element">
                  <span className="booking-details__content--element-icon">
                    <SvgIcon name="users" />
                  </span>
                  <span className="booking-details__content--element-text">
                    Max. 2
                  </span>
                </p>
                <p className="booking-details__content--element">
                  <span className="booking-details__content--element-icon">
                    <SvgIcon name="luggage" />
                  </span>
                  <span className="booking-details__content--element-text">
                    Max. 2
                  </span>
                </p>
              </div>
            </div>

            <div className="booking-details__content--desc">
              <ul className="booking-details__content--desc-list">
                <li>
                  &ndash; Free 60 minutes wait time for airport pickups, 15 mins
                  for all others
                </li>
                <li>&ndash; Includes Meet & Greet</li>
                <li>&ndash; Free cancellation up until 1 hour before pickup</li>
              </ul>

              <div className="booking-details__content--desc-img">
                <img src={SedanImage} alt="A Sedan Vehicle" />
              </div>

              <div className="booking-details__content--desc-price">
                <div className="select-vehicle__form--content">
                  <p className="price price-value" id="sedan-value">
                    {sedanPrice}
                  </p>
                  <p className="price">USD</p>
                </div>
                <p className="dets">All Prices Include VAT, Fees & Tip.</p>
                <button
                  onClick={this.onSubmitHandlerOne.bind(this)}
                  id="sedan-select"
                >
                  Select
                </button>
              </div>
            </div>
          </div>

          <div className="booking-details__contents">
            <div className="booking-details__content">
              <h3 className="booking-details__content--heading">
                business van/suv
              </h3>
              <div className="booking-details__content--elements">
                <p className="booking-details__content--element">
                  <span className="booking-details__content--element-icon">
                    <SvgIcon name="users" />
                  </span>
                  <span className="booking-details__content--element-text">
                    Max. 4
                  </span>
                </p>
                <p className="booking-details__content--element">
                  <span className="booking-details__content--element-icon">
                    <SvgIcon name="luggage" />
                  </span>
                  <span className="booking-details__content--element-text">
                    Max. 5
                  </span>
                </p>
              </div>
            </div>

            <div className="booking-details__content--desc">
              <ul className="booking-details__content--desc-list">
                <li>
                  &ndash; Free 60 minutes wait time for airport pickups, 15 mins
                  for all others
                </li>
                <li>&ndash; Includes Meet & Greet</li>
                <li>&ndash; Free cancellation up until 1 hour before pickup</li>
              </ul>

              <div className="booking-details__content--desc-img">
                <img src={VanImage} alt="A Van" />
              </div>

              <div className="booking-details__content--desc-price">
                <div className="select-vehicle__form--content">
                  <p className="price price-value" id="van-value">
                    {vanPrice}
                  </p>
                  <p className="price">USD</p>
                </div>
                <p className="dets">All Prices Include VAT, Fees & Tip.</p>
                <button
                  onClick={this.onSubmitHandlerTwo.bind(this)}
                  id="van-select"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );

    if (!details) {
      selectVehicle = (
        <Switch>
          <Redirect to="/reservation" />;
        </Switch>
      );
    }
    return (
      <Fragment>
        <section className="booking">
          <Header
            drawerToggle={sideDrawerToggle}
            isAuth={isAuth}
            logoutHandler={logoutHandler}
          />
          <div className="booking-intro">
            <h2 className="booking-intro__heading">service class</h2>
            <p className="booking-intro__text">
              select the vehicle that suits your need
            </p>
          </div>
        </section>
        {selectVehicle}
        <Footer />
      </Fragment>
    );
  }
}

export default SelectVehicle;
