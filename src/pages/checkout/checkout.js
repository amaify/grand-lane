import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";

import Mastercard from "../../images/mastercard.png";
import Maestrocard from "../../images/maestro.png";
import Visacard from "../../images/visa.png";
import Amex from "../../images/amex.png";
import JCB from "../../images/jcb.png";
/////IMPORTS FOR STRIPE
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
//////////////
import Header from "../../components/header/header";
import Modal from "../../components/modal/modal";
import Backdrop from "../../components/backdrop/backdrop";
import SedanImage from "../../images/business-sedan-4.jpg";
import VanImage from "../../images/business-van.png";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

function Checkout(props) {
  const [, setErrorMessage] = useState(null);
  const [, setShowInfo] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [, setPaymentInfo] = useState(false);
  const [products] = useState({
    name: `${localStorage.getItem("serviceType")}`,
    price: localStorage.getItem("price"),
    productBy: "GrandLane chauffeurs",
    customerName: `${localStorage.getItem("firstName")} ${localStorage.getItem(
      "lastName"
    )}`,
    customerEmail: localStorage.getItem("email"),
  });

  const removeItemsFromStorage = () => {
    localStorage.removeItem("ridesId");
    localStorage.removeItem("price");
    localStorage.removeItem("date");
    localStorage.removeItem("distance");
    localStorage.removeItem("hours");
    localStorage.removeItem("serviceType");
    localStorage.removeItem("time");
    localStorage.removeItem("vehicle");
    localStorage.removeItem("vanPrice");
    localStorage.removeItem("sedanPrice");
    localStorage.removeItem("sedanHour");
    localStorage.removeItem("vanHour");
    localStorage.removeItem("serviceType");
    localStorage.removeItem("time");
    localStorage.removeItem("flightNumber");
    localStorage.removeItem("pickupSign");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("notes");
    localStorage.removeItem("billingEmail");
  };

  const handleSubmitData = () => {
    setDataLoading(true);

    let origin;
    let destination;
    let service;
    let numberOfHours;
    let duration;
    let distance;
    const vehicleType = localStorage.getItem("vehicle");
    const date = localStorage.getItem("date");
    const time = localStorage.getItem("time");
    const price = localStorage.getItem("price");
    const serviceType = localStorage.getItem("serviceType");
    const hours = localStorage.getItem("hours");
    const flightNumber = localStorage.getItem("flightNumber");
    const pickupSign = localStorage.getItem("pickupSign");
    const phoneNumber = localStorage.getItem("phoneNumber");
    const notes = localStorage.getItem("notes");
    const distanceDetails = JSON.parse(localStorage.getItem("distance"));
    const billingEmail = localStorage.getItem("billingEmail");

    if (serviceType) {
      service = localStorage.getItem("serviceType");
    }
    if (hours) {
      numberOfHours = localStorage.getItem("hours");
    }
    origin = distanceDetails.distance.origin_addresses[0];
    destination = distanceDetails.distance.destination_addresses[0];
    duration = distanceDetails.distance.rows[0].elements[0].duration.text;
    distance = distanceDetails.distance.rows[0].elements[0].distance.text;

    const graphqlQuery = {
      query: `
        mutation {
          createRide(userInput: {
            origin: "${origin}",
            destination: "${destination}",
            pickupDate: "${date}",
            pickupTime: "${time}",
            duration: "${duration}",
            distance: "${distance}",
            vehicleType: "${vehicleType}",
            price: "${price}",
            serviceType: "${service}"
            hours: "${numberOfHours}",
            flightNumber: "${flightNumber}",
            pickupSign: "${pickupSign}",
            phoneNumber: "${phoneNumber}",
            billingEmail: "${billingEmail}",
            notes: "${notes}"
          }){
            _id
            origin
            destination
            price
            vehicleType
            pickupDate
            pickupTime
            duration
            distance
          }
        }
      `,
    };
    fetch("https://grand-lane.herokuapp.com/graphql", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + props.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphqlQuery),
    })
      .then((response) => response.json())
      .then((resData) => {
        if (resData.errors && resData.errors[0].status === 401) {
          throw new Error("Not Authenticated");
        }
        if (resData.errors) {
          throw new Error("User not Found!");
        }
        setDataLoading(false);
        setPaymentInfo(false);
        props.history.replace("/booking-successful");
        removeItemsFromStorage();
      })
      .catch((err) => {
        setDataLoading(false);
        setShowInfo(true);
        setErrorMessage(err.message);
      });
  };

  ////////////STRIPE ELEMENT///////////////
  const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentInfo, setPayment] = useState(false);
    const [cardInfo, setcardInfo] = useState(true);
    const [error, setError] = useState(false);
    const [errMessage, setMessage] = useState(null);
    const [billing, setBillingDetails] = useState({
      name: "",
      email: "",
    });

    const changeCardNumber = (e) => {
      if (e.complete) {
        return;
      }
    };

    const changeCardCvc = (e) => {
      if (e.complete) {
        return;
      }
    };

    const changeCardExpiry = (e) => {
      if (e.complete) {
        setcardInfo(false);
      }
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      setPayment(true);

      let billingDetails;

      if (props.isAuth) {
        billingDetails = {
          name: products.customerName,
          email: products.customerEmail,
        };
      } else {
        billingDetails = {
          name: billing.name,
          email: billing.email,
        };
      }

      const productData = {
        product: {
          name: products.name,
          customerName: products.customerName,
          email: products.customerEmail,
          price: products.price,
          productBy: products.productBy,
        },
      };

      let clientSecret;
      await fetch("https://grand-lane.herokuapp.com/contact/payment", {
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((resData) => {
          if (resData.statusCode === 500) {
            throw new Error(resData.message);
          }
          clientSecret = resData.data;
        })
        .catch((err) => {
          setError(true);
          setMessage(err.message);
          setPayment(false);
        });
      if (clientSecret === undefined) {
        setPayment(false);
        setError(true);
        setMessage("Oops! Something went wrong! Client Secret not found!");
        return;
      }

      const { paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardNumberElement),
        billing_details: billingDetails,
      });
      if (paymentMethod === undefined) {
        setPayment(false);
        setError(true);
        setMessage("Oops! Something went wrong! Payment method not found!");
        return;
      }
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
        receipt_email: productData.product.email,
        setup_future_usage: "off_session",
      });
      if (!result.error) {
        setPayment(false);
        localStorage.setItem("billingEmail", billing.email);
        handleSubmitData();
      } else {
        setPayment(false);
        setError(true);
        setMessage(result.error.message);
      }
    };
    const closeModal = () => {
      setError(false);
    };
    const options = {
      style: {
        base: {
          fontSize: "14px",
          color: "#fff",
          iconColor: "#fff",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#f3094f",
          iconColor: "#f3094f",
        },
      },
    };

    let loadingState = (
      <Fragment>
        <Backdrop />
        <Modal />
      </Fragment>
    );

    const guest = props.location.state.guest;

    return (
      <Fragment>
        {dataLoading ? loadingState : null}
        <form onSubmit={handleSubmit} className="stripe-checkout">
          {guest ? (
            <Fragment>
              <div className="stripe-checkout__input">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  required
                  id="name"
                  autoComplete="name"
                  value={billing.name}
                  onChange={(e) => {
                    setBillingDetails({
                      ...billing,
                      name: e.target.value,
                    });
                  }}
                  placeholder="James Madisson"
                />
              </div>

              <div className="stripe-checkout__input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  required
                  id="email"
                  autoComplete="email"
                  value={billing.email}
                  onChange={(e) =>
                    setBillingDetails({
                      ...billing,
                      email: e.target.value,
                    })
                  }
                  placeholder="james.madisson@yahoo.com"
                />
              </div>
            </Fragment>
          ) : null}

          <div>
            <label htmlFor="cardNumber">Card Number</label>
            <CardNumberElement
              className="stripe-checkout__btn"
              onChange={(e) => changeCardNumber(e)}
              options={options}
            />
          </div>

          <div>
            <label htmlFor="cvc">Cvc</label>
            <CardCvcElement
              className="stripe-checkout__btn"
              onChange={(e) => changeCardCvc(e)}
              options={options}
            />
          </div>

          <div>
            <label htmlFor="expiryDate">Expiry Date</label>
            <CardExpiryElement
              className="stripe-checkout__btn"
              onChange={(e) => changeCardExpiry(e)}
              options={options}
            />
          </div>

          <button type="submit" disabled={paymentInfo || cardInfo}>
            {paymentInfo
              ? "Processing..."
              : `Reserve Now For $${products.price}`}
          </button>
          <section className="cards">
            <div className="cards-item">
              <img src={Mastercard} alt="Mastercard Logo" />
            </div>
            <div className="cards-item">
              <img src={Visacard} alt="Visacard Logo" />
            </div>
            <div className="cards-item">
              <img src={Amex} alt="American Express Logo" />
            </div>
            <div className="cards-item">
              <img src={Maestrocard} alt="Maestrocard Logo" />
            </div>
            <div className="cards-item">
              <img src={JCB} alt="JCB card logo" />
            </div>
          </section>
        </form>
        {error ? (
          <div className="booking-error">
            <Backdrop click={closeModal} />
            <div className="booking-error__content">
              <p className="booking-error__content--text">{errMessage}</p>
              <button
                className="booking-error__content--btn"
                onClick={closeModal}
              >
                close
              </button>
            </div>
          </div>
        ) : null}
      </Fragment>
    );
  };
  /////////////////////////////////////////

  const vehicle = localStorage.getItem("vehicle");

  let image;

  vehicle === "Business Van/SUV" ? (image = VanImage) : (image = SedanImage);

  return (
    <Fragment>
      <Helmet>
        <title>{`Order For - ${products.name} - GrandLane Services`}</title>
      </Helmet>
      <section className="forgotPassword">
        <Header drawerToggle={props.sideDrawerToggle} isAuth={props.isAuth} />
      </section>
      <section className="checkout">
        <article className="checkout-content checkout-content__details">
          <h2 className="checkout-content__details--heading">
            {`Order for ${products.name}`}
          </h2>
          <p className="checkout-content__details--price">{`$${products.price}`}</p>
          <div className="checkout-content__details--image">
            <p className="checkout-content__details--text">Selected Ride</p>
            <img src={image} alt="Selected Ride" />
          </div>
        </article>
        <article className="divider"></article>
        <article className="checkout-content checkout-content__card">
          <h2 className="checkout-content__card--heading">Pay with Card</h2>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </article>
      </section>
    </Fragment>
  );
}

export default Checkout;
