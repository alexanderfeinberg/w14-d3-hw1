import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PupProvider } from "./context/pupContext";

ReactDOM.render(
  <PupProvider>
    <App />
  </PupProvider>,
  document.getElementById("root")
);
