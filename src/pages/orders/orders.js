import React, { Component, Fragment } from "react";
import { NavLink, Redirect, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Loader from "../../components/loader/loader";

class Orders extends Component {
  state = {
    ridesId: JSON.parse(localStorage.getItem("myRidesId")) || [],
    loading: false,
    errMessage: null,
    error: false
  };

  componentDidMount() {
    if (!this.state.loading) {
      this.setState({ loading: true });
    }
    this.getRides();
  }

  getRides = () => {
    const { token } = this.props;
    const graphqlQuery = {
      query: `
            {
                getRides {
                    rides {
                        _id
                    }
                }
            }
          `
    };
    fetch("https://grand-lane.herokuapp.com/graphql", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(graphqlQuery)
    })
      .then(response => response.json())
      .then(resData => {
        if (resData.errors && resData.errors[0].status === 401) {
          throw new Error("Not Authorized!");
        }
        localStorage.setItem(
          "myRidesId",
          JSON.stringify(resData.data.getRides.rides)
        );
        this.setState({
          ridesId: resData.data.getRides.rides,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false, errMessage: err.message, error: true });
      });
  };

  render() {
    const { ridesId, loading, error, errMessage } = this.state;
    const { sideDrawerToggle, isAuth, logoutHandler } = this.props;

    if (!isAuth) {
      return (
        <Switch>
          <Redirect to="/" />
        </Switch>
      );
    }

    let orderList = (
      <Fragment>
        {ridesId === null || ridesId.length === 0 ? (
          error ? (
            <p>{errMessage}</p>
          ) : (
            <p>No Orders Yet</p>
          )
        ) : (
          ridesId.map(ride => (
            <li className="orders-list__item" key={ride._id}>
              <span>Order &mdash; </span>
              <NavLink to={`/orders/${ride._id}`} exact>
                {ride._id}
              </NavLink>
            </li>
          ))
        )}
      </Fragment>
    );

    return (
      <Fragment>
        <Helmet>
          <title>Orders | GrandLane Chauffeur Services</title>
        </Helmet>
        <section className="orders">
          <Header
            drawerToggle={sideDrawerToggle}
            isAuth={isAuth}
            logoutHandler={logoutHandler}
          />
        </section>

        <section className="orders-list">
          <div className="orders-list__info">
            <h3 className="orders-list__info--heading">thank you</h3>
            <p className="orders-list__info--text">
              We are happy to serve you! Click on your order to see the full
              details
            </p>
          </div>
          <ol className="orders-list__items">
            {loading ? <Loader /> : orderList}
          </ol>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default Orders;
