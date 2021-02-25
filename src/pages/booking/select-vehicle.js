import React, { Fragment, Component } from "react";
import { Redirect, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import * as actionType from "../../store/actions/actionType";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import BookingInfo from "../../components/form/booking-info";

import SvgIcon from "../../components/svgIcons/svg";

import SedanImage from "../../images/business-sedan-4.jpg";
import VanImage from "../../images/business-van.png";

class SelectVehicle extends Component {
	state = {
		price: 0,
		selectedVehicle: "",
		vehicleImage: "",
	};

	componentDidMount() {
		const selectBtn = document.querySelectorAll(".selected-vehicle");

		this.onSubmitHandler(selectBtn);
	}

	submitFinalValue(price, vehicleType, vehicleImage) {
		this.setState(
			{
				price: price,
				selectedVehicle: vehicleType,
				vehicleImage: vehicleImage,
			},
			() => {
				localStorage.setItem("price", this.state.price);
				localStorage.setItem("vehicle", this.state.selectedVehicle);
				localStorage.setItem("vehicleImage", this.state.vehicleImage);

				this.props.setOptionsRoute();
				this.props.history.push("/reservation/options");
			}
		);
	}

	onSubmitHandler(selectBtn) {
		selectBtn.forEach((btn, i) => {
			btn.addEventListener("click", () => {
				const priceValue = btn.parentElement.children[0].children[0].innerText;
				const vehicleType =
					btn.parentElement.parentElement.parentElement.firstChild.children[0]
						.innerText;
				const vehicleImage = btn.parentElement.parentElement.children[1].firstChild.getAttribute(
					"src"
				);
				this.submitFinalValue(priceValue, vehicleType, vehicleImage);
			});
		});
	}

	render() {
		let hours = localStorage.getItem("hours");
		const distanceVal = localStorage.getItem("distanceValue");
		let distanceValue = parseFloat(distanceVal);
		const fixedPrice = localStorage.getItem("fixedPrice");

		let sedanPrice, vanPrice;

		if (!hours) {
			sedanPrice = localStorage.getItem("sedanPrice");
			vanPrice = localStorage.getItem("vanPrice");

			if (distanceValue <= 15) {
				sedanPrice = fixedPrice;
				vanPrice = fixedPrice;
			}
		} else {
			sedanPrice = localStorage.getItem("sedanHour") * hours;
			vanPrice = localStorage.getItem("vanHour") * hours;
		}

		let selectVehicle = (
			<Fragment>
				<Helmet>
					<title>Select a Ride - GrandLane Services</title>
				</Helmet>
				<BookingInfo />

				<section className="booking-details">
					<div className="booking-details__contents">
						<div className="booking-details__content">
							<h3 className="booking-details__content--heading">
								Business Sedan
							</h3>
							<div className="booking-details__content--elements">
								<p className="booking-details__content--element">
									<span className="booking-details__content--element-icon">
										<SvgIcon name="users" />
									</span>
									<span className="booking-details__content--element-text">
										Max. 2
									</span>
								</p>
								<p className="booking-details__content--element">
									<span className="booking-details__content--element-icon">
										<SvgIcon name="luggage" />
									</span>
									<span className="booking-details__content--element-text">
										Max. 2
									</span>
								</p>
							</div>
						</div>

						<div className="booking-details__content--desc">
							<ul className="booking-details__content--desc-list">
								<li>
									&ndash; Free 60 minutes wait time for airport pickups, 15 mins
									for all others
								</li>
								<li>&ndash; Includes Meet & Greet</li>
								<li>&ndash; Free cancellation up until 1 hour before pickup</li>
							</ul>

							<div className="booking-details__content--desc-img">
								<img src={SedanImage} alt="A Sedan Vehicle" />
							</div>

							<div className="booking-details__content--desc-price">
								<div className="select-vehicle__form--content">
									<p className="price price-value" id="sedan-value">
										{sedanPrice}
									</p>
									<p className="price">AUD</p>
								</div>
								<p className="dets">All Prices Include VAT, Fees & Tip.</p>
								<button id="sedan-select" className="selected-vehicle">
									Select
								</button>
							</div>
						</div>
					</div>

					<div className="booking-details__contents">
						<div className="booking-details__content">
							<h3 className="booking-details__content--heading">
								Business Van/SUV
							</h3>
							<div className="booking-details__content--elements">
								<p className="booking-details__content--element">
									<span className="booking-details__content--element-icon">
										<SvgIcon name="users" />
									</span>
									<span className="booking-details__content--element-text">
										Max. 4
									</span>
								</p>
								<p className="booking-details__content--element">
									<span className="booking-details__content--element-icon">
										<SvgIcon name="luggage" />
									</span>
									<span className="booking-details__content--element-text">
										Max. 5
									</span>
								</p>
							</div>
						</div>

						<div className="booking-details__content--desc">
							<ul className="booking-details__content--desc-list">
								<li>
									&ndash; Free 60 minutes wait time for airport pickups, 15 mins
									for all others
								</li>
								<li>&ndash; Includes Meet & Greet</li>
								<li>&ndash; Free cancellation up until 1 hour before pickup</li>
							</ul>

							<div className="booking-details__content--desc-img">
								<img src={VanImage} alt="A Van" />
							</div>

							<div className="booking-details__content--desc-price">
								<div className="select-vehicle__form--content">
									<p className="price price-value" id="van-value">
										{vanPrice}
									</p>
									<p className="price">AUD</p>
								</div>
								<p className="dets">All Prices Include VAT, Fees & Tip.</p>
								<button id="van-select" className="selected-vehicle">
									Select
								</button>
							</div>
						</div>
					</div>
				</section>
			</Fragment>
		);

		if (!this.props.selectVehicleRoute) {
			selectVehicle = (
				<Switch>
					<Redirect to="/reservation" />;
				</Switch>
			);
		}
		return (
			<Fragment>
				<section className="booking">
					<Header />
					<div className="booking-intro">
						<h2 className="booking-intro__heading">service class</h2>
						<p className="booking-intro__text">
							select the vehicle that suits your need
						</p>
					</div>
				</section>
				{selectVehicle}
				<Footer />
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		selectVehicleRoute: state.route.vehicleRoute,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setOptionsRoute: () => dispatch({ type: actionType.PROVIDED_OPTIONS }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectVehicle);
