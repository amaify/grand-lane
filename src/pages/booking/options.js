import React, { Component, Fragment } from "react";
import { Redirect, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import * as actionType from "../../store/actions/actionType";

import Input from "../../components/form/booking-input";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import BookingInfo from "../../components/form/booking-info";
import Modal from "../../components/modal/modal";
import Backdrop from "../../components/backdrop/backdrop";

class Options extends Component {
	_isMounted = false;

	constructor(props) {
		super(props);
		this.state = {
			flightNumber: "",
			pickupSign: "",
			phoneNumber: "",
			notes: "",
			dataLoading: false,
			errMessage: null,
			showInfo: false,
			paymentInfo: false,
			guest: false,
			setOptions: false,
		};
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	handleChange = (e) => {
		e.preventDefault();

		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value,
		});
	};

	registerHandler() {
		this.props.history.replace("/login");
		return;
	}

	guestHandler() {
		const { pickupSign, phoneNumber, flightNumber, notes } = this.state;

		this.setState({ setOptions: false }, () => {
			this.props.setGuest();
			localStorage.setItem("flightNumber", flightNumber);
			localStorage.setItem("pickupSign", pickupSign);
			localStorage.setItem("phoneNumber", phoneNumber);
			localStorage.setItem("notes", notes);

			this.props.getItems();
			this.props.setCheckoutRoute();
			this.props.history.push("/checkout");
		});
	}

	handleSubmitData(event) {
		event.preventDefault();

		const { pickupSign, phoneNumber, flightNumber, notes } = this.state;

		if (!this.props.guest) {
			if (!this.props.isAuth) {
				this.setState({ setOptions: true });
				return;
			}
		}

		localStorage.setItem("flightNumber", flightNumber);
		localStorage.setItem("pickupSign", pickupSign);
		localStorage.setItem("phoneNumber", phoneNumber);
		localStorage.setItem("notes", notes);

		this.props.getItems();
		this.props.setCheckoutRoute();
		this.props.history.push("/checkout");
	}

	render() {
		const {
			flightNumber,
			pickupSign,
			phoneNumber,
			notes,
			dataLoading,
			errMessage,
			showInfo,
			setOptions,
		} = this.state;

		let transferType = localStorage.getItem("serviceType");

		let loadingState = (
			<Fragment>
				<Backdrop />
				<Modal />
			</Fragment>
		);

		let bookingOptions = (
			<Fragment>
				<BookingInfo />

				<section className="additional-info">
					{transferType !== "Airport Transfer" ? null : (
						<div className="additional-info__content">
							<h3 className="additional-info__content--heading">
								airport pickup details
							</h3>
							<p className="additional-info__content--text">
								Enter your flight number so we can track your flight status and
								pick you up when you arrive.
							</p>
						</div>
					)}
					<form
						className="additional-info__form"
						onSubmit={(e) => this.handleSubmitData(e)}
					>
						{transferType !== "Airport Transfer" ? null : (
							<Fragment>
								<Input
									label="Flight Number"
									name="flightNumber"
									placeholder="BA2490"
									control="input"
									type="text"
									id="flight-details"
									value={flightNumber}
									onChange={this.handleChange.bind(this)}
								/>
								<Input
									label="Pickup Sign"
									name="pickupSign"
									placeholder="James Madisson"
									control="input"
									type="text"
									id="pickup-sign"
									value={pickupSign}
									onChange={this.handleChange.bind(this)}
								/>
							</Fragment>
						)}

						<h3 className="additional-info__form--heading">
							additional information
						</h3>
						<Input
							label="Phone Number"
							name="phoneNumber"
							placeholder="(+1)-3333-3333"
							control="input"
							type="tel"
							id="phone-number"
							value={phoneNumber}
							onChange={this.handleChange.bind(this)}
						/>
						<Input
							label="Notes for the Chauffeur"
							name="notes"
							control="textarea"
							placeholder="Make Special Requests Here"
							rows="5"
							cols="25"
							value={notes}
							onChange={this.handleChange.bind(this)}
						/>
						<p className="special-request">
							Any special requests (Child Car Seats, ...)? Help us serve you
							better by making a request in the note box.
						</p>

						<button type="submit">Proceed to Checkout</button>
					</form>

					{setOptions ? (
						<div className="options">
							<Backdrop click={() => this.setState({ setOptions: false })} />
							<div className="options-content">
								<p className="options-content__text">
									Please Select an Option to Continue
								</p>
								<button
									className="options-content__btn options-content__btn--1"
									onClick={this.registerHandler.bind(this)}
								>
									Register
								</button>
								<button
									className="options-content__btn options-content__btn--2"
									onClick={this.guestHandler.bind(this)}
								>
									Continue as Guest
								</button>
							</div>
						</div>
					) : null}
				</section>
			</Fragment>
		);

		if (!this.props.optionsRoute) {
			bookingOptions = (
				<Switch>
					<Redirect to="/reservation" />;
				</Switch>
			);
		}

		return (
			<Fragment>
				<Helmet>
					<title>Extra Details - Grandlane Chauffeur Services</title>
				</Helmet>
				<section className="booking">
					<Header />
					<div className="booking-intro">
						<h2 className="booking-intro__heading">extra details</h2>
						<p className="booking-intro__text">we can't wait to serve you</p>
					</div>
				</section>
				{bookingOptions}
				{dataLoading ? loadingState : null}
				{showInfo ? (
					<div className="booking-error">
						<Backdrop />
						<div className="booking-error__content">
							<p className="booking-error__content--text">
								{errMessage ? errMessage : "Network error something happened"}
							</p>
							<button
								className="booking-error__content--btn"
								onClick={this.closeModal}
							>
								Close
							</button>
						</div>
					</div>
				) : null}
				<Footer />
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.authentication.isAuth,
		guest: state.payment.guest,
		optionsRoute: state.route.optionsRoute,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		setGuest: () => dispatch({ type: actionType.SET_GUEST }),
		getItems: () => dispatch({ type: actionType.GET_ITEMS_FROM_STORAGE }),
		setCheckoutRoute: () => dispatch({ type: actionType.NAV_CHECKOUT }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
