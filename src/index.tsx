import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { HashRouter } from "react-router-dom";
import { WebPage } from "./common";
import { Theme } from "./theme";

ReactDOM.render(
  <Theme>
    <HashRouter>
      <WebPage>
        <App />
      </WebPage>
    </HashRouter>
  </Theme>,
  document.getElementById("root")
);
