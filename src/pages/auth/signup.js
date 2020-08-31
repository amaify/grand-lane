import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signupHandler, clearErrors } from "../../store/utils/authUtility";

import Input from "../../components/form/input";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import Button from "../../components/button/button";
import { required, length, email } from "../../util/validators";
class Signup extends Component {
  state = {
    signupForm: {
      firstName: {
        value: "",
        valid: false,
        touched: false,
        validators: [required],
      },

      lastName: {
        value: "",
        valid: false,
        touched: false,
        validators: [required],
      },

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

  componentDidMount() {
    window.onload = () => {
      this.props.clearError();
    };
  }

  validateForm = () => {
    const { signupForm } = this.state;
    this.setState({
      formIsValid:
        signupForm.firstName.valid &&
        signupForm.lastName.valid &&
        signupForm.email.valid &&
        signupForm.password.valid &&
        signupForm.confirmPassword.valid,
    });
  };

  inputChangeHandler = (input, value) => {
    this.setState((prevState) => {
      let isValid = true;
      for (const validator of prevState.signupForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.signupForm,
        [input]: {
          ...prevState.signupForm[input],
          valid: isValid,
          value: value,
        },
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        signupForm: updatedForm,
        formIsValid: formIsValid,
      };
    });
  };

  inputBlurHandler = (input) => {
    this.setState((prevState) => {
      return {
        signupForm: {
          ...prevState.signupForm,
          [input]: {
            ...prevState.signupForm[input],
            touched: true,
          },
        },
      };
    });
  };

  render() {
    const { signupForm } = this.state;
    const { error } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>Register | GrandLane Chauffeur Services</title>
        </Helmet>
        <section className="signup">
          <Header />
          <div className="signup-intro">
            <h2 className="signup-intro__heading">sign up</h2>
            <p className="signup-intro__text">join us today</p>
          </div>
        </section>

        <section className="contact-form">
          <div className="auth-wrapper">
            <h2 className="auth-wrapper__heading">create account</h2>
            {error ? (
              <div className="error-message">
                <p>{error.message}</p>
              </div>
            ) : null}
            <form
              className="contact-form__contents auth-form"
              onSubmit={(e) => {
                e.preventDefault();
                this.props.signup(
                  signupForm.firstName.value,
                  signupForm.lastName.value,
                  signupForm.email.value,
                  signupForm.password.value
                );
              }}
            >
              <Input
                control="input"
                type="text"
                label="Firstname"
                id="firstName"
                placeholder="James"
                onChange={this.inputChangeHandler}
                onBlur={this.inputBlurHandler.bind(this, "firstName")}
                value={signupForm["firstName"].value}
                valid={signupForm["firstName"].valid}
                touched={signupForm["firstName"].touched}
                message="Please Enter a Name"
              />

              <Input
                control="input"
                type="text"
                label="Lastname"
                id="lastName"
                placeholder="Madisson"
                onChange={this.inputChangeHandler}
                onBlur={this.inputBlurHandler.bind(this, "lastName")}
                value={signupForm["lastName"].value}
                valid={signupForm["lastName"].valid}
                touched={signupForm["lastName"].touched}
                message="Please Enter a Name"
              />

              <Input
                control="input"
                type="email"
                label="Email"
                id="email"
                placeholder="james.madisson@aedc.com"
                onChange={this.inputChangeHandler}
                onBlur={this.inputBlurHandler.bind(this, "email")}
                value={signupForm["email"].value}
                valid={signupForm["email"].valid}
                touched={signupForm["email"].touched}
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
                value={signupForm["password"].value}
                valid={signupForm["password"].valid}
                touched={signupForm["password"].touched}
                message="Password must contain at least 5 characters"
              />

              <Button
                type="submit"
                theme="auth"
                btnName="REGISTER"
                disabled={!this.state.formIsValid}
              ></Button>
              <div className="signup-items">
                <ul className="signup-item">
                  <li className="signup-item__link">
                    Already Have an Account?<Link to="/login">Login Here</Link>
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

const mapStateToProps = (state) => {
  return {
    error: state.authentication.error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      signup: (firstName, lastName, email, password) =>
        signupHandler(firstName, lastName, email, password, ownProps),
      clearError: () => clearErrors(),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
