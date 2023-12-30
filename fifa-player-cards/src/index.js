// Import React and ReactDOM from the appropriate modules
import React from "react";
import ReactDOM from "react-dom/client";

// Import the root component of your application (presumably the App component)
import App from "./App";

// Import the function for measuring performance in your app
import reportWebVitals from "./reportWebVitals";

// Create a root for concurrent mode, targeting the element with the id 'root'
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component within the root, wrapped in React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results or send to an analytics endpoint.
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
