import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const RouteComponent = ({
  isAuth,
  submitLocationHandler,
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
  Checkout,
}) => {
  let routes;

  !isAuth
    ? (routes = (
        <Fragment>
          <Switch>
            <Route path="/" exact render={(props) => <HomePage {...props} />} />

            <Route
              path="/about"
              exact
              render={(props) => <AboutPage {...props} />}
            />

            <Route
              path="/services"
              exact
              render={(props) => <ServicePage {...props} />}
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

            {/* <Route
              path="/orders"
              exact
              render={(props) => <Orders {...props} />}
            />

            <Route
              path="/orders/:orderId"
              render={(props) => <SingleOrder {...props} />}
            /> */}

            <Route
              path="/reservation"
              exact
              render={(props) => (
                <BookingPage
                  {...props}
                  submitLocation={submitLocationHandler}
                />
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
            <Redirect to="/" />
          </Switch>
        </Fragment>
      ))
    : (routes = (
        <Fragment>
          <Switch>
            <Route path="/" exact render={(props) => <HomePage {...props} />} />

            <Route
              path="/about"
              exact
              render={(props) => <AboutPage {...props} />}
            />

            <Route
              path="/services"
              exact
              render={(props) => <ServicePage {...props} />}
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
                <BookingPage
                  {...props}
                  submitLocation={submitLocationHandler}
                />
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
              path="/orders"
              exact
              render={(props) => <Orders {...props} />}
            />

            <Route
              path="/orders/:orderId"
              exact
              render={(props) => <SingleOrder {...props} />}
            />
            <Redirect to="/" />
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
