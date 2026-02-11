import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import Navigation from "./layouts/Navigation.tsx";
import { Analytics } from "@vercel/analytics/react";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
      <App />
    </BrowserRouter>
    <Analytics />
  </StrictMode>,
);
