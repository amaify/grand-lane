import * as actionType from "../actions/actionType";

const initialState = {
	errorMessage: null,
	showInfo: false,
	setPaymentLoading: false,
	setPaymentInfo: false,
	products: {
		name: `${localStorage.getItem("serviceType")}`,
		price: localStorage.getItem("price"),
		productBy: "GrandLane chauffeurs",
		customerName: `${localStorage.getItem("firstName")} ${localStorage.getItem(
			"lastName"
		)}`,
		customerEmail: localStorage.getItem("email"),
	},
	paymentSuccessful: false,
	guest: false,
};

export const paymentReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.PAYMENT_PROCESSING:
			return {
				...state,
				setPaymentLoading: true,
			};

		case actionType.PAYMENT_SUCCESSFUL:
			return {
				...state,
				setPaymentLoading: false,
				setPaymentInfo: false,
				paymentSuccessful: true,
			};

		case actionType.PAYMENT_ERROR:
			return {
				...state,
				setPaymentLoading: false,
				setPaymentInfo: false,
				showInfo: true,
				errorMessage: action.error,
			};

		case actionType.REMOVE_ITEMS_FROM_STORAGE:
			const removeItemsFromStorage = () => localStorage.removeItem("ridesId");
			localStorage.removeItem("price");
			localStorage.removeItem("date");
			localStorage.removeItem("distance");
			localStorage.removeItem("hours");
			localStorage.removeItem("serviceType");
			localStorage.removeItem("time");
			localStorage.removeItem("vehicle");
			localStorage.removeItem("vanPrice");
			localStorage.removeItem("sedanPrice");
			localStorage.removeItem("sedanHour");
			localStorage.removeItem("vanHour");
			localStorage.removeItem("serviceType");
			localStorage.removeItem("time");
			localStorage.removeItem("flightNumber");
			localStorage.removeItem("pickupSign");
			localStorage.removeItem("phoneNumber");
			localStorage.removeItem("notes");
			localStorage.removeItem("billingEmail");
			localStorage.removeItem("billingName");
			localStorage.removeItem("vehicleImage");
			localStorage.removeItem("fixedPrice");
			localStorage.removeItem("distanceValue");

			return {
				...state,
				removeItemsFromStorage: removeItemsFromStorage(),
			};

		case actionType.SET_GUEST:
			return {
				...state,
				guest: true,
			};

		case actionType.GET_ITEMS_FROM_STORAGE:
			const products = {
				name: `${localStorage.getItem("serviceType")}`,
				price: localStorage.getItem("price"),
				customerName: `${localStorage.getItem(
					"firstName"
				)} ${localStorage.getItem("lastName")}`,
				customerEmail: localStorage.getItem("email"),
			};
			return {
				...state,
				products: {
					name: products.name,
					price: products.price,
					customerName: products.customerName,
					customerEmail: products.customerEmail,
					productBy: "GrandLane chauffeurs",
				},
			};

		case actionType.PAYMENT_PAGE:
			return {
				...state,
				paymentSuccessful: false,
				guest: false,
			};
		default:
			return state;
	}
};
