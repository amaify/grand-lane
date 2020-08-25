import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import loadable from "@loadable/component";
import Loader from "react-loader-spinner";
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
      sideDrawerOpen: false,
      showModal: false,
      authLoading: false,
      isAuth: false,
      userId: null,
      token: null,
      error: null,
      showInfo: false,
    };
  }

  componentDidMount() {
    AOS.init({});
    this.loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`
    );
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");

    if (!token || !expiryDate) {
      return;
    }

    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler();
      return;
    }

    const userId = localStorage.getItem("userId");
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();

    this.setState({ token: token, userId: userId, isAuth: true });
    this.setAutoLogout(remainingMilliseconds);
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location !== prevProps.location && this.state.sideDrawerOpen) {
      this.setState({ sideDrawerOpen: false });
    }

    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
      this.setState({ error: null });
    }
  }

  loadScript = (url) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  toggleHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropToggle = () => {
    this.setState({ sideDrawerOpen: false });
  };

  submitLocationHandler = (e, locationData) => {
    e.preventDefault();
    this.setState({ authLoading: true, showModal: true });
    const data = {
      origin: locationData.origin,
      destination: locationData.destination,
    };
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
            authLoading: false,
            showModal: false,
          });

          localStorage.setItem("sedanPrice", resData.sedan);
          localStorage.setItem("vanPrice", resData.van);
          localStorage.setItem("sedanHour", resData.sedanHour);
          localStorage.setItem("vanHour", resData.vanHour);
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

          this.props.history.push("/reservation/select-vehicle");
        }
      })
      .catch((err) => {
        this.setState({
          authLoading: false,
          showInfo: true,
          error: err.message,
          showModal: false,
        });
      });
  };

  //CODE FOR ADDING SIGNUP FUNCTIONALITY
  signupHandler = (e, authData) => {
    e.preventDefault();
    this.setState({ authLoading: true, showModal: true });

    const graphqlQuery = {
      query: `
            mutation {
              createUser(userInput: {firstName: "${authData.firstName}", lastName: "${authData.lastName}", email: "${authData.email}", password: "${authData.password}"}){
                firstName
                lastName
              }
            }
        `,
    };

    fetch("https://grand-lane.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(graphqlQuery),
    })
      .then((response) => response.json())
      .then((resData) => {
        if (resData.errors && resData.errors[0].status === 422) {
          throw new Error("E-mail address already taken");
        }

        if (resData.errors) {
          throw new Error("User creation failed.");
        }
        this.setState({
          isAuth: false,
          authLoading: false,
          showModal: false,
        });
        this.props.history.replace("/login");
      })
      .catch((err) => {
        this.setState({
          authLoading: false,
          error: err,
          showModal: false,
        });
      });
  };
  //END OF CODE FOR SIGNUP FUNCTIONALITY

  //CODE FOR ADDING LOGIN FUNCTIONALITY
  loginHandler = (e, authData) => {
    e.preventDefault();
    this.setState({ authLoading: true, showModal: true });
    const graphqlQuery = {
      query: `
       {
         login(email: "${authData.email}", password: "${authData.password}"){
           token
           userId
           email
           firstName
           lastName
         }
       }
      `,
    };

    fetch("https://grand-lane.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(graphqlQuery),
    })
      .then((response) => response.json())
      .then((resData) => {
        if (resData.errors && resData.errors[0].status === 422) {
          throw new Error("User does not exist");
        }

        if (resData.errors) {
          throw new Error("Username or Password is Incorrect");
        }

        this.setState({
          isAuth: true,
          token: resData.data.login.token,
          userId: resData.data.login.userId,
          authLoading: false,
          showModal: false,
        });
        localStorage.setItem("token", resData.data.login.token);
        localStorage.setItem("userId", resData.data.login.userId);
        localStorage.setItem("email", resData.data.login.email);
        localStorage.setItem("firstName", resData.data.login.firstName);
        localStorage.setItem("lastName", resData.data.login.lastName);

        const details = JSON.parse(localStorage.getItem("distance"));
        if (details) {
          return this.props.history.push("/reservation/options");
        }

        this.props.history.replace("/");

        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem("expiryDate", expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
      })
      .catch((err) => {
        this.setState({
          isAuth: false,
          error: err,
          showModal: false,
          authLoading: false,
        });
      });
  };
  //END OF CODE FOR LOGIN FUNCTIONALITY

  //AUTO LOGOUT CODE
  setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };
  //END OF AUTO LOGOUT CODE

  //CODE FOR LOGOUT
  logoutHandler = () => {
    this.setState({ isAuth: false, token: null });
    localStorage.clear();
    this.props.history.replace("/");
  };
  //END OF CODE FOR LOGOUT

  closeModal = () => {
    this.setState({ showInfo: false });
  };

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen || this.state.authLoading) {
      backDrop = <Backdrop click={this.backdropToggle} />;
    }

    /////////////////// CODE FOR LOADABLE COMPONENT ///////////
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };
    const HomePage = loadable(() => import("./pages/home/home"), {
      fallback: (
        <Loader
          type="Rings"
          color="#3f80e5"
          height={100}
          width={100}
          style={style}
        />
      ),
    });

    const AboutPage = loadable(() => import("./pages/about/about"), {
      fallback: (
        <Loader
          type="Rings"
          color="#3f80e5"
          height={100}
          width={100}
          style={style}
        />
      ),
    });

    const ServicePage = loadable(() => import("./pages/service/service"), {
      fallback: (
        <Loader
          type="Rings"
          color="#3f80e5"
          height={100}
          width={100}
          style={style}
        />
      ),
    });

    const Contact = loadable(() => import("./pages/contact/contact"), {
      fallback: (
        <Loader
          type="Rings"
          color="#3f80e5"
          height={100}
          width={100}
          style={style}
        />
      ),
    });

    const BookingPage = loadable(() => import("./pages/booking/booking"), {
      fallback: (
        <Loader
          type="Rings"
          color="#3f80e5"
          height={100}
          width={100}
          style={style}
        />
      ),
    });

    const Login = loadable(() => import("./pages/auth/login"), {
      fallback: (
        <Loader
          type="Rings"
          color="#3f80e5"
          height={100}
          width={100}
          style={style}
        />
      ),
    });

    const Signup = loadable(() => import("./pages/auth/signup"), {
      fallback: (
        <Loader
          type="Rings"
          color="#3f80e5"
          height={100}
          width={100}
          style={style}
        />
      ),
    });

    const SelectVehicle = loadable(
      () => import("./pages/booking/select-vehicle"),
      {
        fallback: (
          <Loader
            type="Rings"
            color="#3f80e5"
            height={100}
            width={100}
            style={style}
          />
        ),
      }
    );

    const Options = loadable(() => import("./pages/booking/options"), {
      fallback: (
        <Loader
          type="Rings"
          color="#3f80e5"
          height={100}
          width={100}
          style={style}
        />
      ),
    });

    const Checkout = loadable(() => import("./pages/checkout/checkout"), {
      fallback: (
        <Loader
          type="Rings"
          color="#3f80e5"
          height={100}
          width={100}
          style={style}
        />
      ),
    });

    const Orders = loadable(() => import("./pages/orders/orders"), {
      fallback: (
        <Loader
          type="Rings"
          color="#3f80e5"
          height={100}
          width={100}
          style={style}
        />
      ),
    });

    const SingleOrder = loadable(
      () => import("./pages/orders/singleOrder/singleOrder"),
      {
        fallback: (
          <Loader
            type="Rings"
            color="#3f80e5"
            height={100}
            width={100}
            style={style}
          />
        ),
      }
    );

    const ForgotPassword = loadable(
      () => import("./pages/auth/forgot-password"),
      {
        fallback: (
          <Loader
            type="Rings"
            color="#3f80e5"
            height={100}
            width={100}
            style={style}
          />
        ),
      }
    );

    const ResetPassword = loadable(
      () => import("./pages/auth/reset-password"),
      {
        fallback: (
          <Loader
            type="Rings"
            color="#3f80e5"
            height={100}
            width={100}
            style={style}
          />
        ),
      }
    );

    const BookingSuccess = loadable(
      () => import("./pages/booking/booking-successful"),
      {
        fallback: (
          <Loader
            type="Rings"
            color="#3f80e5"
            height={100}
            width={100}
            style={style}
          />
        ),
      }
    );

    let routes = (
      <RouteComponent
        isAuth={this.state.isAuth}
        token={this.state.token}
        userId={this.state.userId}
        toggleHandler={this.toggleHandler}
        logoutHandler={this.logoutHandler}
        error={this.state.error}
        loginHandler={this.loginHandler}
        signupHandler={this.signupHandler}
        submitLocationHandler={this.submitLocationHandler}
        HomePage={HomePage}
        AboutPage={AboutPage}
        ServicePage={ServicePage}
        Contact={Contact}
        Orders={Orders}
        BookingPage={BookingPage}
        Options={Options}
        SelectVehicle={SelectVehicle}
        BookingSuccess={BookingSuccess}
        Login={Login}
        Signup={Signup}
        SingleOrder={SingleOrder}
        Checkout={Checkout}
        ForgotPassword={ForgotPassword}
        ResetPassword={ResetPassword}
      />
    );
    return (
      <div className="App">
        {routes}
        <Fragment>
          <SideDrawer
            show={this.state.sideDrawerOpen}
            close={this.backdropToggle}
            isAuth={this.state.isAuth}
            logoutHandler={this.logoutHandler}
          />
          {this.state.showInfo ? (
            <div className="booking-error">
              <Backdrop />
              <div className="booking-error__content">
                <p className="booking-error__content--text">
                  Network error occured when trying to establish connection with
                  the database
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
          {backDrop}
          {this.state.showModal ? <Modal /> : null}
        </Fragment>
      </div>
    );
  }
}

export default withRouter(App);
