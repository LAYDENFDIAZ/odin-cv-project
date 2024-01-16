import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Import Tailwind CSS styles
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
