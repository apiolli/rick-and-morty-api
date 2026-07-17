import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RickAndMortyApp } from "./RickAndMortyApp";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RickAndMortyApp />
  </StrictMode>,
);
