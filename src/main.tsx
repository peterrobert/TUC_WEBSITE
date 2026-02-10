import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import Navigation from "./layouts/Navigation.tsx";
import { Analytics } from "@vercel/analytics/next";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navigation />
    <App />
    <Analytics />
  </StrictMode>,
);
