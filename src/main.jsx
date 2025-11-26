import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Add error boundary
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});

console.log("main.jsx loaded");

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found!");
  // Fallback: create root element
  const body = document.body;
  const div = document.createElement("div");
  div.id = "root";
  body.appendChild(div);
  const root = ReactDOM.createRoot(div);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.log("Root element found, creating React root...");
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("React app rendered");
  } catch (error) {
    console.error("Error rendering React app:", error);
    rootElement.innerHTML = `<div style="padding: 20px; color: red;">
      <h1>Error Loading App</h1>
      <p>${error.message}</p>
      <pre>${error.stack}</pre>
    </div>`;
  }
}
