import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./assets/index.css";
import "./assets/404error.css";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
