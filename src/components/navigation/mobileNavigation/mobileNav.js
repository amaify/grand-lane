import React from "react";

import ToggleBtn from "../mobileToggle/mobileToggle";
import Logo from "../../logo/logo";
import Button from "../../button/button";

import "../../../scss/main.css";

const mobileNav = ({ drawerToggle }) => {
  return (
    <nav className="mobile">
      <div className="mobile-content">
        <ToggleBtn drawerToggle={drawerToggle} className="mobile-btn" />
        <Logo />
        <Button btnName="Book Now" theme="mobile" link="/reservation"></Button>
      </div>
    </nav>
  );
};

export default mobileNav;
