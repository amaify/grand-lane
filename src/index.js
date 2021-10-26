import "./wdyr";
import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// import { loginReducer } from "./store/reducers/authReducer";
// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import store from "./store/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
	hydrate(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>,
		rootElement
	);
} else {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>,
		rootElement
	);
}

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
