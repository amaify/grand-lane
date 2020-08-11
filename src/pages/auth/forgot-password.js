import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import SVGIcon from "../../components/svgIcons/svg";
import Header from "../../components/header/header";
import Modal from "../../components/modal/modal";
import Backdrop from "../../components/backdrop/backdrop";

import { required, email } from "../../util/validators";

class ForgotPassword extends Component {
  state = {
    passwordForm: {
      email: {
        value: "",
        valid: false,
        touched: false,
        validators: [required, email],
      },
    },
    formIsValid: false,
    errMessage: false,
    showMessage: null,
    showInfo: false,
    success: false,
    loading: false,
  };

  validateForm = () => {
    const { passwordForm } = this.state;
    this.setState({
      formIsValid: passwordForm.email.valid,
    });
  };

  inputChangeHandler = (input, value) => {
    this.setState((prevState) => {
      let isValid = true;
      for (const validator of prevState.passwordForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.passwordForm,
        [input]: {
          ...prevState.passwordForm[input],
          valid: isValid,
          value: value,
        },
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        passwordForm: updatedForm,
        formIsValid: formIsValid,
      };
    });
  };

  inputBlurHandler = (input) => {
    this.setState((prevState) => {
      return {
        passwordForm: {
          ...prevState.passwordForm,
          [input]: {
            ...prevState.passwordForm[input],
            touched: true,
          },
        },
      };
    });
  };

  resetFormHandler = () => {
    const { passwordForm } = this.state;
    let email = (passwordForm.email.value = "");

    this.setState({ email, formIsValid: false });
  };

  submitFormHandler(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const { passwordForm } = this.state;

    const inputData = {
      email: passwordForm.email.value,
    };

    fetch("https://grand-lane.herokuapp.com/contact/forgot-password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((resData) => {
        if (resData.statusCode === 404) {
          this.setState({
            loading: false,
            errMessage: true,
            showMessage: resData.error,
            showInfo: true,
          });
          setTimeout(() => {
            return this.setState({ showInfo: false });
          }, 10000);

          this.resetFormHandler();
        } else if (resData.status === "success") {
          this.setState({
            loading: false,
            errMessage: false,
            showMessage: resData.message,
            showInfo: true,
            success: true,
          });
        } else {
          this.setState({
            loading: false,
            errMessage: true,
            showMessage: resData.message,
            showInfo: true,
          });
          setTimeout(() => {
            return this.setState({ showInfo: false });
          }, 10000);
          this.resetFormHandler();
        }
      })
      .catch((err) => {
        this.setState({
          loading: false,
          errMessage: true,
          showMessage: err.message,
          showInfo: true,
        });
        setTimeout(() => {
          return this.setState({ showInfo: false });
        }, 10000);
        this.resetFormHandler();
      });
  }
  render() {
    const {
      passwordForm,
      formIsValid,
      showInfo,
      errMessage,
      showMessage,
      success,
    } = this.state;

    let loadingState = (
      <Fragment>
        <Backdrop />
        <Modal />
      </Fragment>
    );
    return (
      <Fragment>
        <Helmet>
          <title>Forgot Password - GrandLane Services</title>
        </Helmet>
        <section className="forgotPassword">
          <Header
            drawerToggle={this.props.sideDrawerToggle}
            isAuth={this.props.isAuth}
          />
        </section>

        <section className="forgotPassword__container">
          <form
            action=""
            className="forgotPassword-form"
            onSubmit={(e) => this.submitFormHandler(e)}
          >
            <div className="forgotPassword-form__header">
              <SVGIcon
                name="passwordIcon"
                className="forgotPassword-form__header--icon"
              />
              <h3 className="forgotPassword-form__header--heading">
                forgot password?
              </h3>
              <p className="forgotPassword-form__header--text">
                You can reset your password here.
              </p>
            </div>

            {showInfo ? (
              <div className={errMessage ? "error" : "success"}>
                <p>{showMessage}</p>
              </div>
            ) : null}

            {!success ? (
              <div className="forgotPassword-form__item">
                <label htmlFor="email">E-mail</label>
                <input
                  className={[
                    !passwordForm["email"].valid ? "invalid" : "valid",
                    passwordForm["email"].touched ? "touched" : "untouched",
                  ].join(" ")}
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="james.madisson@aedc.com"
                  value={passwordForm.email.value}
                  onChange={(e) =>
                    this.inputChangeHandler("email", e.target.value)
                  }
                  onBlur={this.inputBlurHandler.bind(this, "email")}
                />
                <button type="submit" disabled={!formIsValid}>
                  Reset Password
                </button>
              </div>
            ) : null}
          </form>
          {this.state.loading ? loadingState : null}
        </section>
      </Fragment>
    );
  }
}

export default ForgotPassword;
