import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state";

// let postData = [
//   { id: 1, message: "Hi, how are you", like: 3 },
//   { id: 2, message: "It's my first post", like: 5 },
// ];

// let dialogsData = [
//   { id: 1, name: "Dimych" },
//   { id: 2, name: "Bodrey" },
//   { id: 3, name: "Sergey" },
//   { id: 4, name: "Andrey" },
//   { id: 5, name: "Igor" },
// ];
// let messagesData = [
//   { id: 1, message: "Hi" },
//   { id: 2, message: "How are you" },
//   { id: 3, message: "Yo" },
//   { id: 4, message: "Whats up" },
//   { id: 5, message: "Hi" },
// ];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
