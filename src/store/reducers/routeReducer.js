import * as actionType from "../actions/actionType";

const initialState = {
  vehicleRoute: false,
  optionsRoute: false,
  checkoutRoute: false,
};

export const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SELECTED_VEHICLE:
      return {
        ...state,
        vehicleRoute: true,
      };

    case actionType.PROVIDED_OPTIONS:
      return {
        ...state,
        optionsRoute: true,
      };

    case actionType.NAV_CHECKOUT:
      return {
        ...state,
        checkoutRoute: true,
      };

    case actionType.RESET_ROUTES:
      return {
        ...state,
        vehicleRoute: false,
        optionsRoute: false,
        checkoutRoute: false, 
      };
    default:
      return state;
  }
};
