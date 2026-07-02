import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";

import "./index.css";
import App from "./App.jsx";

// Google Analytics
ReactGA.initialize("G-F6T2NPTFXP");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
