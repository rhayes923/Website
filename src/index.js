import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme.js";
import "./styles/index.css";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.Fragment>
);
