import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handlePaymentSubmit } from "../../store/utils/paymentUtility";

import Mastercard from "../../images/mastercard.png";
import Maestrocard from "../../images/maestro.png";
import Visacard from "../../images/visa.png";
import Amex from "../../images/amex.png";
import JCB from "../../images/jcb.png";

import Modal from "../../components/modal/modal";
import Backdrop from "../../components/backdrop/backdrop";

import {
	useStripe,
	useElements,
	CardNumberElement,
	CardCvcElement,
	CardExpiryElement,
} from "@stripe/react-stripe-js";

////////////STRIPE ELEMENT///////////////
const CheckoutForm = (props) => {
	const { products } = props;

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
		const history = props.history;
		const token = props.token;
		if (!result.error) {
			setPayment(false);
			localStorage.setItem("billingEmail", billing.email);
			localStorage.setItem("billingName", billing.name);
			props.submitPayment(history, token);
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

	return (
		<Fragment>
			{props.dataLoading ? loadingState : null}
			<form onSubmit={handleSubmit} className="stripe-checkout">
				{props.guest ? (
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
								placeholder="John Doe"
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
								placeholder="e.g. email@example.com"
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
						: `Reserve Now For $${props.products.price}`}
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

const mapStateToProps = (state) => {
	return {
		isAuth: state.authentication.isAuth,
		products: state.payment.products,
		dataLoading: state.payment.setDataLoading,
		token: state.authentication.token,
		guest: state.payment.guest,
	};
};

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			submitPayment: (history, token) => handlePaymentSubmit(history, token),
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);
