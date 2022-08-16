import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import MainAPP from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MainAPP/>
);


