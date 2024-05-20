import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Auth0ProviderWithNavigate from "./services/Auth0ProviderWithNavigate";
import "./styles/main.scss"; // Ensure you have some basic styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Auth0ProviderWithNavigate> */}
      <App />
    {/* </Auth0ProviderWithNavigate> */}
  </React.StrictMode>
);
