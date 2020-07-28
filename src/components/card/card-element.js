import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

const Card = () => {
  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#9e2146"
      }
    }
  };
  return <CardElement options={cardElementOptions} />;
};

export default Card;
