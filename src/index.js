import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const Render = (state) =>
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App store={store}/>
    </Provider>
  </BrowserRouter>
);

// Render(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   Render(state);
// });
