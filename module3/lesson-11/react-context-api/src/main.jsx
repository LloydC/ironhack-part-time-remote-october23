import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProviderWrapper } from "./context/theme.context";
import { LanguageProviderWrapper } from "./context/language.context";
import App from "./App";
 
import { BrowserRouter as Router } from "react-router-dom";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProviderWrapper>
        <LanguageProviderWrapper>
          <App />
        </LanguageProviderWrapper>
      </ThemeProviderWrapper>
    </Router>
  </React.StrictMode>
);