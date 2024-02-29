import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="fake-body">
      <App />
    </div>
  </React.StrictMode>
);
