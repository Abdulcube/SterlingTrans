import React from "react";
import { Route, Routes } from "react-router";
import "./index.css";
import { Contact } from "./components/ContactForm/Contact";
import { HomePage } from "./routes";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
