import React, { Fragment, Component } from "react";
import { Helmet } from "react-helmet";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";
import Modal from "../../components/modal/modal";
import Backdrop from "../../components/backdrop/backdrop";

import SVGIcon from "../../components/svgIcons/svg";
import Input from "../../components/form/input";
import { required, email } from "../../util/validators";

class Contact extends Component {
	state = {
		contactForm: {
			name: {
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

			// number: {
			//   value: "",
			//   valid: false,
			//   touched: false,
			//   validators: [required],
			// },

			comment: {
				value: "",
				valid: false,
				touched: false,
				validators: [required],
			},
		},
		formIsValid: false,
		loading: false,
		errMsg: false,
		showInfo: false,
		errMessage: null,
	};

	validateForm = () => {
		const { contactForm } = this.state;
		this.setState({
			formIsValid:
				contactForm.name.valid &&
				contactForm.email.valid &&
				contactForm.comment.valid,
		});
	};

	submitHandler = (event) => {
		event.preventDefault();
		this.setState({ loading: true });

		const { contactForm } = this.state;
		const data = {
			name: contactForm.name.value,
			email: contactForm.email.value,
			comment: contactForm.comment.value,
		};

		fetch("https://grand-lane.herokuapp.com/contact/contact-us", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((response) => {
				if (response.status === "success") {
					this.setState({ loading: false, formIsValid: false, showInfo: true });
					setTimeout(() => {
						this.setState({ showInfo: false });
					}, 6000);
					this.resetFormHandler();
				} else {
					this.setState({ errMsg: true, loading: false, showInfo: true });
					setTimeout(() => {
						this.setState({ showInfo: false });
					}, 6000);
				}
			})
			.catch((err) => {
				this.setState({
					errMsg: true,
					errMessage: err.message,
					loading: false,
					showInfo: true,
				});
				setTimeout(() => {
					this.setState({ showInfo: false });
				}, 6000);
			});
	};

	timeoutHandler = () => {
		return this.state.showInfo;
	};

	resetFormHandler = () => {
		const { contactForm } = this.state;
		let name = (contactForm.name.value = "");
		let email = (contactForm.email.value = "");
		// let number = (contactForm.number.value = "");
		let comment = (contactForm.comment.value = "");

		this.setState({ name, email, comment });
	};

	inputChangeHandler = (input, value) => {
		this.setState((prevState) => {
			let isValid = true;
			for (const validator of prevState.contactForm[input].validators) {
				isValid = isValid && validator(value);
			}
			const updatedForm = {
				...prevState.contactForm,
				[input]: {
					...prevState.contactForm[input],
					valid: isValid,
					value: value,
				},
			};
			let formIsValid = true;
			for (const inputName in updatedForm) {
				formIsValid = formIsValid && updatedForm[inputName].valid;
			}
			return {
				contactForm: updatedForm,
				formIsValid: formIsValid,
			};
		});
	};

	inputBlurHandler = (input) => {
		this.setState((prevState) => {
			return {
				contactForm: {
					...prevState.contactForm,
					[input]: {
						...prevState.contactForm[input],
						touched: true,
					},
				},
			};
		});
	};

	render() {
		const { contactForm, formIsValid, errMsg, showInfo, loading } = this.state;
		const successMessage =
			"Message sent successfully; Thank you for contacting us.";
		const failedMessage = "Something went wrong; Please try again! ";

		let loadingState = (
			<Fragment>
				<Backdrop />
				<Modal />
			</Fragment>
		);

		return (
			<Fragment>
				<Helmet>
					<title>Contact Us - GrandLane Services</title>
				</Helmet>
				<section className="contact">
					<Header />
					<div className="contact-intro">
						<h2 className="contact-intro__heading">contact</h2>
						<p className="contact-intro__text">
							contact us if you have any question
						</p>
					</div>
				</section>

				<section className="contact-form">
					<h2 className="contact-form__heading">Leave a Comment</h2>
					<div className="contact-form__form">
						{showInfo ? (
							<div className={errMsg ? "error" : "success"}>
								{errMsg ? <p>{failedMessage}</p> : <p>{successMessage}</p>}
							</div>
						) : null}
						<form
							className="contact-form__contents contact-form__button"
							onSubmit={(e) => this.submitHandler(e)}
						>
							<Input
								label="Name"
								type="text"
								control="input"
								id="name"
								placeholder="James Madisson"
								onChange={this.inputChangeHandler}
								onBlur={this.inputBlurHandler.bind(this, "name")}
								value={contactForm["name"].value}
								valid={contactForm["name"].valid}
								touched={contactForm["name"].touched}
							/>

							<Input
								label="Email"
								type="email"
								control="input"
								id="email"
								placeholder="james.madisson@aedc.com"
								onChange={this.inputChangeHandler}
								onBlur={this.inputBlurHandler.bind(this, "email")}
								value={contactForm["email"].value}
								valid={contactForm["email"].valid}
								touched={contactForm["email"].touched}
							/>

							{/* <Input
                label="Number"
                type="tel"
                control="input"
                id="number"
                placeholder="(+1)-3333-3333"
                onChange={this.inputChangeHandler}
                onBlur={this.inputBlurHandler.bind(this, "number")}
                value={contactForm["number"].value}
                valid={contactForm["number"].valid}
                touched={contactForm["number"].touched}
              /> */}

							<Input
								label="Comment"
								control="textarea"
								id="comment"
								placeholder="We want to hear from you"
								cols="15"
								rows="5"
								onChange={this.inputChangeHandler}
								onBlur={this.inputBlurHandler.bind(this, "comment")}
								value={contactForm["comment"].value}
								valid={contactForm["comment"].valid}
								touched={contactForm["comment"].touched}
							/>
							<Button
								btnName="Submit"
								theme="secondary"
								disabled={!formIsValid}
								type="submit"
							></Button>
						</form>
					</div>
				</section>

				<section className="contact-data">
					<h2 className="contact-data__heading">reach us at</h2>
					<div className="contact-data__contents">
						<div className="contact-data__content">
							<SVGIcon
								name="location"
								className="contact-data__content--icon"
							/>
							<h3 className="contact-data__content--heading">address</h3>
							<p className="contact-data__content--text">
								Airport Drive, Melbourne Airport VIC, Australia
							</p>
						</div>

						<div className="contact-data__content">
							<SVGIcon name="mail" className="contact-data__content--icon" />
							<h3 className="contact-data__content--heading">email</h3>
							<p className="contact-data__content--text">
								bookings&#64;grandlane.com.au
							</p>
						</div>

						<div className="contact-data__content">
							<SVGIcon name="phone" className="contact-data__content--icon" />
							<h3 className="contact-data__content--heading">phone number</h3>
							<p className="contact-data__content--text">+61403008329</p>
						</div>

						<div className="contact-data__content">
							<SVGIcon name="clock" className="contact-data__content--icon" />
							<h3 className="contact-data__content--heading">work hours</h3>
							<p className="contact-data__content--text">Available 24/7</p>
						</div>
					</div>
				</section>
				{loading ? loadingState : null}
				<Footer />
			</Fragment>
		);
	}
}

export default Contact;
