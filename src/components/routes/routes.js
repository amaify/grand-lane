import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../../pages/home/home";
import About from "../../pages/about/about";
import Service from "../../pages/service/service";
import Contact from "../../pages/contact/contact";
import Login from "../../pages/auth/login";
import Signup from "../../pages/auth/signup";
import Booking from "../../pages/booking/booking";
import BookingSuccess from "../../pages/booking/booking-successful";
import ForgotPassword from "../../pages/auth/forgot-password";
import ResetPassword from "../../pages/auth/reset-password";
import Orders from "../../pages/orders/orders";
import Options from "../../pages/booking/options";
import SingleOrder from "../../pages/orders/singleOrder/singleOrder";
import SelectVehicle from "../../pages/booking/select-vehicle";
import Checkout from "../../pages/checkout/checkout";

import { connect } from "react-redux";
import NotFound from "../../pages/404/not-found";

// const RouteComponent = ({
// 	isAuth,
// 	submitLocationHandler,
// 	HomePage,
// 	AboutPage,
// 	ServicePage,
// 	Contact,
// 	Login,
// 	Signup,
// 	BookingPage,
// 	BookingSuccess,
// 	ForgotPassword,
// 	ResetPassword,
// 	Orders,
// 	Options,
// 	SingleOrder,
// 	SelectVehicle,
// 	Checkout,
// }) => {
// 	let routes;

// 	const style = {
// 		position: "absolute",
// 		top: "50%",
// 		left: "50%",
// 		transform: "translate(-50%, -50%)",
// 	};

// 	!isAuth
// 		? (routes = (
// 				<Fragment>
// 					<Switch>
// 						<Route path="/" exact render={(props) => <HomePage {...props} />} />

// 						<Route
// 							path="/about"
// 							exact
// 							render={(props) => <AboutPage {...props} />}
// 						/>

// 						<Route
// 							path="/services"
// 							exact
// 							render={(props) => <ServicePage {...props} />}
// 						/>

// 						<Route
// 							path="/contact"
// 							exact
// 							render={(props) => <Contact {...props} />}
// 						/>

// 						<Route
// 							path="/login"
// 							exact
// 							render={(props) => <Login {...props} />}
// 						/>

// 						<Route
// 							path="/signup"
// 							exact
// 							render={(props) => <Signup {...props} />}
// 						/>

// 						{/* <Route
//               path="/orders"
//               exact
//               render={(props) => <Orders {...props} />}
//             />

//             <Route
//               path="/orders/:orderId"
//               render={(props) => <SingleOrder {...props} />}
//             /> */}

// 						<Route
// 							path="/reservation"
// 							exact
// 							render={(props) => (
// 								<BookingPage
// 									{...props}
// 									submitLocation={submitLocationHandler}
// 								/>
// 							)}
// 						/>
// 						<Route
// 							path="/reservation/select-vehicle"
// 							render={(props) => <SelectVehicle {...props} />}
// 						/>

// 						<Route
// 							path="/reservation/options"
// 							render={(props) => <Options {...props} />}
// 						/>

// 						<Route
// 							path="/checkout"
// 							render={(props) => <Checkout {...props} />}
// 						/>

// 						<Route
// 							path="/booking-successful"
// 							render={(props) => <BookingSuccess {...props} />}
// 						/>

// 						<Route
// 							path="/forgot-password"
// 							render={(props) => <ForgotPassword {...props} />}
// 						/>

// 						<Route
// 							path="/reset-password/:passwordToken"
// 							render={(props) => <ResetPassword {...props} />}
// 						/>
// 						<Route component={NotFound} />
// 						{/* <Redirect to="/" /> */}
// 					</Switch>
// 				</Fragment>
// 		  ))
// 		: (routes = (
// 				<Fragment>
// 					<Switch>
// 						<Route path="/" exact render={(props) => <HomePage {...props} />} />

// 						<Route
// 							path="/about"
// 							exact
// 							render={(props) => <AboutPage {...props} />}
// 						/>

// 						<Route
// 							path="/services"
// 							exact
// 							render={(props) => <ServicePage {...props} />}
// 						/>

// 						<Route
// 							path="/contact"
// 							exact
// 							render={(props) => <Contact {...props} />}
// 						/>

// 						<Route
// 							path="/reservation"
// 							exact
// 							render={(props) => (
// 								<BookingPage
// 									{...props}
// 									submitLocation={submitLocationHandler}
// 								/>
// 							)}
// 						/>
// 						<Route
// 							path="/reservation/select-vehicle"
// 							render={(props) => <SelectVehicle {...props} />}
// 						/>

// 						<Route
// 							path="/reservation/options"
// 							render={(props) => <Options {...props} />}
// 						/>

// 						<Route
// 							path="/checkout"
// 							render={(props) => <Checkout {...props} />}
// 						/>

// 						<Route
// 							path="/booking-successful"
// 							render={(props) => <BookingSuccess {...props} />}
// 						/>

// 						<Route
// 							path="/orders"
// 							exact
// 							render={(props) => <Orders {...props} />}
// 						/>

// 						<Route
// 							path="/orders/:orderId"
// 							exact
// 							render={(props) => <SingleOrder {...props} />}
// 						/>
// 						<Route component={NotFound} />
// 						{/* <Redirect to="/" /> */}
// 					</Switch>
// 				</Fragment>
// 		  ));

// 	return routes;
// };

// const mapStateToProps = (state) => {
// 	return {
// 		isAuth: state.authentication.isAuth,
// 	};
// };

// export default connect(mapStateToProps)(RouteComponent);

const RouteComponent = ({ submitLocationHandler, isAuth }) => {
	let routes;

	!isAuth
		? (routes = (
				<Fragment>
					<Switch>
						<Route path="/" exact render={(props) => <Home {...props} />} />

						<Route
							path="/about"
							exact
							render={(props) => <About {...props} />}
						/>

						<Route
							path="/services"
							exact
							render={(props) => <Service {...props} />}
						/>

						<Route
							path="/contact"
							exact
							render={(props) => <Contact {...props} />}
						/>

						<Route
							path="/login"
							exact
							render={(props) => <Login {...props} />}
						/>

						<Route
							path="/signup"
							exact
							render={(props) => <Signup {...props} />}
						/>

						<Route
							path="/reservation"
							exact
							render={(props) => (
								<Booking {...props} submitLocation={submitLocationHandler} />
							)}
						/>
						<Route
							path="/reservation/select-vehicle"
							render={(props) => <SelectVehicle {...props} />}
						/>

						<Route
							path="/reservation/options"
							render={(props) => <Options {...props} />}
						/>

						<Route
							path="/checkout"
							render={(props) => <Checkout {...props} />}
						/>

						<Route
							path="/booking-successful"
							render={(props) => <BookingSuccess {...props} />}
						/>

						<Route
							path="/forgot-password"
							render={(props) => <ForgotPassword {...props} />}
						/>

						<Route
							path="/reset-password/:passwordToken"
							render={(props) => <ResetPassword {...props} />}
						/>
						<Route component={NotFound} />
						{/* <Redirect to="/" /> */}
					</Switch>
				</Fragment>
		  ))
		: (routes = (
				<Fragment>
					<Switch>
						<Route path="/" exact render={(props) => <Home {...props} />} />

						<Route
							path="/about"
							exact
							render={(props) => <About {...props} />}
						/>

						<Route
							path="/services"
							exact
							render={(props) => <Service {...props} />}
						/>

						<Route
							path="/contact"
							exact
							render={(props) => <Contact {...props} />}
						/>

						<Route
							path="/reservation"
							exact
							render={(props) => (
								<Booking {...props} submitLocation={submitLocationHandler} />
							)}
						/>
						<Route
							path="/reservation/select-vehicle"
							render={(props) => <SelectVehicle {...props} />}
						/>

						<Route
							path="/reservation/options"
							render={(props) => <Options {...props} />}
						/>

						<Route
							path="/checkout"
							render={(props) => <Checkout {...props} />}
						/>

						<Route
							path="/booking-successful"
							render={(props) => <Booking {...props} />}
						/>

						<Route
							path="/orders"
							exact
							render={(props) => <Orders {...props} />}
						/>

						<Route
							path="/orders/:orderId"
							exact
							render={(props) => <SingleOrder {...props} />}
						/>
						<Route component={NotFound} />
						{/* <Redirect to="/" /> */}
					</Switch>
				</Fragment>
		  ));

	return routes;
};

const mapStateToProps = (state) => {
	return {
		isAuth: state.authentication.isAuth,
	};
};

export default connect(mapStateToProps)(RouteComponent);
