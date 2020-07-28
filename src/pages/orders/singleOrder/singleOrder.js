import React, { Component, Fragment } from "react";
import { Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import SedanImage from "../../../images/business-sedan-4.jpg";
import VanImage from "../../../images/business-van.png";

import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import Loader from "../../../components/loader/loader";

class SingleOrder extends Component {
  state = {
    singleOrder: JSON.parse(localStorage.getItem("singleRide")) || {},
    loading: false,
    errMessage: null,
    error: false
  };

  componentDidMount() {
    if (!this.state.loading) {
      this.setState({ loading: true });
    }
    this.getRideDetails();
  }

  getRideDetails = () => {
    const orderId = this.props.match.params.orderId;
    const graphqlQuery = {
      query: `
            {
                getRide(id: "${orderId}") {
                    origin
                    destination
                    pickupDate
                    pickupTime
                    duration
                    distance
                    price
                    pickupSign
                    phoneNumber
                    flightNumber
                    notes
                    vehicleType
                    hours
                    serviceType
                }
            }
          `
    };

    fetch("https://grand-lane.herokuapp.com/graphql", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + this.props.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(graphqlQuery)
    })
      .then(response => response.json())
      .then(resData => {
        if (resData.errors && resData.errors[0].status === 422) {
          throw new Error("Ride not Found!");
        }

        localStorage.setItem(
          "singleRide",
          JSON.stringify(resData.data.getRide)
        );
        this.setState({
          singleOrder: resData.data.getRide,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false, errMessage: err.message });
      });
  };

  render() {
    const { sideDrawerToggle, isAuth, logoutHandler } = this.props;
    const { singleOrder, error } = this.state;

    if (!isAuth) {
      return (
        <Switch>
          <Redirect to="/" />
        </Switch>
      );
    }

    let image;
    let vehicleType = singleOrder.vehicleType;

    if (vehicleType === "Business Sedan") {
      image = SedanImage;
    } else {
      image = VanImage;
    }

    let single;

    single = (
      <Fragment>
        <Helmet>
          <title>{`Order - ${this.props.match.params.orderId}`}</title>
        </Helmet>
        <div className="order-content__container">
          <h4 className="order-content__container--heading">pick up address</h4>
          <p className="order-content__container--text">{singleOrder.origin}</p>
        </div>
        <div className="order-content__container">
          <h4 className="order-content__container--heading">
            drop off address
          </h4>
          <p className="order-content__container--text">
            {singleOrder.destination}
          </p>
        </div>
        <div className="order-content__container">
          <h4 className="order-content__container--heading">pick up date</h4>
          <p className="order-content__container--text">
            {singleOrder.pickupDate}
          </p>
        </div>
        <div className="order-content__container">
          <h4 className="order-content__container--heading">pick up time</h4>
          <p className="order-content__container--text">
            {singleOrder.pickupTime}
          </p>
        </div>
        <div className="order-content__container">
          <h4 className="order-content__container--heading">duration</h4>
          <p className="order-content__container--text">
            {singleOrder.duration}
          </p>
        </div>
        <div className="order-content__container">
          <h4 className="order-content__container--heading">distance</h4>
          <p className="order-content__container--text">
            {singleOrder.distance}
          </p>
        </div>
        <div className="order-content__container">
          <h4 className="order-content__container--heading">type of service</h4>
          <p className="order-content__container--text">
            {singleOrder.serviceType}
          </p>
        </div>
        {singleOrder.hours !== "undefined" ? (
          <div className="order-content__container">
            <h4 className="order-content__container--heading">Hours</h4>
            <p className="order-content__container--text">
              {singleOrder.hours + " Hour(s)"}
            </p>
          </div>
        ) : null}
        {singleOrder.flightNumber !== "" ? (
          <div className="order-content__container">
            <h4 className="order-content__container--heading">flight number</h4>
            <p className="order-content__container--text">
              {singleOrder.flightNumber}
            </p>
          </div>
        ) : null}
        {singleOrder.pickupSign !== "" ? (
          <div className="order-content__container">
            <h4 className="order-content__container--heading">pick up sign</h4>
            <p className="order-content__container--text">
              {singleOrder.pickupSign}
            </p>
          </div>
        ) : null}
        {singleOrder.phoneNumber !== "" ? (
          <div className="order-content__container">
            <h4 className="order-content__container--heading">phone number</h4>
            <p className="order-content__container--text">
              {singleOrder.phoneNumber}
            </p>
          </div>
        ) : null}
        {singleOrder.notes !== "" ? (
          <div className="order-content__container">
            <h4 className="order-content__container--heading">
              notes for the driver
            </h4>
            <p className="order-content__container--text">
              {singleOrder.notes}
            </p>
          </div>
        ) : null}
      </Fragment>
    );

    return (
      <Fragment>
        <section className="orders">
          <Header
            isAuth={isAuth}
            drawerToggle={sideDrawerToggle}
            logoutHandler={logoutHandler}
          />
        </section>

        <section className="order-details">
          <div className="order-details__header">
            <h3 className="order-details__header--heading">your order</h3>
            <p className="order-details__header--text">
              Thank you for your patronage; We look forward to serving you
              again. Below, you will find the details of your ride
            </p>
          </div>
        </section>

        <section className="order-information">
          <h3 className="order-information__heading">
            reservation information
          </h3>
          <article className="order-content">
            {this.state.loading ? <Loader /> : single}
          </article>

          {!error ? (
            <section className="order-vehicle">
              <h3 className="order-vehicle__heading">selected car</h3>
              <p className="order-vehicle__text">{singleOrder.vehicleType}</p>
              <div className="order-vehicle__image">
                <img src={image} alt="Selected Vehicle" />
              </div>
            </section>
          ) : null}
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default SingleOrder;
