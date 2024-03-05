import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";

import App from "./App.tsx";
import theme from "../theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
