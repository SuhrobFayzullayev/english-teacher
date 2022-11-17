import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routing";
import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/pagination";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
