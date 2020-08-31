import * as actionType from "./actionType";

export const selectedVehicle = () => {
  return {
    type: actionType.SELECTED_VEHICLE,
  };
};

export const providedOptions = () => {
  return {
    type: actionType.PROVIDED_OPTIONS,
  };
};

export const navCheckout = () => {
  return {
    type: actionType.NAV_CHECKOUT,
  };
};

export const resetRoutes = () => {
  return {
    type: actionType.RESET_ROUTES,
  };
};
