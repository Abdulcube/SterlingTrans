import React from "react";
import { Route, Routes } from "react-router";
import "./index.css";
import { ContactPage, HomePage, Locations, TempHome } from "./routes";
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<TempHome />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </>
  );
};
