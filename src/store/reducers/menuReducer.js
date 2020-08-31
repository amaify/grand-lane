import * as actionType from "../actions/actionType";

const initialState = {
  sideDrawerOpen: false,
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DRAWER_OPEN:
      return {
        ...state,
        sideDrawerOpen: true,
      };

    case actionType.DRAWER_CLOSE:
      return {
        ...state,
        sideDrawerOpen: false,
      };

    default:
      return state;
  }
};
