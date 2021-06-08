import React from "react";

import ToggleBtn from "../mobileToggle/mobileToggle";
import Button from "../../button/button";

import "../../../scss/main.css";

const mobileNav = () => {
	return (
		<nav className="mobile">
			<div className="mobile-content">
				<ToggleBtn className="mobile-btn" />
				<Button btnName="Book Now" theme="mobile" link="/reservation"></Button>
			</div>
		</nav>
	);
};

export default mobileNav;
