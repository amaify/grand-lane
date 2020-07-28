import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import AirportTransfer from "../../images/transfer-medium.jpg";
import BusinessTransfer from "../../images/business-3-medium.jpg";
import Event from "../../images/events-2-medium.jpg";
import Wedding from "../../images/events-medium.jpg";
import Daily from "../../images/testimonial-2-medium.jpg";
import Winery from "../../images/winery-2-medium.jpg";

const service = props => {
  return (
    <Fragment>
      <Helmet>
        <title>Services | GrandLane Chauffeur Services</title>
      </Helmet>
      <section className="service-intro">
        <Header drawerToggle={props.sideDrawerToggle} isAuth={props.isAuth} />
        <div className="service-intro__content">
          <h2 className="service-intro__content--heading">services</h2>
          <p className="service-intro__content--text">
            choose from our range of services
          </p>
        </div>
      </section>

      <section className="service-contents">
        <h2 className="service-contents__heading">our services</h2>
        <div className="service-content">
          <article className="service-content__container">
            <div className="service-content__container--content service-content__container--image">
              <figure className="service-content__image">
                <img
                  src={AirportTransfer}
                  alt="People Being Transported from an Airport"
                />
              </figure>
            </div>
            <div className="service-content__container--content service-content__container--texts">
              <h3 className="service-content__container--heading">
                airport transfer
              </h3>
              <p className="service-content__container--text">
                Looking for a ride from or to the Airport? Are you looking for
                professional, luxurious airport transfers for you or your
                family? Our Premium Airport transfer service is reliable and
                available to meet all domestic and international flights in
                Melbourne any time of day or night. Our airport transfer service
                is perfect for individual, couple, or even a large family or
                group of passengers, using our premium cars to take you from or
                to the Airport. Your chauffeur will meet and greet you, attend
                to your luggage and ensure that you arrive at your final
                destination on time and in comfort; all you need to do is relax.
              </p>
            </div>
          </article>

          <article className="service-content__container">
            <div className="service-content__container--content service-content__container--image">
              <figure className="service-content__image">
                <img
                  src={BusinessTransfer}
                  alt="Business Woman Going for a Meeting."
                />
              </figure>
            </div>
            <div className="service-content__container--content service-content__container--texts">
              <h3 className="service-content__container--heading">
                Corporate Transfer
              </h3>
              <p className="service-content__container--text">
                Whether you are driving to pick up important clients or heading
                for a crucial meeting - travelling in the comfort of a chauffeur
                provides a more relaxing, stress free environment for busy
                executives. Your choice of commute defines the integrity and
                reputation of your business, and that's why we at GrandLane
                Chauffeurs strive to deliver streamlined, relaxing experience
                every time you choose us. GrandLane Chauffeurs offers luxurious
                chauffeur driven pick and drop service in luxury cars for
                corporate executives, VIPs and other business professionals in
                Melbourne. With well-trained, chauffeurs on board, you can count
                on us for convenient, comfortable and impeccable corporate
                transport service whenever you want.
              </p>
            </div>
          </article>

          <article className="service-content__container">
            <div className="service-content__container--content service-content__container--image">
              <figure className="service-content__image">
                <img src={Event} alt="A Decorated Table in an event." />
              </figure>
            </div>
            <div className="service-content__container--content service-content__container--texts">
              <h3 className="service-content__container--heading">
                Special occasions
              </h3>
              <p className="service-content__container--text">
                Do you have a special occasion coming up and want to make it as
                memorable as possible, but running out of ideas? Why not
                consider the luxurious touch of a chauffeur-driven luxury car to
                give the occasion that little extra VIP feeling? Whatever your
                special occasion, at GrandLane Chauffeurs we offer an exclusive
                service tailor-made for you, coming to pick you up from your
                location and delivering you wherever you need to be in style and
                comfort with minimum hassle; and then back to your original
                destination or another, depending on your needs.
              </p>
            </div>
          </article>

          <article className="service-content__container">
            <div className="service-content__container--content service-content__container--image">
              <figure className="service-content__image">
                <img src={Wedding} alt="Wedding rings on a bible." />
              </figure>
            </div>
            <div className="service-content__container--content service-content__container--texts">
              <h3 className="service-content__container--heading">
                Wedding transfer
              </h3>
              <p className="service-content__container--text">
                Congratulations on finding the one! Now that you've set a date
                for your wedding, you just have to get everything up from
                scratch; and a fairy tale wedding takes a lot of planning and
                preparation to ensure that everything goes smoothly without a
                hitch. It's perfectly normal to feel overwhelmed and even have
                some jittery feelings right up to the altar, but at GrandLane
                Chauffeurs, we make sure that the whole event runs smoothly,
                ensuring that everyone is where they need to be, when they need
                to be.
              </p>
            </div>
          </article>

          <article className="service-content__container">
            <div className="service-content__container--content service-content__container--image">
              <figure className="service-content__image">
                <img
                  src={Daily}
                  alt="A Woman enjoying the view from her ride."
                />
              </figure>
            </div>
            <div className="service-content__container--content service-content__container--texts">
              <h3 className="service-content__container--heading">
                Daily Tours
              </h3>
              <p className="service-content__container--text">
                With so much to see and do in and around Melbourne, taking a
                tour around the city with a professional tour guide is one smart
                way to pack as many sights into your itinerary as possible. At
                first glance, open-topped buses might seem ideal, but their
                convenience is matched only by the fact that you're being packed
                like sardines with noisy tourists and their bored kids; and
                there's no chance of lingering for a little while longer at
                landmarks. That's less than ideal, and at GrandLane Chauffeurs
                we've remedied that with our own luxurious take on Melbourne
                Tours. We love our beautiful city and we want to show it off to
                you. Our Luxury Chauffeur Drive gives you the ultimate freedom
                to explore Sydney's iconic landmarks at a pace that suits you.
              </p>
            </div>
          </article>

          <article className="service-content__container">
            <div className="service-content__container--content service-content__container--image">
              <figure className="service-content__image">
                <img src={Winery} alt="A Glass of Wine on top of a wood." />
              </figure>
            </div>
            <div className="service-content__container--content service-content__container--texts">
              <h3 className="service-content__container--heading">
                Wine tours
              </h3>
              <p className="service-content__container--text">
                Wine tours are a great way to spend the weekend with friends and
                family. If you are on the lookout for an affordable wine tour
                package then GrandLane Chauffeurs can help you arrange a
                delightful & memorable visit to all the best wineries in
                Melbourne. We provide you with professional drivers and
                comfortable cars to let you travel in style. We make sure we
                arrive on time at your designated pick up point. Moreover, we
                are fully capable of making it a smooth and comfortable ride to
                your favourite wineries. While enjoying our transfer service you
                can freely enjoy and sample offerings from the best wineries. We
                also provide safe transportation back to your home, ensuring you
                a tension free tour
              </p>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default service;
