import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers/myreducer";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    {" "}
    <Main />
  </Provider>,
  document.getElementById("root")
);
