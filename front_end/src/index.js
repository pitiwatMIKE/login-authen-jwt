import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from "./redux/reducers";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const RactHook = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <RactHook />
  </React.StrictMode>,
  document.getElementById("root")
);
