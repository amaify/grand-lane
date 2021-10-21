import React from "react";

function BookingInput(props) {
	const hours = [];
	let i = 1;
	while (i < 25) {
		const hour = i;
		i++;
		hours.push(hour);
	}

	const services = [
		{ id: 1, value: "Airport Transfer", name: "Airport Transfer" },
		{ id: 2, value: "Corporate Transfer", name: "Corporate Transfer" },
	];

	const hourlyService = [
		{ id: 1, value: "Special Occasion", name: "Special Occasions" },
		{ id: 2, value: "Daily Tours", name: "Daily Tours" },
		{ id: 3, value: "Wine Tours", name: "Wine Tours" },
	];

	return (
		<div className="booking-form__form--content">
			{props.label && <label htmlFor={props.id}>{props.label}</label>}
			{props.control === "input" && (
				<input
					type={props.type}
					id={props.id}
					required={props.required}
					placeholder={props.placeholder}
					value={props.value}
					onChange={props.onChange}
					name={props.name}
				/>
			)}
			{props.control === "textarea" && (
				<textarea
					id={props.id}
					rows={props.rows}
					cols={props.cols}
					required={props.required}
					placeholder={props.placeholder}
					value={props.value}
					onChange={props.onChange}
					name={props.name}
				/>
			)}
			{props.control === "select" && (
				<select name={props.name} id={props.id} required>
					{hours.map((h) => (
						<option value={`${h}`} key={h}>{`${h} hour(s)`}</option>
					))}
				</select>
			)}
			{props.control === "serviceSelect" && (
				<select name={props.name} id={props.id} required>
					{services.map((service) => (
						<option value={service.value} key={service.id}>
							{service.name}
						</option>
					))}
				</select>
			)}

			{props.control === "hourlyService" && (
				<select name={props.name} id={props.id} required>
					{hourlyService.map((service) => (
						<option value={service.value} key={service.id}>
							{service.name}
						</option>
					))}
				</select>
			)}
		</div>
	);
}

export default BookingInput;
