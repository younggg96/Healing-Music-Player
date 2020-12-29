import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core";
import theme from "./assets/theme/theme";

// css
import "./css/index.scss";
import "./css/app.css";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <div className="bg">
        <Container maxWidth="xl">
          <App />
        </Container>
      </div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
