import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const RouteComponent = ({
  isAuth,
  toggleHandler,
  token,
  userId,
  logoutHandler,
  error,
  loginHandler,
  submitLocationHandler,
  signupHandler,
  HomePage,
  AboutPage,
  ServicePage,
  Contact,
  Login,
  Signup,
  BookingPage,
  BookingSuccess,
  ForgotPassword,
  ResetPassword,
  Orders,
  Options,
  SingleOrder,
  SelectVehicle,
  Checkout
}) => {
  let routes;

  !isAuth
    ? (routes = (
        <Fragment>
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <HomePage
                  {...props}
                  isAuth={isAuth}
                  sideDrawerToggle={toggleHandler}
                  logoutHandler={logoutHandler}
                />
              )}
            />

            <Route
              path="/about"
              exact
              render={props => (
                <AboutPage
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                />
              )}
            />

            <Route
              path="/services"
              exact
              render={props => (
                <ServicePage
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                />
              )}
            />

            <Route
              path="/contact"
              exact
              render={props => (
                <Contact
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                />
              )}
            />

            <Route
              path="/login"
              exact
              render={props => (
                <Login
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  loginHandler={loginHandler}
                  error={error}
                />
              )}
            />

            <Route
              path="/signup"
              exact
              render={props => (
                <Signup
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  signupHandler={signupHandler}
                  error={error}
                />
              )}
            />

            <Route
              path="/orders"
              exact
              render={props => (
                <Orders
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                  token={token}
                />
              )}
            />

            <Route
              path="/orders/:orderId"
              render={props => (
                <SingleOrder
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                  token={token}
                />
              )}
            />

            <Route
              path="/reservation"
              exact
              render={props => (
                <BookingPage
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  submitLocation={submitLocationHandler}
                  logoutHandler={logoutHandler}
                />
              )}
            />
            <Route
              path="/reservation/select-vehicle"
              render={props => (
                <SelectVehicle
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                />
              )}
            />

            <Route
              path="/reservation/options"
              render={props => (
                <Options
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                  token={token}
                  userId={userId}
                />
              )}
            />

            <Route
              path="/checkout"
              render={props => (
                <Checkout
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                  token={token}
                  userId={userId}
                />
              )}
            />

            <Route
              path="/booking-successful"
              render={props => (
                <BookingSuccess
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                  token={token}
                  userId={userId}
                />
              )}
            />

            <Route
              path="/forgot-password"
              render={props => (
                <ForgotPassword
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                  token={token}
                  userId={userId}
                />
              )}
            />

            <Route
              path="/reset-password/:passwordToken"
              render={props => (
                <ResetPassword
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                  token={token}
                  userId={userId}
                />
              )}
            />
            <Redirect to="/" />
          </Switch>
        </Fragment>
      ))
    : (routes = (
        <Fragment>
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <HomePage
                  {...props}
                  isAuth={isAuth}
                  sideDrawerToggle={toggleHandler}
                  logoutHandler={logoutHandler}
                />
              )}
            />

            <Route
              path="/about"
              exact
              render={props => (
                <AboutPage
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                />
              )}
            />

            <Route
              path="/services"
              exact
              render={props => (
                <ServicePage
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                />
              )}
            />

            <Route
              path="/contact"
              exact
              render={props => (
                <Contact
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                />
              )}
            />

            <Route
              path="/reservation"
              exact
              render={props => (
                <BookingPage
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  submitLocation={submitLocationHandler}
                  logoutHandler={logoutHandler}
                />
              )}
            />
            <Route
              path="/reservation/select-vehicle"
              render={props => (
                <SelectVehicle
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                />
              )}
            />

            <Route
              path="/reservation/options"
              render={props => (
                <Options
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                  token={token}
                  userId={userId}
                />
              )}
            />

            <Route
              path="/checkout"
              render={props => (
                <Checkout
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                  token={token}
                  userId={userId}
                />
              )}
            />

            <Route
              path="/booking-successful"
              render={props => (
                <BookingSuccess
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                  token={token}
                  userId={userId}
                />
              )}
            />

            <Route
              path="/orders"
              exact
              render={props => (
                <Orders
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                  token={token}
                />
              )}
            />

            <Route
              path="/orders/:orderId"
              exact
              render={props => (
                <SingleOrder
                  {...props}
                  sideDrawerToggle={toggleHandler}
                  isAuth={isAuth}
                  logoutHandler={logoutHandler}
                  token={token}
                />
              )}
            />
            <Redirect to="/" />
          </Switch>
        </Fragment>
      ));

  return routes;
};

export default RouteComponent;
