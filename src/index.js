import React, { StrictMode } from "react"; // React
import { createRoot } from "react-dom/client"; // Biblioteca React para manipulação DOM
import "./styles.css"; // Estilos dos componentes

import App from "./App"; // O componente App

// Obtém o root (container no public/index.html) e renderiza o App
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);