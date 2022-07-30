// import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
// import store from "./redux/store";
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Render = (state) =>
  root.render(
    <BrowserRouter>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        // addMessage={store.addMessage.bind(store)}
        // updateNewPostText={store.updateNewPostText.bind(store)}
        // updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </BrowserRouter>
  );

Render(store.getState());

store.subscribe(() => {
  let state = store.getState();
  Render(state);
});
