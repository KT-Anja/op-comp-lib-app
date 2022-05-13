import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Start from "./pages/start";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Start />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
