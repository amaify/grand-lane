import React, { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Header from "../../components/header/header";
import SVGIcon from "../../components/svgIcons/svg";
import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import Action from "../../components/footer/action";
import Popup from "../../components/modal/popup";

import HomeLarge from "../../images/home-large.jpg";
import Woman from "../../images/services-image-medium.jpg";
import AirportTransfer from "../../images/transfer-medium.jpg";
import CorporateTransfer from "../../images/testimonial-1-medium.jpg";
import WineryTour from "../../images/winery-2-medium.jpg";
import Event from "../../images/events-2-medium.jpg";
import Tour from "../../images/testimonial-2-medium.jpg";
// import WeddingTransfer from "../../images/events-medium.jpg";

function Home() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const date = new Date();

		if (date > new Date("2021-11-02T01:02:03")) {
			return;
		} else {
			return setTimeout(() => {
				setShow(true);
			}, 2000);
		}
	}, []);

	const removeModal = () => {
		setShow(false);
	};

	return (
		<Fragment>
			<Helmet>
				<title>Grandlane - Melbourne Chauffeur Service</title>
				<meta
					name="description"
					content="Grandlane Chauffeurs is the most trusted and professional chauffeur service in Melbourne. 
					we specialize in airport transfers, corporate transfers, live concerts, sight-seeing tours and a 
					variety of other related services. Book with us at the touch of a button."
				/>
			</Helmet>
			{show ? <Popup onClick={removeModal} /> : ""}
			<section className="intro">
				<Header />
				{/* <div className="intro-items"> */}

				<article className="intro__carousel">
					<Carousel
						axis="horizontal"
						autoPlay={true}
						infiniteLoop={true}
						showThumbs={false}
						// useKeyboardArrows={true}
						stopOnHover={false}
						interval={10000}
						showIndicators={false}
						showStatus={false}
						transitionTime={1500}
					>
						<div className="intro__carousel--items">
							<div className="intro__carousel--items__img">
								<img src={HomeLarge} alt="Driving in the sunset" />
							</div>

							<div className="intro__carousel--items__texts">
								<h1
									className="intro-heading"
									data-aos="fade-right"
									data-aos-duration="2000"
									data-aos-once="true"
								>
									<span className="intro-heading__brand">
										GrandLane Chauffeurs
									</span>
									<span className="intro-heading__desc2">
										experience the drive of your life
									</span>
								</h1>
								<div
									data-aos="fade-left"
									data-aos-duration="3000"
									data-aos-delay="100"
								>
									<Button
										btnName="Book Now"
										theme="primary"
										link="/reservation"
									></Button>
								</div>
							</div>
						</div>

						<div className="intro__carousel--items">
							<div className="intro__carousel--items__img">
								<img src={Woman} alt="A Woman Sitting Pretty" />
							</div>

							<div className="intro__carousel--items__texts">
								<h1
									className="intro-heading"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<span className="intro-heading__brand">
										GrandLane Chauffeurs
									</span>
									<span className="intro-heading__desc2">
										Offering the best chauffeur service in melbourne
									</span>
								</h1>
								<Button
									btnName="Book Now"
									theme="primary"
									link="/reservation"
								></Button>
							</div>
						</div>
					</Carousel>
				</article>
				{/* </div> */}
			</section>

			<section className="desc">
				<h2
					className="desc-heading"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					why us
				</h2>
				<p className="desc-text" data-aos="fade-left" data-aos-duration="2000">
					GrandLane Chauffeurs is Melbourne’s most trusted and professional
					chauffeur service offering chauffeured luxury cars for all occasions
					and airport transfer services. We pride ourselves in our ability to
					provide a professional, reliable, discreet and friendly service that
					will meet all your requirements. Our highly trained chauffeurs will
					take you safely to your desired destination.
				</p>

				<div
					className="desc-mark"
					data-aos="fade-right"
					data-aos-duration="2000"
				>
					<p className="desc-mark__text">
						<span>
							<SVGIcon name="rightCheck" className="desc-svg" />
						</span>
						<span>guaranted quality</span>
					</p>
					<p className="desc-mark__text">
						<span>
							<SVGIcon name="dollarSign" className="desc-svg" />
						</span>
						<span>Affordable Pricing</span>
					</p>
				</div>

				<div data-aos="zoom-in" data-aos-duration="2000">
					<Button btnName="Learn More" theme="secondary" link="/about"></Button>
				</div>
			</section>

			<section className="services">
				<h2
					className="services-header"
					data-aos="fade-down"
					data-aos-duration="2000"
				>
					our services
				</h2>
				<article className="services-content">
					<div
						className="services-image"
						data-aos="fade-left"
						data-aos-duration="2000"
						data-aos-delay="300"
					>
						<p className="services-image__text">Airport Transfer</p>
						<img src={AirportTransfer} alt="Airport Transfer Service" />
					</div>

					<div
						className="services-image"
						data-aos="fade-up"
						data-aos-duration="2000"
						data-aos-delay="300"
					>
						<p className="services-image__text">Corporate Transfer</p>
						<img src={CorporateTransfer} alt="Corporate Transfer Service" />
					</div>

					<div
						className="services-image"
						data-aos="fade-right"
						data-aos-duration="2000"
						data-aos-delay="300"
					>
						<p className="services-image__text">Winery Tours</p>
						<img src={WineryTour} alt="Winery Tours" />
					</div>

					<div
						className="services-image"
						data-aos="flip-left"
						data-aos-duration="2000"
						data-aos-delay="300"
					>
						<p className="services-image__text">Daily Tour</p>
						<img src={Tour} alt="Daily Chauffeur Service" />
					</div>

					<div
						className="services-image"
						data-aos="flip-up"
						data-aos-duration="2000"
						data-aos-delay="300"
					>
						<p className="services-image__text">Special Occasions</p>
						<img src={Event} alt="Touring Melbourne" />
					</div>

					{/* <div
            className="services-image"
            data-aos="flip-right"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <p className="services-image__text">Wedding Car Hire</p>
            <img src={WeddingTransfer} alt="A Wedding Event" />
          </div> */}
					<div
						className="services-image services-image__blank"
						data-aos="flip-right"
						data-aos-duration="2000"
						data-aos-delay="300"
					>
						{/* <p className="services-image__text">Wedding Car Hire</p>
            <img src={WeddingTransfer} alt="A Wedding Event" /> */}
					</div>
				</article>

				<div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="200">
					<Button
						theme="secondary"
						btnName="Learn More"
						link="/services"
					></Button>
				</div>
			</section>

			<section className="extra">
				<article className="extra-contents">
					<div className="extra-contents__items">
						<SVGIcon name="wifi" className="extra-contents__items--icon" />
						<p className="extra-contents__items--text">free integrated wifi</p>
					</div>
					<div className="extra-contents__items">
						<SVGIcon
							name="qualityPhone"
							className="extra-contents__items--icon"
						/>
						<p className="extra-contents__items--text">
							24 hours a day 7 days a week
						</p>
					</div>
					<div className="extra-contents__items">
						<SVGIcon name="handWash" className="extra-contents__items--icon" />
						<p className="extra-contents__items--text">hygiene kit</p>
					</div>
					<div className="extra-contents__items">
						<SVGIcon name="chauffeur" className="extra-contents__items--icon" />
						<p className="extra-contents__items--text">professional drivers</p>
					</div>
					<div className="extra-contents__items">
						<SVGIcon name="sedan" className="extra-contents__items--icon" />
						<p className="extra-contents__items--text">latest vehicles</p>
					</div>
					<div className="extra-contents__items">
						<SVGIcon name="charger" className="extra-contents__items--icon" />
						<p className="extra-contents__items--text">smartphone chargers</p>
					</div>
				</article>
			</section>
			<Action />
			<Footer />
		</Fragment>
	);
}

export default Home;
