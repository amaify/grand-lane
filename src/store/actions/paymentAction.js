import * as actionType from "./actionType";

export const paymentProcessing = () => {
  return {
    type: actionType.PAYMENT_PROCESSING,
  };
};

export const paymentSuccessful = () => {
  return {
    type: actionType.PAYMENT_SUCCESSFUL,
  };
};

export const paymentError = (error) => {
  return {
    type: actionType.PAYMENT_ERROR,
    error: error,
  };
};

export const removeItemsFromStorage = () => {
  return {
    type: actionType.REMOVE_ITEMS_FROM_STORAGE,
  };
};

export const getItemsFromStorage = () => {
  return {
    type: actionType.GET_ITEMS_FROM_STORAGE,
  };
};

export const setGuest = () => {
  return {
    type: actionType.SET_GUEST,
  };
};

export const paymentPage = () => {
  return {
    type: actionType.PAYMENT_PAGE,
  };
};
