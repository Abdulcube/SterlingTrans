import React from "react";
import { Route, Routes } from "react-router";
import "./index.css";
import { ContactPage, HomePage, TempHome } from "./routes";
import { MapsTile } from "./components/Maps/MapsTile";
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<TempHome />} />
        <Route path="/locations" element={<MapsTile />} />
      </Routes>
    </>
  );
};
