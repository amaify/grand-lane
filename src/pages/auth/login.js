import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Input from "../../components/form/input";

import Button from "../../components/button/button";
import { required, length, email } from "../../util/validators";

class Login extends Component {
  state = {
    loginForm: {
      email: {
        value: "",
        valid: false,
        touched: false,
        validators: [required, email],
      },

      password: {
        value: "",
        valid: false,
        touched: false,
        validators: [required, length({ min: 5 })],
      },
    },
    formIsValid: false,
  };

  validateForm = () => {
    const { loginForm } = this.state;
    this.setState({
      formIsValid: loginForm.email.valid && loginForm.password.valid,
    });
  };

  inputChangeHandler = (input, value) => {
    this.setState((prevState) => {
      let isValid = true;
      for (const validator of prevState.loginForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.loginForm,
        [input]: {
          ...prevState.loginForm[input],
          valid: isValid,
          value: value,
        },
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        loginForm: updatedForm,
        formIsValid: formIsValid,
      };
    });
  };

  inputBlurHandler = (input) => {
    this.setState((prevState) => {
      return {
        loginForm: {
          ...prevState.loginForm,
          [input]: {
            ...prevState.loginForm[input],
            touched: true,
          },
        },
      };
    });
  };

  render() {
    const { loginForm, formIsValid } = this.state;
    const { sideDrawerToggle, isAuth, loginHandler, error } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>Login - GrandLane Services</title>
        </Helmet>
        <section className="login">
          <Header drawerToggle={sideDrawerToggle} isAuth={isAuth} />
          <div className="login-intro">
            <h2 className="login-intro__heading">login</h2>
            <p className="login-intro__text">login to your account</p>
          </div>
        </section>

        <section className="contact-form">
          <div className="auth-wrapper">
            <h2 className="auth-wrapper__heading">account login</h2>
            {error ? (
              <div className="error-message">
                <p>{error.message}</p>
              </div>
            ) : null}
            <form
              className="contact-form__contents auth-form"
              onSubmit={(e) =>
                loginHandler(e, {
                  email: loginForm.email.value,
                  password: loginForm.password.value,
                })
              }
            >
              <Input
                control="input"
                type="email"
                label="Email"
                id="email"
                placeholder="james.madisson@aedc.com"
                onChange={this.inputChangeHandler}
                onBlur={this.inputBlurHandler.bind(this, "email")}
                value={loginForm["email"].value}
                valid={loginForm["email"].valid}
                touched={loginForm["email"].touched}
                message="Please Enter a valid email"
              />

              <Input
                control="input"
                type="password"
                label="Password"
                id="password"
                placeholder="Password"
                onChange={this.inputChangeHandler}
                onBlur={this.inputBlurHandler.bind(this, "password")}
                value={loginForm["password"].value}
                valid={loginForm["password"].valid}
                touched={loginForm["password"].touched}
                message="Password must contain at least 5 characters"
              />

              <Button
                type="submit"
                theme="auth"
                btnName="LOGIN"
                disabled={!formIsValid}
              ></Button>
              <div className="login-items">
                <ul className="login-item">
                  <li className="login-item__link">
                    <Link to="/signup">Create an Account</Link>
                  </li>
                  <li className="login-item__link">
                    <Link to="forgot-password">Forgot Password?</Link>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default Login;
