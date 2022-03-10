import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import propTypes from "prop-types";
import RootReducer from "./redux/RootReducer";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./css/index.css";

const ReduxWrapper = ({ children }) => {
  const store = createStore(RootReducer, composeWithDevTools());
  return <Provider store={store}> {children} </Provider>;
};
ReduxWrapper.propTypes = {
  children: propTypes.element.isRequired,
};

ReactDOM.render(
  <ReduxWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxWrapper>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
