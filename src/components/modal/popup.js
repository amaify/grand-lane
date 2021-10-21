import React from "react";

import Button from "../button/button";
import CountdownTimer from "../countdown/countdown";

function Popup({ onClick }) {
	return (
		<div className="popup" onClick={onClick}>
			<div className="popup-content">
				<CountdownTimer />
				<h1 className="popup-content__heading">
					<span>melbourne cup</span>
					<span>2021</span>
				</h1>

				<h3 className="popup-content__text">
					<span>racing day</span>
					<span>
						tuesday 2<sup>nd</sup> november 2021
					</span>
				</h3>

				<Button btnName="Book Now" theme="primary" link="/reservation" />
			</div>
		</div>
	);
}

export default Popup;
