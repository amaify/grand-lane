import {
	paymentProcessing,
	paymentSuccessful,
	paymentError,
	removeItemsFromStorage,
} from "../actions/paymentAction";

import { resetRoutes } from "../actions/routeAction";

export const handlePaymentSubmit = (ownProps, token) => {
	return (dispatch) => {
		dispatch(paymentProcessing());

		let origin;
		let destination;
		let service;
		let numberOfHours;
		let duration;
		let distance;
		const vehicleType = localStorage.getItem("vehicle");
		const date = localStorage.getItem("date");
		const time = localStorage.getItem("time");
		const price = localStorage.getItem("price");
		const serviceType = localStorage.getItem("serviceType");
		const hours = localStorage.getItem("hours");
		const flightNumber = localStorage.getItem("flightNumber");
		const pickupSign = localStorage.getItem("pickupSign");
		const phoneNumber = localStorage.getItem("phoneNumber");
		const notes = localStorage.getItem("notes");
		const distanceDetails = JSON.parse(localStorage.getItem("distance"));
		const billingEmail = localStorage.getItem("billingEmail");
		const billingName = localStorage.getItem("billingName");

		if (serviceType) {
			service = localStorage.getItem("serviceType");
		}
		if (hours) {
			numberOfHours = localStorage.getItem("hours");
		}
		origin = distanceDetails.distance.origin_addresses[0];
		destination = distanceDetails.distance.destination_addresses[0];
		duration = distanceDetails.distance.rows[0].elements[0].duration.text;
		distance = distanceDetails.distance.rows[0].elements[0].distance.text;

		const graphqlQuery = {
			query: `
        mutation {
          createRide(userInput: {
            origin: "${origin}",
            destination: "${destination}",
            pickupDate: "${date}",
            pickupTime: "${time}",
            duration: "${duration}",
            distance: "${distance}",
            vehicleType: "${vehicleType}",
            price: "${price}",
            serviceType: "${service}"
            hours: "${numberOfHours}",
            flightNumber: "${flightNumber}",
            pickupSign: "${pickupSign}",
            phoneNumber: "${phoneNumber}",
            billingEmail: "${billingEmail}",
			billingName: "${billingName}",
            notes: "${notes}"
          }){
            _id
            origin
            destination
            price
            vehicleType
            pickupDate
            pickupTime
            duration
            distance
          }
        }
      `,
		};
		fetch("https://grand-lane.herokuapp.com/graphql", {
			method: "POST",
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(graphqlQuery),
		})
			.then((response) => response.json())
			.then((resData) => {
				if (resData.errors && resData.errors[0].status === 401) {
					throw new Error("Not Authenticated");
				}
				if (resData.errors) {
					throw new Error("Not Successful!");
				}
				// setDataLoading(false);
				// setPaymentInfo(false);
				dispatch(paymentSuccessful());
				dispatch(resetRoutes());
				ownProps.replace("/booking-successful");
				dispatch(removeItemsFromStorage());
			})
			.catch((err) => {
				// setDataLoading(false);
				// setShowInfo(true);
				// setErrorMessage(err.message);
				dispatch(paymentError(err));
			});
	};
};
