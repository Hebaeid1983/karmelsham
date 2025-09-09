// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // important for Tailwind

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Heba-eid-Atia-karam-elsham/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
