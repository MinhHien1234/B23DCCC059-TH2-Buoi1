
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import TDL from "./Todolist";
import ImageSearchApp from "./ImageSearch";
import RandomColorApp from "./RandomColor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div style={{ display: "flex" }}>
    {/* <App /> */}
    <TDL />
    <ImageSearchApp />
    <RandomColorApp />
  </div>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
