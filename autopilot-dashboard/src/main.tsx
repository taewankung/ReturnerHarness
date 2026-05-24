import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./themes/green-dark.css";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
