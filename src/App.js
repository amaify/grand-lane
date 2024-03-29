import React, { Component, Fragment } from "react";
// import memoize from "memoize-one";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionType from "./store/actions/actionType";
// import loadable from "@loadable/component";
// import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AOS from "aos";
import "aos/dist/aos.css";

import SideDrawer from "./components/navigation/mobileToggle/sideDrawer";
import Backdrop from "./components/backdrop/backdrop";
import Modal from "./components/modal/modal";
import RouteComponent from "./components/routes/routes";

import "./scss/main.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			distance: {},
			pickupDate: null,
			pickupTime: null,
			hours: null,
			serviceType: null,
			error: null,
		};
	}

	componentDidMount() {
		AOS.init({});
		const token = localStorage.getItem("token");
		const expiryDate = localStorage.getItem("expiryDate");

		if (!token || !expiryDate) {
			return;
		}

		if (new Date(expiryDate) <= new Date()) {
			this.props.logoutHandler();
			return;
		}

		const remainingMilliseconds =
			new Date(expiryDate).getTime() - new Date().getTime();

		this.setAutoLogout(remainingMilliseconds);
	}

	componentDidUpdate(prevProps) {
		const { location } = this.props;

		if (location !== prevProps.location && this.props.sideDrawerOpen) {
			this.props.drawerToggle();
		}

		if (location !== prevProps.location) {
			window.scrollTo(0, 0);
			this.setState({ error: null });
		}
	}

	submitLocationHandler = (e, locationData) => {
		e.preventDefault();
		this.props.loading();

		let destination;

		if (!locationData.destination) {
			destination = null;
		} else {
			destination = locationData.destination;
		}
		const data = {
			origin: locationData.origin,
			destination: locationData.destination,
		};

		localStorage.setItem("destination", destination);

		const timeData = {
			date: locationData.date,
			time: locationData.time,
			hours: locationData.hour,
			serviceType: locationData.service,
		};

		fetch("https://grand-lane.herokuapp.com/contact/distance", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((resData) => {
				if (resData.distance.status === "OK") {
					this.setState({
						distance: resData,
						pickupDate: timeData.date,
						pickupTime: timeData.time,
						hours: timeData.hours,
						serviceType: timeData.serviceType,
					});
					this.props.loadingCompleted();

					localStorage.setItem("sedanPrice", resData.sedan);
					localStorage.setItem("vanPrice", resData.van);
					localStorage.setItem("sedanHour", resData.sedanHour);
					localStorage.setItem("vanHour", resData.vanHour);
					localStorage.setItem("fixedPrice", resData.fixedPrice);
					localStorage.setItem("distanceValue", resData.distValue);
					localStorage.setItem("distance", JSON.stringify(this.state.distance));
					localStorage.setItem("date", this.state.pickupDate);
					localStorage.setItem("time", this.state.pickupTime);

					if (this.state.serviceType) {
						localStorage.setItem("serviceType", this.state.serviceType);
					} else {
						localStorage.setItem("serviceType", "Hourly Service");
					}

					if (this.state.hours) {
						localStorage.setItem("hours", this.state.hours);
					} else {
						localStorage.setItem("hours", "");
					}

					this.props.setVehicleRoute();
					this.props.history.push("/reservation/select-vehicle");
				}
			})
			.catch((err) => {
				this.props.submitLocationError(err);
			});
	};

	//AUTO LOGOUT CODE
	setAutoLogout = (milliseconds) => {
		setTimeout(() => {
			this.logoutHandler();
		}, milliseconds);
	};
	//END OF AUTO LOGOUT CODE

	render() {
		let backDrop;
		if (this.props.sideDrawerOpen || this.props.authPending) {
			backDrop = <Backdrop />;
		}

		/////////////////// CODE FOR LOADABLE COMPONENT ///////////
		// const style = {
		// 	position: "absolute",
		// 	top: "50%",
		// 	left: "50%",
		// 	transform: "translate(-50%, -50%)",
		// };
		// const HomePage = loadable(() => import("./pages/home/home"), {
		// 	fallback: (
		// 		<Loader
		// 			type="Rings"
		// 			color="#3f80e5"
		// 			height={100}
		// 			width={100}
		// 			style={style}
		// 		/>
		// 	),
		// });

		// const AboutPage = loadable(() => import("./pages/about/about"), {
		// 	fallback: (
		// 		<Loader
		// 			type="Rings"
		// 			color="#3f80e5"
		// 			height={100}
		// 			width={100}
		// 			style={style}
		// 		/>
		// 	),
		// });

		// const ServicePage = loadable(() => import("./pages/service/service"), {
		// 	fallback: (
		// 		<Loader
		// 			type="Rings"
		// 			color="#3f80e5"
		// 			height={100}
		// 			width={100}
		// 			style={style}
		// 		/>
		// 	),
		// });

		// const Contact = loadable(() => import("./pages/contact/contact"), {
		// 	fallback: (
		// 		<Loader
		// 			type="Rings"
		// 			color="#3f80e5"
		// 			height={100}
		// 			width={100}
		// 			style={style}
		// 		/>
		// 	),
		// });

		// const BookingPage = loadable(() => import("./pages/booking/booking"), {
		// 	fallback: (
		// 		<Loader
		// 			type="Rings"
		// 			color="#3f80e5"
		// 			height={100}
		// 			width={100}
		// 			style={style}
		// 		/>
		// 	),
		// });

		// const Login = loadable(() => import("./pages/auth/login"), {
		// 	fallback: (
		// 		<Loader
		// 			type="Rings"
		// 			color="#3f80e5"
		// 			height={100}
		// 			width={100}
		// 			style={style}
		// 		/>
		// 	),
		// });

		// const Signup = loadable(() => import("./pages/auth/signup"), {
		// 	fallback: (
		// 		<Loader
		// 			type="Rings"
		// 			color="#3f80e5"
		// 			height={100}
		// 			width={100}
		// 			style={style}
		// 		/>
		// 	),
		// });

		// const SelectVehicle = loadable(
		// 	() => import("./pages/booking/select-vehicle"),
		// 	{
		// 		fallback: (
		// 			<Loader
		// 				type="Rings"
		// 				color="#3f80e5"
		// 				height={100}
		// 				width={100}
		// 				style={style}
		// 			/>
		// 		),
		// 	}
		// );

		// const Options = loadable(() => import("./pages/booking/options"), {
		// 	fallback: (
		// 		<Loader
		// 			type="Rings"
		// 			color="#3f80e5"
		// 			height={100}
		// 			width={100}
		// 			style={style}
		// 		/>
		// 	),
		// });

		// const Checkout = loadable(() => import("./pages/checkout/checkout"), {
		// 	fallback: (
		// 		<Loader
		// 			type="Rings"
		// 			color="#3f80e5"
		// 			height={100}
		// 			width={100}
		// 			style={style}
		// 		/>
		// 	),
		// });

		// const Orders = loadable(() => import("./pages/orders/orders"), {
		// 	fallback: (
		// 		<Loader
		// 			type="Rings"
		// 			color="#3f80e5"
		// 			height={100}
		// 			width={100}
		// 			style={style}
		// 		/>
		// 	),
		// });

		// const SingleOrder = loadable(
		// 	() => import("./pages/orders/singleOrder/singleOrder"),
		// 	{
		// 		fallback: (
		// 			<Loader
		// 				type="Rings"
		// 				color="#3f80e5"
		// 				height={100}
		// 				width={100}
		// 				style={style}
		// 			/>
		// 		),
		// 	}
		// );

		// const ForgotPassword = loadable(
		// 	() => import("./pages/auth/forgot-password"),
		// 	{
		// 		fallback: (
		// 			<Loader
		// 				type="Rings"
		// 				color="#3f80e5"
		// 				height={100}
		// 				width={100}
		// 				style={style}
		// 			/>
		// 		),
		// 	}
		// );

		// const ResetPassword = loadable(
		// 	() => import("./pages/auth/reset-password"),
		// 	{
		// 		fallback: (
		// 			<Loader
		// 				type="Rings"
		// 				color="#3f80e5"
		// 				height={100}
		// 				width={100}
		// 				style={style}
		// 			/>
		// 		),
		// 	}
		// );

		// const BookingSuccess = loadable(
		// 	() => import("./pages/booking/booking-successful"),
		// 	{
		// 		fallback: (
		// 			<Loader
		// 				type="Rings"
		// 				color="#3f80e5"
		// 				height={100}
		// 				width={100}
		// 				style={style}
		// 			/>
		// 		),
		// 	}
		// );

		// const HomePage = loadable(() => import("./pages/home/home"));

		// const AboutPage = loadable(() => import("./pages/about/about"));

		// const ServicePage = loadable(() => import("./pages/service/service"));

		// const Contact = loadable(() => import("./pages/contact/contact"));

		// const BookingPage = loadable(() => import("./pages/booking/booking"));

		// const Login = loadable(() => import("./pages/auth/login"));

		// const Signup = loadable(() => import("./pages/auth/signup"));

		// const SelectVehicle = loadable(() =>
		// 	import("./pages/booking/select-vehicle")
		// );

		// const Options = loadable(() => import("./pages/booking/options"));

		// const Checkout = loadable(() => import("./pages/checkout/checkout"));

		// const Orders = loadable(() => import("./pages/orders/orders"));

		// const SingleOrder = loadable(() =>
		// 	import("./pages/orders/singleOrder/singleOrder")
		// );

		// const ForgotPassword = loadable(() =>
		// 	import("./pages/auth/forgot-password")
		// );

		// const ResetPassword = loadable(() => import("./pages/auth/reset-password"));

		// const BookingSuccess = loadable(() =>
		// 	import("./pages/booking/booking-successful")
		// );

		// let routes = (
		// 	<RouteComponent
		// 		submitLocationHandler={this.submitLocationHandler}
		// 		HomePage={HomePage}
		// 		AboutPage={AboutPage}
		// 		ServicePage={ServicePage}
		// 		Contact={Contact}
		// 		Orders={Orders}
		// 		BookingPage={BookingPage}
		// 		Options={Options}
		// 		SelectVehicle={SelectVehicle}
		// 		BookingSuccess={BookingSuccess}
		// 		Login={Login}
		// 		Signup={Signup}
		// 		SingleOrder={SingleOrder}
		// 		Checkout={Checkout}
		// 		ForgotPassword={ForgotPassword}
		// 		ResetPassword={ResetPassword}
		// 	/>
		// );

		let routes = (
			<RouteComponent submitLocationHandler={this.submitLocationHandler} />
		);

		return (
			<div className="App">
				<Fragment>
					{routes}
					{this.props.sideDrawerOpen && <SideDrawer />}

					{this.props.locationError ? (
						<div className="booking-error">
							<Backdrop click={this.props.closeModal} />
							<div className="booking-error__content">
								<p className="booking-error__content--text">
									Network error occured when trying to establish connection with
									the database
								</p>
								<button
									className="booking-error__content--btn"
									onClick={this.props.closeModal}
								>
									Close
								</button>
							</div>
						</div>
					) : null}
					{backDrop}
					{this.props.showModal ? <Modal /> : null}
				</Fragment>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		showModal: state.authentication.showModal,
		authPending: state.authentication.authPending,
		error: state.authentication.error,
		locationError: state.authentication.showError,
		sideDrawerOpen: state.sideDrawer.sideDrawerOpen,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		drawerToggle: () => dispatch({ type: actionType.DRAWER_TOGGLE }),
		logoutHandler: () => dispatch({ type: actionType.LOGOUT }),
		loading: () => dispatch({ type: actionType.LOGIN_PENDING }),
		loadingCompleted: () => dispatch({ type: actionType.SIGNUP_SUCCESS }),
		submitLocationError: () => dispatch({ type: actionType.SHOW_ERROR }),
		closeModal: () => dispatch({ type: actionType.CLOSE_MODAL }),
		setVehicleRoute: () => dispatch({ type: actionType.SELECTED_VEHICLE }),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
