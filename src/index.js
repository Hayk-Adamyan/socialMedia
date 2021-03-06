import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
let postData = [
  { id: 1, message: "Hi,how are you", likesCount: 12 },
  { id: 2, message: "its my post", likesCount: 11 },
];
let dialogs = [
  { id: 1, name: "Hayk" },
  { id: 2, name: "Hayk2" },
  { id: 3, name: "Hayk3" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "how are you" },
  { id: 3, message: "fine" },
];
ReactDOM.render(
  <App postData={postData} dialogs={dialogs} messages={messages} />,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
