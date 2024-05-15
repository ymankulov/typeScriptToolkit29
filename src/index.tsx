import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { setUpStore } from "./redux";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
let store = setUpStore();
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
