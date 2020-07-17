import React, { FunctionComponent, ReactNode } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { StylesProvider } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { muiTheme } from "./theme";
// [IMPORT NEW SERVICE HOOK ABOVE] < Needed for generating services seamlessly

// Un-comment to mock http requests in development mode (npm start)
// if (process.env.NODE_ENV === "development") {
//   const worker = require("./mocks/worker").default;
//   worker.start();
// }

// Wrap App in service providers
const ServiceProviders: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  // [INITIALIZE NEW SERVICE HOOK ABOVE] < Needed for generating services seamlessly

  return (
    <>
      {/* [INSERT NEW SERVICE PROVIDER OPENING TAG ABOVE] < Needed for generating services seamlessly */}
      {children}
      {/* [INSERT NEW SERVICE PROVIDER CLOSING TAG ABOVE] < Needed for generating services seamlessly */}
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <ServiceProviders>
          <App />
        </ServiceProviders>
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
