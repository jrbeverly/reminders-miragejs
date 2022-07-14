import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

import App from "./components/App";
import makeServer from "./api/reminders";
import "tailwindcss/tailwind.css";

makeServer();

const rootElement = document.getElementById("root")

ReactDOM.render(
  <BrowserRouter>
    <QueryParamProvider ReactRouterRoute={Route}>
      <App />
    </QueryParamProvider>
  </BrowserRouter>,
  rootElement
);
