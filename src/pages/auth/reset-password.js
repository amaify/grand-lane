import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import SVGIcon from "../../components/svgIcons/svg";
import Header from "../../components/header/header";
import Modal from "../../components/modal/modal";
import Backdrop from "../../components/backdrop/backdrop";

import { required, length } from "../../util/validators";

class ResetPassword extends Component {
  state = {
    passwordForm: {
      password: {
        value: "",
        valid: false,
        touched: false,
        validators: [required, length({ min: 5 })]
      }
    },
    formIsValid: false,
    errMessage: false,
    showMessage: null,
    showInfo: false,
    success: false,
    loading: false
  };

  validateForm = () => {
    const { passwordForm } = this.state;
    this.setState({
      formIsValid: passwordForm.email.valid
    });
  };

  inputChangeHandler = (input, value) => {
    this.setState(prevState => {
      let isValid = true;
      for (const validator of prevState.passwordForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.passwordForm,
        [input]: {
          ...prevState.passwordForm[input],
          valid: isValid,
          value: value
        }
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        passwordForm: updatedForm,
        formIsValid: formIsValid
      };
    });
  };

  inputBlurHandler = input => {
    this.setState(prevState => {
      return {
        passwordForm: {
          ...prevState.passwordForm,
          [input]: {
            ...prevState.passwordForm[input],
            touched: true
          }
        }
      };
    });
  };

  resetFormHandler = () => {
    const { passwordForm } = this.state;
    let password = (passwordForm.password.value = "");

    this.setState({ password, formIsValid: false });
  };

  newPasswordHandler(e) {
    e.preventDefault();
    this.setState({ loading: true });

    const token = this.props.match.params.passwordToken;
    const { passwordForm } = this.state;
    const inputData = {
      newPassword: passwordForm.password.value,
      resetLink: token
    };

    fetch("https://grand-lane.herokuapp.com/contact/reset-password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputData)
    })
      .then(response => response.json())
      .then(resData => {
        if (resData.statusCode === 404) {
          this.setState({
            loading: false,
            showInfo: true,
            errMessage: true,
            showMessage: resData.error
          });

          setTimeout(() => {
            return this.setState({ showInfo: false });
          }, 6000);
          this.resetFormHandler();
        } else if (resData.statusCode === 200) {
          this.setState({
            loading: false,
            errMessage: false,
            showMessage: resData.message,
            showInfo: true,
            success: true
          });
          console.log(resData);
        } else {
          this.setState({
            loading: false,
            errMessage: true,
            showMessage: resData.message,
            showInfo: true
          });
          setTimeout(() => {
            return this.setState({ showInfo: false });
          }, 6000);
          this.resetFormHandler();
        }
      })
      .catch(err => err);
  }

  render() {
    const {
      passwordForm,
      formIsValid,
      showInfo,
      errMessage,
      showMessage,
      success
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
          <title>Password Reset | GrandLane Chauffeur Services</title>
        </Helmet>
        <section className="forgotPassword">
          <Header
            drawerToggle={this.props.sideDrawerToggle}
            isAuth={this.props.isAuth}
          />
        </section>

        <section className="forgotPassword__container">
          <form
            className="forgotPassword-form"
            onSubmit={e => this.newPasswordHandler(e)}
          >
            <div className="forgotPassword-form__header">
              <SVGIcon
                name="passwordIcon"
                className="forgotPassword-form__header--icon"
              />
              <h3 className="forgotPassword-form__header--heading">
                new password?
              </h3>
              <p className="forgotPassword-form__header--text">
                Enter your new password here
              </p>
            </div>

            {showInfo ? (
              <div className={errMessage ? "error" : "success"}>
                <p>{showMessage}</p>
              </div>
            ) : null}

            {!success ? (
              <div className="forgotPassword-form__item">
                <label htmlFor="password">New Password</label>
                <input
                  className={[
                    !passwordForm["password"].valid ? "invalid" : "valid",
                    passwordForm["password"].touched ? "touched" : "untouched"
                  ].join(" ")}
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="password"
                  value={passwordForm.password.value}
                  onChange={e =>
                    this.inputChangeHandler("password", e.target.value)
                  }
                  onBlur={this.inputBlurHandler.bind(this, "password")}
                />
                <button type="submit" disabled={!formIsValid}>
                  Set Password
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

export default ResetPassword;
