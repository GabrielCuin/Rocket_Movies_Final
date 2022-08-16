import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes";
import React from "react";

import { AuthProvider } from "./hooks/auth";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
