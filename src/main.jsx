import { StrictMode } from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/global.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
