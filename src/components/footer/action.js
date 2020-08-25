import React from "react";

import Button from "../button/button";

const Action = () => {
  return (
    <section className="action">
      <h2 className="action-heading">
        <span
          className="action-heading__main"
          data-aos="flip-right"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          where do you need to be?
        </span>
        <span
          className="action-heading__sub1"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          not only taking you to night parties, weddings, and birthdays but
        </span>
        <span
          className="action-heading__sub2"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          we can also take you to where you need to be
        </span>
      </h2>

      <h3
        className="action-call"
        data-aos="fade-bottom"
        data-aos-duration="2000"
        data-aos-delay="500"
      >
        call now <span>(1800)-222-333-4444</span>
      </h3>

      <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="500">
        <Button
          btnName="Book Now"
          theme="secondary"
          link="/reservation"
        ></Button>
      </div>
    </section>
  );
};

export default Action;
