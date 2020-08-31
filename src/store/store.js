// import { loginReducer } from "./reducers/authReducer";
// import { menuReducer } from "./reducers/menuReducer";
import {
  loginReducer,
  menuReducer,
  paymentReducer,
  routeReducer,
} from "./reducers/index";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

function loadStateFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

const logger = (store) => {
  return (next) => {
    return (action) => {
      // console.log("[middleware] Dispatching", action);
      const result = next(action);
      // console.log("[middleware] next state", store.getState());
      return result;
    };
  };
};

const persistState = loadStateFromLocalStorage();

const rootReducer = combineReducers({
  authentication: loginReducer,
  sideDrawer: menuReducer,
  payment: paymentReducer,
  route: routeReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  persistState,
  composeEnhancer(applyMiddleware(logger, thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
