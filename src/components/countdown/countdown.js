import React from "react";

import Countdown from "react-countdown";

function CountdownTimer() {
	const renderer = ({ days, hours }) => {
		let day;
		let main;
		days < 2 ? (day = "Day") : (day = "Days");

		let dayCount = (
			<h1 className="countdown">
				{days} {day} to go!
			</h1>
		);

		let hourCount = <h1 className="countdown">{hours}hrs to go!</h1>;

		days < 1 ? (main = hourCount) : (main = dayCount);
		return main;
	};
	return <Countdown date={"2021-11-02T01:02:03"} renderer={renderer} />;
}

export default CountdownTimer;
