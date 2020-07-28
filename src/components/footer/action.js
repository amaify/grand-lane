import React from "react";

import Button from "../button/button";

const action = () => (
  <section className="action">
    <h2 className="action-heading">
      <span className="action-heading__main">where do you need to be?</span>
      <span className="action-heading__sub1">
        not only taking you to night parties, weddings, and birthdays but
      </span>
      <span className="action-heading__sub2">
        we can also take you to where you need to be
      </span>
    </h2>

    <h3 className="action-call">
      call now <span>(1800)-222-333-4444</span>
    </h3>

    <Button btnName="Book Now" theme="secondary" link="/reservation"></Button>
  </section>
);

export default action;
