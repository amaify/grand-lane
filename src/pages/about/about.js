import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Action from "../../components/footer/action";
import Button from "../../components/button/button";
import SVGIcon from "../../components/svgIcons/svg";

import AboutImage from "../../images/about-image-medium.jpg";

const About = (props) => {
	return (
		<Fragment>
			<Helmet>
				<title>About - GrandLane Services</title>
				<meta
					name="description"
					content="GrandLane Chauffeurs has been taking people places for years. 
					We specialize in airport transfers, corporate transfers, live concerts, 
					sight- seeing tours and a variety of other related services."
				/>
			</Helmet>
			<section className="about-intro">
				<Header />
				<div className="about-intro__content">
					<h2 className="about-intro__heading">about</h2>
					<p className="about-intro__text">
						we are the most popular chauffeur service in melbourne
					</p>
				</div>
			</section>

			<section className="about-desc">
				<div className="about-desc__content about-desc__content1">
					<h3
						className="about-desc__heading"
						data-aos="fade-left"
						data-aos-duration="2000"
						data-aos-delay="500"
					>
						about us
					</h3>
					<p
						className="about-desc__text"
						data-aos="fade-up"
						data-aos-duration="2000"
						data-aos-delay="500"
					>
						Grandlane Chauffeurs has been taking people places for years. We
						specialize in airport transfers, corporate transfers, live concerts,
						sight-seeing tours and a variety of other related services. We keep
						customer satisfaction at the forefront of our priorities. You can
						rely on us for a prompt and efficient service. All our chauffeurs
						are licensed and hired after rigorous background checks. They have
						extensive knowledge of the shortest routes to take.
					</p>
				</div>
				<div
					className="about-desc__content about-desc__image"
					data-aos="flip-left"
					data-aos-duration="2000"
					data-aos-delay="500"
				>
					<div className="about-desc__content about-desc__imgContainer">
						<img src={AboutImage} alt="A man in a car" />
					</div>
				</div>
			</section>

			<section className="about-highlight">
				<h2
					className="about-highlight__heading"
					data-aos="fade-down"
					data-aos-duration="2000"
					data-aos-delay="500"
				>
					why choose us?
				</h2>
				<p
					className="about-highlight__text"
					data-aos="fade-right"
					data-aos-duration="2000"
					data-aos-delay="500"
				>
					Grandlane Chauffeurs is Melbourne’s most trusted and professional
					chauffeur service offering chauffeured luxury cars for special
					occasions and airport transfer services.
				</p>
				<div className="about-highlight__qualities">
					<div
						className="about-highlight__quality"
						data-aos="fade-left"
						data-aos-duration="2000"
						data-aos-delay="500"
					>
						<SVGIcon
							className="about-highlight__quality--icon"
							name="satisfaction"
						/>
						<h3 className="about-highlight__quality--heading">satisfaction</h3>
						<p className="about-highlight__quality--text">
							Our priority is to ensure our clients are completely satisfied
							with the entire process. This is why we tailor our services to
							meet the demand of each client.
						</p>
					</div>
					<div
						className="about-highlight__quality"
						data-aos="fade-down"
						data-aos-duration="2000"
						data-aos-delay="500"
					>
						<SVGIcon className="about-highlight__quality--icon" name="safety" />
						<h3 className="about-highlight__quality--heading">safety</h3>
						<p className="about-highlight__quality--text">
							We vet and run intensive background checks on all our professional
							chauffeurs, and we make sure that our vehicles are in great
							condition. You don’t have anything to worry about; just sit back,
							relax and enjoy the ride.
						</p>
					</div>
					<div
						className="about-highlight__quality"
						data-aos="fade-right"
						data-aos-duration="2000"
						data-aos-delay="500"
					>
						<SVGIcon
							className="about-highlight__quality--icon"
							name="dollarSign"
						/>
						<h3 className="about-highlight__quality--heading">
							competitive pricing
						</h3>
						<p className="about-highlight__quality--text">
							We aim to provide the best chauffeur driven service at an
							affordable price.
						</p>
					</div>
					<div
						className="about-highlight__quality"
						data-aos="flip-left"
						data-aos-duration="2000"
						data-aos-delay="500"
					>
						<SVGIcon
							className="about-highlight__quality--icon"
							name="rightCheck"
						/>
						<h3 className="about-highlight__quality--heading">
							on-time guarantee
						</h3>
						<p className="about-highlight__quality--text">
							We will monitor flights so your chauffeur can swiftly transport
							you to where you need to be without any delay whatsoever.
						</p>
					</div>
					<div
						className="about-highlight__quality"
						data-aos="flip-up"
						data-aos-duration="2000"
						data-aos-delay="500"
					>
						<SVGIcon className="about-highlight__quality--icon" name="star" />
						<h3 className="about-highlight__quality--heading">quality</h3>
						<p className="about-highlight__quality--text">
							Through innovation and technology, we employ the use of the best
							available state of the art vehicles in the market to always ensure
							we deliver on our promise.
						</p>
					</div>
					<div
						className="about-highlight__quality"
						data-aos="flip-right"
						data-aos-duration="2000"
						data-aos-delay="500"
					>
						<SVGIcon className="about-highlight__quality--icon" name="clock" />
						<h3 className="about-highlight__quality--heading">
							available 24/7
						</h3>
						<p className="about-highlight__quality--text">
							At your service 24/7, we take pride in what we do; and we are
							always available to meet your needs at any time of the day.
						</p>
					</div>
				</div>

				<div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="500">
					<Button
						btnName="Book Now"
						theme="secondary"
						link="/reservation"
					></Button>
				</div>
			</section>

			<section className="about-testimonial">
				<h2 className="about-testimonial__heading">testimonial</h2>
				<div className="about-testimonial__slider">
					<Carousel
						axis="horizontal"
						autoPlay={true}
						infiniteLoop={true}
						showThumbs={false}
						useKeyboardArrows={true}
						stopOnHover={false}
						interval={10000}
						showIndicators={false}
						showStatus={false}
						transitionTime={500}
					>
						<div className="about-testimonial__content">
							<h3 className="about-testimonial__content--text">
								Fast and Professional are the best words to best describe the
								GrandLane Chauffeurs team; they got me to my business meeting on
								time and in style, really looking forward to next time I travel
								with them!
							</h3>
							<p className="about-testimonial__content--name">Gary Ethan</p>
						</div>

						<div className="about-testimonial__content">
							<h3 className="about-testimonial__content--text">
								These guys are so reliable; I can always count on them to get me
								to my business meetings on time regardless of the traffic,
								weather or time of day, I look forward to riding with you guys
								again; Highly recommended.
							</h3>
							<p className="about-testimonial__content--name">
								Meredith Peters
							</p>
						</div>

						<div className="about-testimonial__content">
							<h3 className="about-testimonial__content--text">
								Executive travel with exemplary customer service; driven in
								timely comfort and style, thank you. I will have no hesitation
								in using your services again and recommending your business to
								others.
							</h3>
							<p className="about-testimonial__content--name">
								Samuel Denilson
							</p>
						</div>

						<div className="about-testimonial__content">
							<h3 className="about-testimonial__content--text">
								Service was fantastic, have used many times now and the drivers
								are always on time. The cars are always clean and tidy. Will
								definitely continue using this great Company.{" "}
							</h3>
							<p className="about-testimonial__content--name">
								Edward Stephens
							</p>
						</div>

						<div className="about-testimonial__content">
							<h3 className="about-testimonial__content--text">
								Excellent service - would recommend no-one else. The online
								internet booking tool is great as is the service. The car
								couldn't have been more comfortable.
							</h3>
							<p className="about-testimonial__content--name">Rita Bowman</p>
						</div>
					</Carousel>
				</div>
			</section>
			<Action />
			<Footer />
		</Fragment>
	);
};

export default About;
