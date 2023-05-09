import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import { GlobalProvider } from "./Context/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
