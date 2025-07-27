import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import "./index.css"; 
import PasswordAnalyzer from "./App"; // or your filename

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <PasswordAnalyzer />
  </React.StrictMode>
);

