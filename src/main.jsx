import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import toast, { Toaster } from 'react-hot-toast';
import { HashRouter, BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <HashRouter>
      <App />
      <Toaster/>
    </HashRouter>,
  document.getElementById("root")
);
