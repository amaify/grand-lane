import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Redirect, Switch } from "react-router-dom";

/////IMPORTS FOR STRIPE
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//////////////
import Header from "../../components/header/header";
import CheckoutForm from "../../components/form/checkout-form";
import Modal from "../../components/modal/modal";
import Backdrop from "../../components/backdrop/backdrop";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

function Checkout(props) {
	const [products] = useState({
		name: `${localStorage.getItem("serviceType")}`,
		price: localStorage.getItem("price"),
		productBy: "GrandLane chauffeurs",
		customerName: `${localStorage.getItem("firstName")} ${localStorage.getItem(
			"lastName"
		)}`,
		customerEmail: localStorage.getItem("email"),
	});

	const vehicleImage = localStorage.getItem("vehicleImage");

	let checkout;
	checkout = (
		<section className="checkout">
			<article className="checkout-content checkout-content__details">
				<h2 className="checkout-content__details--heading">
					{`Order for ${products.name}`}
				</h2>
				<p className="checkout-content__details--price">{`$${products.price}`}</p>
				<div className="checkout-content__details--image">
					<p className="checkout-content__details--text">Selected Ride</p>
					<img src={vehicleImage} alt="Selected Ride" />
				</div>
			</article>
			<article className="divider"></article>
			<article className="checkout-content checkout-content__card">
				<h2 className="checkout-content__card--heading">Pay with Card</h2>
				<Elements stripe={stripePromise}>
					<CheckoutForm history={props.history} />
				</Elements>
			</article>
		</section>
	);

	let loadingState = (
		<Fragment>
			<Backdrop />
			<Modal />
		</Fragment>
	);

	if (!props.checkoutRoute) {
		checkout = (
			<Switch>
				<Redirect to="/reservation" />;
			</Switch>
		);
	}

	return (
		<Fragment>
			{props.paymentProcessing ? loadingState : null}
			<Helmet>
				<title>{`Order For - ${products.name} - Grandlane Chauffeur Services`}</title>
			</Helmet>
			<section className="forgotPassword">
				<Header />
			</section>
			{checkout}
		</Fragment>
	);
}

const mapStateToProps = (state) => {
	return {
		paymentProcessing: state.payment.setPaymentLoading,
		checkoutRoute: state.route.checkoutRoute,
	};
};

export default connect(mapStateToProps)(Checkout);
