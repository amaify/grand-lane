import * as actionType from "../actions/actionType";

const initialState = {
	isAuth: false,
	authPending: false,
	showModal: false,
	showError: false,
	token: null,
	userId: null,
	error: null,
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.LOGIN_PENDING:
			return {
				...state,
				authPending: true,
				showModal: true,
			};

		case actionType.SIGNUP:
			return {
				...state,
				userSignupDetails: {
					firstName: action.userSignupDetails.firstName,
					lastName: action.userSignupDetails.lastName,
					email: action.userSignupDetails.email,
					password: action.userSignupDetails.password,
				},
			};

		case actionType.SIGNUP_SUCCESS:
			return {
				...state,
				// isAuth: false,
				authPending: false,
				showModal: false,
				error: null,
			};

		case actionType.LOGIN:
			return {
				...state,
				userLoginDetails: {
					email: action.userLoginDetails.email,
					password: action.userLoginDetails.password,
				},
			};

		case actionType.LOGIN_SUCCESS:
			return {
				...state,
				isAuth: true,
				error: null,
				authPending: false,
				showModal: false,
				token: action.loginData.data.login.token,
				userId: action.loginData.data.login.userId,
			};

		case actionType.LOGIN_ERROR:
			return {
				...state,
				error: action.error,
				authPending: false,
				showModal: false,
			};

		case actionType.LOGOUT:
			return {
				...state,
				isAuth: false,
				token: null,
				userId: null,
				error: null,
			};

		case actionType.CLEAR_ERROR:
			return {
				...state,
				error: null,
			};

		case actionType.SHOW_ERROR:
			return {
				...state,
				showError: true,
				authPending: false,
				showModal: false,
				error: action.error,
			};

		case actionType.CLOSE_MODAL:
			return {
				...state,
				showError: false,
			};

		default:
			return state;
	}
};
