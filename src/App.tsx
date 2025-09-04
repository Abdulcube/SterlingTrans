import React from "react";
import { Route, Routes } from "react-router";
import "./index.css";
import { ContactPage, HomePage, Locations } from "./routes";
import { ServicesPage } from "./routes/Services";
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<ContactPage />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </>
  );
};
