import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router";
import App from "./App";
import "./index.css";
import { HelloWorld } from "./HelloWorld";
import { Contact } from "./components/ContactForm/Contact";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/helloRoute" element={<HelloWorld route="ContactUs" />} />
        <Route path="/ContactUs" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
