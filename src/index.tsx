import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { WebPage } from "./common";
import { Theme } from "./theme";

ReactDOM.render(
  <Theme>
    <BrowserRouter>
      <WebPage>
        <App />
      </WebPage>
    </BrowserRouter>
  </Theme>,
  document.getElementById("root")
);
