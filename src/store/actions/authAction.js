import * as actionTypes from "./actionType";

export const signup = (firstName, lastName, email, password) => {
  return {
    type: actionTypes.SIGNUP,
    userSignupDetails: { firstName, lastName, email, password },
  };
};

export const signupSuccess = () => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
  };
};

export const login = (email, password) => {
  return {
    type: actionTypes.LOGIN,
    userLoginDetails: { email, password },
  };
};

export const loginPending = () => {
  return {
    type: actionTypes.LOGIN_PENDING,
  };
};

export const loginError = (error) => {
  return {
    type: actionTypes.LOGIN_ERROR,
    error: error,
  };
};

export const loginSuccess = (loginData) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    loginData: loginData,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const clearError = () => {
  return {
    type: actionTypes.CLEAR_ERROR,
  };
};

export const showError = (error) => {
  return {
    type: actionTypes.SHOW_ERROR,
    error: error,
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL,
  };
};
