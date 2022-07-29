// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
import state from "./redux/state";
// import { addPost } from "./redux/state";
import { Render } from "./render";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <BrowserRouter>
//     <App state={state} addPost={addPost} />
//   </BrowserRouter>
// );

Render(state);
